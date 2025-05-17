import { componentFatherSignature } from "@/types/components_father_signature";

export const Header = ({
    children,
    extraClasses, 
    ...props
}: componentFatherSignature) => {

    return (
        <header {...props} className={`w-screen fixed z-50 h-fit ${extraClasses || ''}`}>
            {children}
        </header>
    )
};