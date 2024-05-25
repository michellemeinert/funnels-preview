export type ButtonProps = {
  id: string;
  text: string;
  color?: string;
  bgColor?: string;
};


const Button = ({ id, text, color, bgColor }: ButtonProps) => {
  return (
    <button
      id={id}
      style={{ backgroundColor: bgColor, color: color }}
      className="text-white py-1.5 px-4 rounded-lg bg-blue-500 hover:bg-blue-600"
    >
      {text}
    </button>
  );
}

export default Button;