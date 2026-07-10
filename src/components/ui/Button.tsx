import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  isSelected?: boolean;
};

const Button = ({ text, isSelected, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`w-full border-[1.5px] border-border cursor-pointer focus:outline-none focus:border-primary transition-transform
      ${isSelected ? "bg-primary text-primary-foreground" : "hover:font-bold"}
      ${className ?? ""}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
