import { ImgProps } from "@/app/types";
import Image from "next/image";

export const Img = ({ id, src, alt, width = 300, height = 300 }: ImgProps) => {
  return <Image
    id={id}
    src={src}
    alt={alt ?? "an image"}
    width={width}
    height={height}
  />
}

export default Img;
