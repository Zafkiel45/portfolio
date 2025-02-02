export interface buttonSignature extends React.HTMLAttributes<HTMLButtonElement> {
    content: string;
    extraClasses?: string | undefined;
};