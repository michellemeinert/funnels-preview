import React, { useState, useCallback, ChangeEvent, DragEvent } from 'react';

type FileUploadProps = {
  onFileDrop: (json: any) => void;
}

//TODO: validate json file for funnel type
const FileUpload = ({ onFileDrop }: FileUploadProps) => {
  const [_isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
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
  }, [onFileDrop]);

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
      className="flex flex-col items-center justify-center p-6 border rounded-lg w-full"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p>Drag & drop your JSON file here, or</p>
      <label className="cursor-pointer mt-2">
        <span className="text-blue-500 hover:underline">click to upload</span>
        <input type="file" className="hidden" onChange={handleFileChange} accept=".json" />
      </label>
    </div>
  );
};

export default FileUpload;
