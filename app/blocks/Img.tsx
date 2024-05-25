import Image from "next/image";
export type ImgProps = {
  id?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const Img = ({ id, src, alt, width = 100, height = 100 }: ImgProps) => {
  return <Image
    id={id}
    src={src}
    alt={alt}
    width={width}
    height={height}
  />
}

export default Img;
