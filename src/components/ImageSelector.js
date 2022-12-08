import { images } from "./images";
import { useEffect } from "react";

//ImageBox, each pictured image, including the onClick event
const ImageBox = (p) => {
  const { image, setImage } = p;
  return (
    <div onClick={() => setImage(image)}>
      <button type="button">
        <img src={`${image}`} style={{ height: "40px", width: "40px" }} />
      </button>
    </div>
  );
};

export const ImageSelector = (p) => {
  const { setImage } = p;
  useEffect(() => {
    //random image as first image
    setImage(images[Math.floor(Math.random() * images.length)]);
  }, []);
  return (
    <div className="avatar">
      {images.map((i) => {
        return <ImageBox image={i} setImage={setImage} />;
      })}
    </div>
  );
};
