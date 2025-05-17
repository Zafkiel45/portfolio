// 
import { HeaderBtn } from "@/types/header/button_header.type";
import Link from "next/link";
export const HeaderButton = ({content,target,...props}: HeaderBtn) => {
    return (
        <Link href={`/#${target}`}>
            <button {...props} className={`text-white sm:text-lg 2xl:text-2xl lg:text-xl hover:text-[#A3FF00] transition-colors cursor-pointer 2xl:px-4 py-1 px-2 rounded-md w-fit h-fit`}>
                {content}
            </button>
        </Link>
    )
};