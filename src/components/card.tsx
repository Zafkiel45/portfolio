'use client';
import { useState, useEffect } from "react";

interface propsSignature {
    technology: React.JSX.Element, 
    technologyName: string,
    technologyLevel: "iniciante" | "intermediário" | "experiente",
    children: string,
};

export const Card = ({
    technology,
    technologyLevel,
    technologyName,
    children,
}: propsSignature) => {

    const [levelTagColors, setLevelTagColors] = useState<string>("");

    useEffect(() => {
        switch(technologyLevel) {
            case "iniciante":
                setLevelTagColors(() => "bg-[#1D3B47] border-[#3E84A7] text-[#00AAFF]");    
            break 
            case "intermediário":
                setLevelTagColors(() => "bg-[#473C1D] border-[#A78E3E] text-[#FFEA00]")
            break 
            case "experiente":
                setLevelTagColors(() => "bg-[#27471D] border-[#56A73E] text-[#8CFF00]")
            break 
        };
    }, [])

    return (
        <div className="w-full sm:max-w-72 h-56 flex flex-col sm:gap-5 gap-2 p-3 border border-[#444444] bg-[#151515] rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div>
                        {technology}
                    </div>
                    <div className="font-medium">
                        {technologyName}
                    </div>
                </div>
                <div className={`${levelTagColors} border rounded-md px-2`}>
                    {technologyLevel}
                </div>
            </div>
            <div className="">
                {children}
            </div>
        </div>
    ) 
};