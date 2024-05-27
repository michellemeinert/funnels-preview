"use client";
import FileUpload from "./components/file-upload";
import { useEffect, useState } from "react";
import Preview from "./components/preview/Preview";
import Header from "./components/header";
import { FunnelProps } from "./types";


export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [file, setFile] = useState<FunnelProps | null>()
  const handleFileDrop = (json: FunnelProps) => {
    localStorage.setItem("funnelFile", JSON.stringify(json))
    setFile(json)
  };

  useEffect(() => {
    let storageFile
    // Get the file from local storage if it exists
    storageFile = localStorage.getItem("funnelFile") || ""
    if (storageFile) {
      setFile(JSON.parse(storageFile))
    }
    setLoaded(true)
  }, [])

  return (
    <main className="bg-background min-h-screen">
      <Header />
      {loaded && <div className="flex flex-col items-center p-24">
        {!file ? <FileUpload onFileDrop={handleFileDrop} /> : <Preview file={file} />}
      </div>}
    </main>
  );
}
