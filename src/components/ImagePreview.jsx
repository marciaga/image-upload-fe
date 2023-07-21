import "./ImagePreview.css";

const ImagePreview = (props) => {
  const { image } = props;

  const objUrl = typeof image === "string" ? image : image && URL.createObjectURL(image);

  return (
    <div>
      <img src={objUrl} />
    </div>
  );
};

export default ImagePreview;
