import { componentFatherSignature } from "@/types/components_father_signature";

export const Header = ({
    children,
    extraClasses, 
    ...props
}: componentFatherSignature) => {

    return (
        <header {...props} className={`w-screen h-fit px-2 py-1 ${extraClasses || ''}`}>
            {children}
        </header>
    )
};