interface spanSignature extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.JSX.Element | string;
};

export const StandOutText = ({
    children,
    ...props
}: spanSignature) => {
    return (
        <span {...props} className="text-[#00FEFE]">
            {children}
        </span>
    )
};