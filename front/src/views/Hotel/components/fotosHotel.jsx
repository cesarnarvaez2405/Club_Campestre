import React from "react";
import PhotoAlbum from "react-photo-album";

export const FotosHotel = () => {
  const photos = [
    { src: "https://picsum.photos/id/1018/250/150/", width: 250, height: 150 },
    { src: "https://picsum.photos/id/1015/250/150/", width: 100, height: 120 },
    { src: "https://picsum.photos/id/1015/250/150/", width: 110, height: 50 },
    { src: "https://picsum.photos/id/1015/250/150/", width: 100, height: 120 },
    { src: "https://picsum.photos/id/1018/250/150/", width: 250, height: 150 },
    { src: "https://picsum.photos/id/1018/250/150/", width: 250, height: 150 },
  ];
  return (
    <>
      <div className=" flex justify-center items-center py-16">
        <div className=" w-[60%] ">
          <PhotoAlbum layout="masonry" photos={photos} />
        </div>
      </div>
    </>
  );
};
