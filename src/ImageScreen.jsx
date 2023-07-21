import { useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../src/App";

import ImagePreview from "./components/ImagePreview";

const ImageScreen = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${BASE_URL}/images`);
      setImages(data.images);
    };
    fetchData();
  }, []);
  return (
    <div>
      {images.map((image, i) => {
        return <ImagePreview key={i} image={image.url} />;
      })}
    </div>
  );
};

export default ImageScreen;
