import React, { useState, ChangeEvent, DragEvent, useRef } from 'react';

type FileUploadProps = {
  onFileDrop: (json: any) => void;
}

//TODO: validate json file for funnel type
const FileUpload = ({ onFileDrop }: FileUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [_isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    if (files.length === 0) return;

    const file = files[0];
    if (file.type !== 'application/json') {
      alert('Only JSON files are allowed.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        onFileDrop(json);
      } catch (error) {
        alert('Invalid JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          onFileDrop(json);
        } catch (error) {
          alert('Invalid JSON file.');
        }
      };
      reader.readAsText(file);
    } else {
      alert('Only JSON files are allowed.');
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center p-6 border rounded-lg w-full transition-all hover:scale-110 cursor-pointer"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <p className="text-primary">Drag & drop your JSON file here, or</p>
      <label className="cursor-pointer mt-2">
        <span className="text-accent hover:underline">click to upload</span>
        <input ref={inputRef} type="file" className="hidden" onChange={handleFileChange} accept=".json" />
      </label>
    </div>
  );
};

export default FileUpload;
