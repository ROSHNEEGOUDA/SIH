import React, { useState } from "react";

const EvidenceImport = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setUploadedFile(file); // Set the file in state
  };

  const handleImportClick = () => {
    document.getElementById("fileInput").click(); // Trigger file input click
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Evidence Import</h1>
      <div className="mt-6 p-4 bg-gray-100 border rounded-md">
        <h2 className="text-lg font-semibold">Automated Data Collection</h2>
        <p className="text-sm mt-2">
          Import RAW images and other formats using disk imaging tools.
        </p>
        <button
          onClick={handleImportClick}
          className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Import Evidence
        </button>
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      <div className="mt-6 p-4 bg-gray-100 border rounded-md">
        <h2 className="text-lg font-semibold">Supported Formats</h2>
        <p className="text-sm mt-2">RAW images, E01, AFF, DD, and more.</p>
      </div>
      {uploadedFile && (
        <div className="mt-6 p-4 bg-green-100 border rounded-md">
          <h2 className="text-lg font-semibold">Uploaded Evidence Details</h2>
          <p className="text-sm mt-2">
            <strong>File Name:</strong> {uploadedFile.name}
          </p>
          <p className="text-sm mt-1">
            <strong>File Size:</strong> {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
          </p>
          <p className="text-sm mt-1">
            <strong>File Type:</strong> {uploadedFile.type || "Unknown"}
          </p>
        </div>
      )}
    </div>
  );
};

export default EvidenceImport;
