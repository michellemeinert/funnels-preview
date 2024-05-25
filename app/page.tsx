"use client"; 
import Button from "./components/preview-blocks/Button";
import Img from "./components/preview-blocks/Img";
import Text from "./components/preview-blocks/Text";
import List from "./components/preview-blocks/List";
import FileUpload from "./components/file-upload";


export default function Home() {
  const handleFileDrop = (json: any) => {
    console.log('Dropped JSON file:', json);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button id={""} text={"test button"} />
      <Img src="https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" id={""} alt={""} />
      <Text id={""} text={"Hi there just checking"} />
      <List id={""} items={[
        {
          "id": "7dc5ca19c11d4314bba0905de6c9dc08",
          "title": "Drinks",
          "description": "Tshhh... Ahhhhh!",
          "src": "https://img.icons8.com/0076FF/win10/247/kawaii-soda"
        },
        {
          "id": "8dc5ca19c11d4314bba0905de6c9dc09",
          "title": "Icecream",
          "description": "Cool down ...",
          "src": "https://img.icons8.com/0076FF/win10/247/kawaii-cupcake"
        },
        {
          "id": "9dc5ca19c11d4314bba0905de6c9dc10",
          "title": "Taccos",
          "description": "... to heat up",
          "src": "https://img.icons8.com/0076FF/win10/247/kawaii-taco"
        }
      ]} />
      <FileUpload onFileDrop={handleFileDrop} />
    </main>
  );
}
