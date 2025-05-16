export interface Button {
  btnContent: string;
};

export interface HeaderBtn extends Button, React.HTMLAttributes<HTMLButtonElement> {
  target: string;
};