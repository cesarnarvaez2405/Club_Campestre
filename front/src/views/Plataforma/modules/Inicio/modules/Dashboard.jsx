import React from "react";
import { useAuthUtils } from "../../../../../hooks/Utils/useAuthUtils";

export const Dashboard = () => {
  const { user } = useAuthUtils();
  return (
    <>
      <div className=" flex justify-center items-center h-[80%] flex-col ">
        <h3 className=" font-AltoneBold text-white text-4xl">
          Plataforma Club Campestre
        </h3>
        <h3 className=" font-AltoneBold text-blue-950 text-4xl pt-3">
          Bienvenido, <span className=" capitalize">{user.nombre}</span>
        </h3>
      </div>
    </>
  );
};
