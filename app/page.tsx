"use client";
import FileUpload from "./components/file-upload";
import { useEffect, useState } from "react";
import Preview from "./components/preview/Preview";
import Header from "./components/header";
import { FunnelProps } from "./types";


const Home = () => {
  const [loaded, setLoaded] = useState(false)
  const [file, setFile] = useState<FunnelProps | null>()
  const handleFileDrop = (json: FunnelProps) => {
    localStorage.setItem("funnelFile", JSON.stringify(json))
    setFile(json)
  };

  useEffect(() => {
    // Get the file from local storage if it exists
    const storageFile = localStorage.getItem("funnelFile")
    if (storageFile) {
      try {
        const parsedFile = JSON.parse(storageFile)
        setFile(parsedFile)
      } catch (error) {
        console.error('Error while parsing JSON file', error)
      }
    }
    setLoaded(true)
  }, [])

  return (
    <main className="bg-background min-h-screen">
      <Header hasFile={!!file} />
      {loaded && <div className="flex flex-col items-center p-24">
        {!file ? <FileUpload onFileDrop={handleFileDrop} /> : <Preview file={file} />}
      </div>}
    </main>
  );
}
export default Home;