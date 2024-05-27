import { ButtonProps } from "@/app/types";

const Button = ({ id, text, color, bgColor }: ButtonProps) => {
  return (
    <button
      id={id}
      style={{ backgroundColor: bgColor, color: color }}
      className="text-background py-1.5 px-4 rounded-lg bg-accent hover:bg-accent-hover"
    >
      {text}
    </button>
  );
}

export default Button;