import { useState } from "react";
import axios from "axios";

import ImagePreview from "./ImagePreview";

import "./App.css";

export const BASE_URL = "http://localhost:4000";

function App() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);

    await axios.post(`${BASE_URL}/images/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setImage(null);
  };

  return (
    <div className="App">
      <h1>Image Upload</h1>
      <label className="btn">
        <input hidden type="file" accept="image/*" onChange={handleChange} />
        Select Image
      </label>

      {image && (
        <>
          <ImagePreview image={image} alt="" />
          <button className="btn" onClick={handleUpload}>
            Upload Image
          </button>
        </>
      )}
    </div>
  );
}

export default App;
