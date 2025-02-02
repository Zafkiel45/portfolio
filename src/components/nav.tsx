import { componentFatherSignature } from "@/types/components_father_signature";

export const Nav = ({
    children,
    extraClasses,
    ...props
}:componentFatherSignature) => {
    return (
        <nav {...props} className={`flex items-center w-full h-fit ${extraClasses || ''}`}>
            {children}
        </nav>
    )
};