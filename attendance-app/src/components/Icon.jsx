import React from "react";

const Icon = ({ image, alt }) => {
  return (
    <div className="icon__container mb-5">
      <img src={image} alt={alt} />
    </div>
  );
};

export default Icon;
