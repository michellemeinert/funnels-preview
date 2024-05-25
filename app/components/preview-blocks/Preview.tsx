import { BlockProps, FileProps } from "@/app/types";
import Button from "./Button";
import Img from "./Img";
import List from "./List";
import Text from "./Text";


const Block = ({ block }: BlockProps) => {
  console.log(block, 'BLOCK')
  switch (block.type) {
    case "image":
      return <Img {...block} />;
    case "button":
      return <Button {...block} />;
    case "list":
      return <List {...block} />;
    default:
      return <Text {...block} />;
  }
}

const Preview = ({ file }: FileProps) => {
  return (
    <div>
      {!!file.pages && file.pages[0].blocks.map((block: any) => <Block key={block.id} block={block} />)}
    </div>
  )
}

export default Preview;