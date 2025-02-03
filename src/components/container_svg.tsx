interface propsSignature extends React.HTMLAttributes<HTMLDivElement> {
    children: React.JSX.Element;
};

export const ContainerSVG = ({
    children,
    ...props
}: propsSignature) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
};