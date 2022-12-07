import { images } from './images';
import { useEffect } from 'react';

//ImageBox, each pictured image, including the onClick event
const ImageBox = (p) => {
    const { image, setImage } = p;
    return (
        <div onClick={() => setImage(image)}>
            <img src={`${image}`} style={{ height: '271px', width: '271px' }} />
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
        <div>
            {images.map((i) => {
                return <ImageBox image={i} setImage={setImage} />;
            })}
        </div>
    );
};
