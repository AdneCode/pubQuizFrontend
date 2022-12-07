const images = [
    'https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg',
];

const ImageBox = (p) => {
    const { image, setImage } = p;
    return (
        <div onClick={() => setImage(image)}>
            <img src={`${image}`} />
        </div>
    );
};

export const imageSelector = (setImage) => {
    return (
        <div>
            {images.map((i) => {
                return <ImageBox image={i} setImage={setImage} />;
            })}
        </div>
    );
};
rfc;
