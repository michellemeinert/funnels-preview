import { BlockProps, FileProps } from "@/app/types";
import Button from "./Button";
import Img from "./Img";
import List from "./List";
import Text from "./Text";
import { useState } from "react";


const Block = ({ block }: BlockProps) => {
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
  const [currentPage, setCurrentPage] = useState(0)
  return (
    <>
      <div className="flex flex-col p-10 items-center py-2 px-4 border rounded-lg w-[375px] h-[600px] overflow-scroll">

        {!!file.pages && file.pages[currentPage].blocks.map((block: any) => <div className="my-2"><Block key={block.id} block={block} /></div>)}
      </div>
      <div className="flex mt-2">
        {!!file.pages && file.pages.map((_page, i: number) => <p onClick={() => setCurrentPage(i)} className="text-accent cursor-pointer mx-4">{i + 1}</p>)}
      </div>
    </>
  )
}

export default Preview;