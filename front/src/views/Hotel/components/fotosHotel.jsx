import React from "react";
import ImageGallery from "react-image-gallery";

export const FotosHotel = () => {
  const imagesHotel = [
    {
      original:
        "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(5).jpg",
      thumbnail:
        "https://clubcampestreneiva.site/IMG/Hotel/320/hotel_club_320(3).jpeg",
      src: "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(5).jpg",
    },
    {
      original:
        "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(1).jpg",
      thumbnail:
        "https://clubcampestreneiva.site/IMG/Hotel/320/hotel_club_320(5).jpeg",
      src: "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(1).jpg",
    },
    {
      original:
        "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(2).jpg",
      thumbnail:
        "https://clubcampestreneiva.site/IMG/Hotel/320/hotel_club_320(6).jpeg",
      src: "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(2).jpg",
    },
    {
      original:
        "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(3).jpg",
      thumbnail:
        "https://clubcampestreneiva.site/IMG/Hotel/320/hotel_club_320(1).jpeg",
      src: "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(3).jpg",
    },
    {
      original:
        "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(4).jpg",
      thumbnail:
        "https://clubcampestreneiva.site/IMG/Hotel/320/hotel_club_320(2).jpeg",
      src: "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(4).jpg",
    },

    {
      original:
        "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(6).jpg",
      thumbnail:
        "https://clubcampestreneiva.site/IMG/Hotel/320/hotel_club_320(4).jpeg",
      src: "https://clubcampestreneiva.site/IMG/Hotel/720/hotel_club(6).jpg",
    },
  ];

  return (
    <>
      <div className=" flex justify-center items-center py-5 sm:max-md:py-5 ">
        <div className=" w-[60%] sm:max-md:w-[80%] ">
          <p className=" py-5 text-black text-3xl text-center font-semibold sm:max-md:pt-10 ">
            Galería
          </p>
          <div className=" flex justify-center items-center  sm:max-md:px-1 animate__animated animate__fadeIn">
            <ImageGallery
              showIndex={true}
              items={imagesHotel}
              showFullscreenButton={false}
              showPlayButton={false}
              autoPlay={true}
              slideDuration={900}
              slideInterval={5000}
              showThumbnails={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};
