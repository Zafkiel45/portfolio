import { buttonSignature } from "@/types/button_signature";

export const Button = ({
    content,
    extraClasses,
    ...props
}: buttonSignature) => {
    // create variatios os button component;
    return (
        <button {...props} className={`cursor-pointer 2xl:px-4 py-1 px-2 rounded-md w-fit h-fit ${extraClasses || ''}`}>
            {content}
        </button>
    )
};