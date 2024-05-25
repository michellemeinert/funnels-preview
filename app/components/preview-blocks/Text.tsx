type TextProps = {
  id: string;
  text: string;
  color?: string;
  align?: 'center' | 'left' | 'right';
};

const Text = ({ id, text, color, align }: TextProps) => {
  return (
    <p id={id} style={{ color: color, textAlign: align }}>
      {text}
    </p>
  );
}

export default Text;