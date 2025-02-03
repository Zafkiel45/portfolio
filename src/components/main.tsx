import { componentFatherSignature } from "@/types/components_father_signature";

export const Main = ({
    children,
    ...props
}: componentFatherSignature) => {
    return (
        <main {...props}>
            {children}
        </main>
    )
};