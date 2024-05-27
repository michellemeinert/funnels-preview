"use client";
import Button from "./components/preview/blocks/Button";
import Img from "./components/preview/blocks/Img";
import Text from "./components/preview/blocks/Text";
import List from "./components/preview/blocks/List";
import FileUpload from "./components/file-upload";
import { useEffect, useState } from "react";
import Preview from "./components/preview/Preview";
import Header from "./components/header";


export default function Home() {
  const [file, setFile] = useState()
  const handleFileDrop = (json: any) => {
    localStorage.setItem("funnelFile", JSON.stringify(json))
    setFile(json)
  };

  useEffect(() => {
    let storageFile
    // Get the file from local storage if it exists
    storageFile = localStorage.getItem("funnelFile") || ""
    setFile(JSON.parse(storageFile))
  }, [])

  return (
    <main className="bg-background min-h-screen">
      <Header />
      <div className="flex flex-col items-center p-24">
        {!file ? <FileUpload onFileDrop={handleFileDrop} /> : <Preview file={file} />}
      </div>
    </main>
  );
}
