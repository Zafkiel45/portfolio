'use client';
import Link from "next/link";
import { useState, useEffect } from "react";

interface propsSignature {
    projectName: string;
    projectLink: string;
    projectLinkName: string;
    projectTags: string;
    children: string;
}; 


export const CardProject = ({
    children,
    projectLink,
    projectLinkName,
    projectName,
    projectTags,
}: propsSignature) => {

    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const tagsArray = projectTags.split(' ');
        setTags(() => tagsArray);
    }, []);

    return (
        <div className="w-full min-h-48 max-h-fit flex flex-col gap-4 2xl:p-6 p-3 border border-[#444444] bg-[#151515] rounded-xl shadow-sm">
            <div className="w-full">
                <h1 className="text-xl 2xl:text-3xl sm:text-2xl font-semibold">{projectName}</h1>
            </div>
            <div className="w-full">
                <p className="text-base 2xl:text-2xl sm:text-lg">
                    {children}
                </p>
            </div>
            <div className="w-full 2xl:text-xl">
                <p>
                    Link para o projeto:  
                    <Link 
                        className="text-[#73F6FF]" 
                        target="_blank" 
                        href={projectLink}
                    >
                        {projectLinkName}
                    </Link>
                </p>
            </div>
            <div className="text-sm sm:text-base 2xl:text-lg 2xl:gap-4 flex items-center flex-wrap gap-2">
                {tags.map((tag, idx) => {
                    return (
                        <span className="text-[#61F6EF] px-2 rounded-md bg-[#0A4569]"  key={idx + 1}>
                            {tag}
                        </span>
                    )
                })}
            </div>
        </div>
    )
};