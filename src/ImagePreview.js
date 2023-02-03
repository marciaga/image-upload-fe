import './ImagePreview.css';

const ImagePreview = (props) => {
  const { image, alt } = props;
  const objectUrl = typeof image === 'string' ? image : URL.createObjectURL(image);

  return (
    <div>
      <img className="img" src={objectUrl} alt={alt} />
    </div>
  )
}

export default ImagePreview;