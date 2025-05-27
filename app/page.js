"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function Home() {
  const [mergedUrl, setMergedUrl] = useState(null);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: true,
  });

  const handleUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    const res = await fetch("/api/merge", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setMergedUrl(url);
      setFiles([]);
    }
  };

  return (
    <div>
      <div className="text-center mt-8 px-4">
        <h1 className="text-4xl font-bold text-amber-500 mb-2">
          Welcome to PDFLY 👋
        </h1>
        <p className="text-lg text-gray-700">
          Your all-in-one tool to merge PDF files easily, quickly and securely.
        </p>
      </div>
      <div className="mx-auto w-full max-w-3xl bg-[#f7da72ec] my-10 p-4 sm:p-6 md:p-8 rounded-3xl flex flex-col gap-6 sm:gap-4">
        <h1 className="font-bold text-xl sm:text-2xl text-center">
          Merge your PDFs
        </h1>

        {/* Dropzone box */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer bg-white transition-all ${
            isDragActive ? "border-[#ffd333]" : "border-gray-400"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-sm sm:text-base">
            {isDragActive
              ? "Drop the PDFs here..."
              : "Drag and drop PDFs here, or click to select files"}
          </p>

          <ul className="mt-4 text-left text-sm text-gray-700">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={handleUpload}
          className="bg-purple-500 rounded-lg shadow-lg px-4 py-3 font-bold text-white disabled:opacity-50 transition hover:bg-purple-600"
          disabled={files.length === 0}
        >
          Merge PDFs
        </button>

        {mergedUrl && (
          <a
            href={mergedUrl}
            download="merged.pdf"
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-center font-semibold mt-2 inline-block transition hover:bg-green-600"
          >
            Download Merged PDF
          </a>
        )}
      </div>
    </div>
  );
}
