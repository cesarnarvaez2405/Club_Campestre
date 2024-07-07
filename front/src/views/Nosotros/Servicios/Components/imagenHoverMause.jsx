import React, { useState } from "react";

export const ImagenHoverMause = ({ src, alt }) => {
  const [position, setPosition] = useState({ top: "0%", left: "0%" });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = currentTarget;

    const relativeX = clientX - offsetLeft;
    const relativeY = clientY - offsetTop;

    const moveX = ((relativeX - offsetWidth / 2) / offsetWidth) * 30;
    const moveY = ((relativeY - offsetHeight / 2) / offsetHeight) * 30;

    setPosition({
      top: `${-moveY}%`,
      left: `${-moveX}%`,
    });
  };

  return (
    <>
      <div
        className="  overflow-hidden w-full h-full"
        onMouseMove={handleMouseMove}
      >
        <img
          src={src}
          alt={alt}
          className="w-[10rem] absolute z-0 bottom-[-55%] left-96  rotate-[8deg] scale-150 top-1/2 transition-transform duration-100"
          style={{ transform: `translate(${position.left}, ${position.top})` }}
        />
      </div>
    </>
  );
};
