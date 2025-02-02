export interface componentFatherSignature extends React.HTMLAttributes<HTMLElement> {
    children: React.JSX.Element[] | React.JSX.Element;
    extraClasses?: string | undefined;
};
