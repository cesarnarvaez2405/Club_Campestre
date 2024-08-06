import React, { useState } from "react";

import { useForm } from "react-hook-form";
import Popup from "./popup";
import { SerSocioForm } from "../views/Home/Forms/serSocioForm";

export const BannerSerSocio = () => {
  const [abrirModal, setAbrirModal] = useState(false);

  const { reset } = useForm();

  const cerrarModal = () => {
    setAbrirModal(false);
    reset();
  };

  const additionalProps = {
    cerrarModal,
    titulo: "¿Tienes alguna duda por resolver?",
    subtitulo: "Déjanos tus datos y podrás tener una asesoria detallada",
  };

  const EnhancedComponent = Popup(SerSocioForm, additionalProps);

  return (
    <>
      <div className="flex justify-center items-center h-full flex-col gap-7 animate__animated animate__bounceInRight ">
        <div className=" text-2xl flex justify-center items-center flex-col font-AltoneNormal ">
          <span> ¿Cómo ser socio?</span>
        </div>
        <div className=" font-AltoneNormal">
          <p className=" text-center sm:max-md:text-justify sm:max-md:px-5">
            Únete a nuestra familia de socios y disfruta de una experiencia
            memorable en cada uno de los entornos que tenemos disponibles para
            ti. <br />
            Contamos con diferentes modalidades de ingreso y múltiples
            beneficios que harán del Club Campestre de Neiva, tu nuevo hogar.
            <br />
            <br />
            <span className="text-xl text-amber-400 font-semibold text-center">
              #ViveClubCampestreNeiva
            </span>
          </p>
        </div>
        <button
          onClick={() => setAbrirModal(true)}
          className=" hover:border-amber-300 px-6 py-2 rounded-md text-amber-300  font-AltoneNormal hover:scale-110 transition-all ease-in-out duration-150 bg-slate-900 hover:shadow-lg hover:shadow-amber-300 shadow-slate-600 shadow-md"
        >
          Quiero ser socio
        </button>
      </div>

      {abrirModal && <EnhancedComponent />}
    </>
  );
};
