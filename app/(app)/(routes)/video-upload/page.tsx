"use client";

import React, { useState, useEffect } from "react";

export default function ImageUpload() {
  const [name, setName] = useState<string>(""); 
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const [localVideoPreview, setLocalVideoPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (uploadedVideo) {
      console.log("Uploaded Image ID: ", uploadedVideo);
    }
  }, [uploadedVideo]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLocalVideoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 

    if (!name || !localVideoPreview) {
      alert("Please provide both a name and an image");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("name", name); 
    const fileInput = document.querySelector("input[type='file']") as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (file) formData.append("file", file); 

    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload Video");

      const data = await response.json();
      setUploadedVideo(data.public_id);
    } catch (error) {
      console.log(error);
      alert("Failed to upload image");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Upload an Image</h2>
          <form onSubmit={handleSubmit} className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} 
              placeholder="Type your name"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="label mt-4">
              <span className="label-text">Choose an image file</span>
            </label>
            <input
              type="file"
              onChange={handleFileUpload}
              className="file-input file-input-bordered file-input-primary w-full"
            />

            {isUploading && (
              <div className="mt-4">
                <progress className="progress progress-primary w-full"></progress>
              </div>
            )}

            {localVideoPreview && !uploadedVideo && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Local Preview:</h3>
                <div className="flex justify-center items-center bg-base-100 max-w-xl border-dashed border-4">
                  <img
                    src={localVideoPreview}
                    alt="Local Preview"
                    className="rounded-md shadow-lg"
                  />
                </div>
              </div>
            )}

            <button type="submit" className="btn btn-primary mt-6">
              Submit
            </button>
          </form>

          {uploadedVideo && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Uploaded Image:</h3>
              <div className="flex justify-center items-center bg-base-100 max-w-xl border-dashed border-4">
                <img
                  src={`https://your-cdn.com/${uploadedVideo}`} 
                  alt="Uploaded"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
