import React, { useState } from "react";
import Dropzone from "react-dropzone";
import "../../../styles/MyDrop.css"

const MyDrop = ({ onFileAccepted }) => {
  const [file, setFile] = useState(null);

  const handleUpload = (acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);
    onFileAccepted(uploadedFile);
  };

  return (
    <div className="main-container">
      <Dropzone onDrop={handleUpload} accept="image/*" minSize={1024} maxSize={3072000}>
        {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject }) => {
          const additionalClass = isDragAccept ? "accept" : isDragReject ? "reject" : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()}/>
              <p>Drag'n'drop images, or click to select files</p>
            </div>
          );
        }}
      </Dropzone>
      {file && (
        <>
          <h4>File Uploaded Successfully !!</h4>
          <img src={URL.createObjectURL(file)} className="img-container" alt="Uploaded file" />
        </>
      )}
    </div>
  );
};

export default MyDrop;