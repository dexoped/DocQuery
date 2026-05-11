import { useState } from "react";
import { uploadFile } from "../services/api";

function Upload() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setStatus("Select a file first");
      return;
    }

    setStatus("Uploading...");

    try {
      const data = await uploadFile(file);
      setStatus(data.message);
    } catch (err) {
      setStatus("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload Document</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
}

export default Upload;