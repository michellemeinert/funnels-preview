"use client"; 
import Button from "./components/preview-blocks/Button";
import Img from "./components/preview-blocks/Img";
import Text from "./components/preview-blocks/Text";
import List from "./components/preview-blocks/List";
import FileUpload from "./components/file-upload";
import { useState } from "react";
import Preview from "./components/preview-blocks/Preview";


export default function Home() {
  const [file, setFile] = useState()
  const handleFileDrop = (json: any) => {
    setFile(json)
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!file ? <FileUpload onFileDrop={handleFileDrop} />: <Preview file={file}/>}
    </main>
  );
}
