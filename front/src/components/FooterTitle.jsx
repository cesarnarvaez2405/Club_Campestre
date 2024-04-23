import React from "react";

export const FooterTitle = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full px-5 bg-amber-300 ">
        <p className="font-AltoneNormal">
          Desarrollado por{" "}
          <a href="http://vibraniumco.com/" target="_blank">
            <button class="font-sans my-2 px-3 h-6 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] hover:cursor-pointer">
              VIBRANIUM
            </button>
          </a>
        </p>
      </div>
    </>
  );
};
