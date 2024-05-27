import { BlockProps, FileProps } from "@/app/types";
import Button from "./blocks/Button";
import Img from "./blocks/Img";
import List from "./blocks/List";
import Text from "./blocks/Text";
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
  const [currentPage, setCurrentPage] = useState(0);
  const isNotFirstPage = currentPage > 0;
  const isNotLastPage = currentPage < file.pages.length - 1;
  return (
    <>
      <div className="flex flex-col p-10 items-center py-2 px-4 border rounded-lg w-[375px] h-[600px] overflow-scroll">

        {!!file.pages && file.pages[currentPage].blocks.map((block: any) => <div className="my-2"><Block key={block.id} block={block} /></div>)}
      </div>
      <div className="flex mt-2">
        <p className={`mr-1 ${isNotFirstPage ? 'text-accent' : 'text-gray-300'} ${isNotFirstPage ? 'cursor-pointer' : 'cursor-not-allowed'} `} onClick={() => isNotFirstPage && setCurrentPage(currentPage - 1)}> previous </p>
        <p>{currentPage + 1}</p>
        <p className={`ml-1 ${isNotLastPage ? 'text-accent' : 'text-gray-300'} ${isNotLastPage ? 'cursor-pointer' : 'cursor-not-allowed'} `} onClick={() => isNotLastPage && setCurrentPage(currentPage + 1)}> next </p>
      </div>
    </>
  )
}

export default Preview;