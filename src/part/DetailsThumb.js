

const DetailsThumb = ({ images, tab, myRef }) => {

  return (
    <div className="thumb" ref={myRef}>
      {images.map((img, index) => {
        return (
          <img
            src={img}
            alt=""
            key={index}
            onClick={() => {
              tab(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default DetailsThumb;
