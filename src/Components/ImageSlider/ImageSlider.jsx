import React from "react";
import "./ImageSlider.scss";
import { Slide } from "react-slideshow-image";

const ImageSlider = ({ upcoming }) => {
  return (
    <Slide>
      <div>
        {upcoming && (
          <>
            <img
              src={upcoming[3]?.primaryImage?.url}
              alt="al"
              style={{ height: "45vh",   }}
            />
            <h2>hleoofd</h2>
          </>
        )}
      </div>
    </Slide>
  );
};

export default ImageSlider;
