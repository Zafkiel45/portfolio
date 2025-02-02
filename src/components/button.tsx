import { buttonSignature } from "@/types/button_signature";

export const Button = ({
    content,
    extraClasses,
    ...props
}: buttonSignature) => {
    return (
        <button {...props} className={`cursor-pointer w-fit h-fit ${extraClasses || ''}`}>
            {content}
        </button>
    )
};