import { useState } from "react";
import FileUpload from "react-material-file-upload";

export default function App() {
  const [files, setFiles] = useState([]);
  return (
    <div className="w-100">
      <FileUpload value={files} onChange={setFiles} />
    </div>
  );
}
