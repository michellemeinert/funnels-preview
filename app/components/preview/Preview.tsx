import { BlockProps, FileProps } from "@/app/types";
import Button from "./blocks/Button";
import Img from "./blocks/Img";
import List from "./blocks/List";
import Text from "./blocks/Text";
import { useEffect, useState } from "react";


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

  useEffect(() => {
    let storagePage
    // Get the current funnel page from local storage if it exists
    storagePage = localStorage.getItem("currentFunnelPage") || 0
    setCurrentPage(+storagePage)
  }, [])

  const handlePreviousPage = () => {
    if (isNotFirstPage) { localStorage.setItem("currentFunnelPage", JSON.stringify(currentPage - 1)); setCurrentPage(currentPage - 1) }
  }
  const handleNextPage = () => {
    if (isNotLastPage) { localStorage.setItem("currentFunnelPage", JSON.stringify(currentPage + 1)); setCurrentPage(currentPage + 1) }
  }

  return (
    <>
      <div className="flex flex-col p-10 items-center py-2 px-4 border rounded-lg w-[375px] h-[600px] overflow-scroll">
        {!!file.pages && file.pages[currentPage].blocks.map((block: any) => <div key={block.id} className="my-2"><Block block={block} /></div>)}
      </div>
      <div className="flex mt-2">
        <p className={`mr-1 ${isNotFirstPage ? 'text-accent' : 'text-gray-300'} ${isNotFirstPage ? 'cursor-pointer' : 'cursor-not-allowed'} `} onClick={handlePreviousPage}> previous </p>
        <p>{currentPage + 1}</p>
        <p className={`ml-1 ${isNotLastPage ? 'text-accent' : 'text-gray-300'} ${isNotLastPage ? 'cursor-pointer' : 'cursor-not-allowed'} `} onClick={handleNextPage}> next </p>
      </div>
    </>
  )
}

export default Preview;