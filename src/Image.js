import { useState, useEffect } from "react";
import axios from "axios";

import ImagePreview from "./ImagePreview";

import { BASE_URL } from "./App";

const ImageScreen = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const result = await axios.get(`${BASE_URL}/images`);
      setImages(result.data.images);
    };

    fetchImages();
  }, []);

  return (
    <>
      <ul>
        {images.map((image) => (
          <li key={image._id}>
            <ImagePreview image={image.url} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageScreen;
