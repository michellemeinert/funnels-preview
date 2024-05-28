import { FileUploadProps, FunnelProps } from '@/app/types';
import React, { useState, ChangeEvent, DragEvent, useRef } from 'react';


const FileUpload = ({ onFileDrop }: FileUploadProps) => {
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null);


  const handlePreventDefault = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFile = (file: File) => {
    if (file && file.type === 'application/json') {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json: FunnelProps = JSON.parse(e.target?.result as string);
          //fix this validation
          if (Array.isArray(json.pages)) {
            setError(null)
            onFileDrop(json);
          } else {
            setError('Sorry this file doesn`t conform to the funnel schema :(');
          }
        } catch (error) {
          setError('Invalid JSON file.');
        }
      };
      reader.readAsText(file);
    } else {
      setError('Only JSON files are allowed.');
    }
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    handleFile(file)
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    file && handleFile(file)
  }

  return (
    <>
      <div
        // fix the error border
        className={`flex flex-col items-center justify-center p-6 ${error ? 'border-rose-500' : 'border'} rounded-lg w-full transition-all hover:scale-110 cursor-pointer`}
        onDragEnter={handlePreventDefault}
        onDragLeave={handlePreventDefault}
        onDragOver={handlePreventDefault}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <p className="text-primary">Drag & drop your JSON file here, or</p>
        <label className="cursor-pointer mt-2">
          <span className="text-accent hover:underline">click to upload</span>
          <input ref={inputRef} type="file" className="hidden" onChange={handleFileChange} accept=".json" />
        </label>
      </div>
      {error && <p className='text-error text-bold text-md mt-2'>{error}</p>}
    </>
  );
};

export default FileUpload;
