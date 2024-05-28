import { TextProps } from "@/app/types";

const Text = ({ id, text, color, align }: TextProps) => {
  return (
    <p id={id} className="text-primary text-ellipsis overflow-hidden" style={{ color: color, textAlign: align }}>
      {text}
    </p>
  );
}

export default Text;