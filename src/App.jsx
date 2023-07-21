import { useState } from "react";
import axios from "axios";

import ImagePreview from "./components/ImagePreview";

import "./App.css";

export const BASE_URL = 'http://localhost:3000';

function App() {
  const [image, setImage] = useState(null);

  const handleFileInput = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    await axios.post(`${BASE_URL}/images/upload`, formData);
    setImage(null);
  }

  return (
    <>
      <section>
        <h1>Image Upload</h1>
        <label className="btn">
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileInput}
          />
          Select Image
        </label>
      </section>
      <section>
        <ImagePreview image={image} />
        <button className="btn" onClick={handleUpload}>Upload</button>
      </section>
    </>
  );
}

export default App;
