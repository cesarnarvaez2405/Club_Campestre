import React from "react";
import ImageGallery from "react-image-gallery";

export const FotosHotel = () => {
  const imagesHotel = [
    {
      original: "https://i.ibb.co/0FJ6s5R/IMG-5945.jpg",
      thumbnail: "https://i.ibb.co/0FJ6s5R/IMG-5945.jpg",
      src: "https://i.ibb.co/0FJ6s5R/IMG-5945.jpg",
    },
    {
      original: "https://i.ibb.co/BGTVkcK/IMG-5975.jpg",
      thumbnail: "https://i.ibb.co/BGTVkcK/IMG-5975.jpg",
      src: "https://i.ibb.co/BGTVkcK/IMG-5975.jpg",
    },
    {
      original: "https://i.ibb.co/928D6C3/IMG-5977.jpg",
      thumbnail: "https://i.ibb.co/928D6C3/IMG-5977.jpg",
      src: "https://i.ibb.co/928D6C3/IMG-5977.jpg",
    },
    {
      original: "https://i.ibb.co/tcsJ1Rz/IMG-8429-HDR-1.jpg",
      thumbnail: "https://i.ibb.co/tcsJ1Rz/IMG-8429-HDR-1.jpg",
      src: "https://i.ibb.co/tcsJ1Rz/IMG-8429-HDR-1.jpg",
    },
    {
      original: "https://i.ibb.co/Cnf2xK8/IMG-8452.jpg",
      thumbnail: "https://i.ibb.co/Cnf2xK8/IMG-8452.jpg",
      src: "https://i.ibb.co/Cnf2xK8/IMG-8452.jpg",
    },
    {
      original: "https://i.ibb.co/n6ZxLnK/IMG-8453-HDR.jpg",
      thumbnail: "https://i.ibb.co/n6ZxLnK/IMG-8453-HDR.jpg",
      src: "https://i.ibb.co/n6ZxLnK/IMG-8453-HDR.jpg",
    },
    {
      original: "https://i.ibb.co/G0ddDsZ/IMG-0404.jpg",
      thumbnail: "https://i.ibb.co/G0ddDsZ/IMG-0404.jpg",
      src: "https://i.ibb.co/G0ddDsZ/IMG-0404.jpg",
    },
  ];

  return (
    <>
      <div className=" flex justify-center items-center py-16">
        <div className=" w-[60%] ">
          <div className=" flex justify-center items-center">
            <ImageGallery
              items={imagesHotel}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={false}
              slideDuration={600}
            />
          </div>
        </div>
      </div>
    </>
  );
};
