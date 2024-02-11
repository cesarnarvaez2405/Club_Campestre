import React, { useState } from "react";
import { Dashboard } from "./modules/Dashboard";
import { Noticias } from "./modules/Noticias";

export const Inicio = () => {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className=" w-full bg-gray-400">
        <div className=" w-full h-36"></div>
        <div className=" border-t-2 h-[50rem] mt-3 flex">
          <div className="w-64 h-[100%] ">
            <div className="px-4 pt-4 border-r h-full border-gray-300 sha">
              <ul className="space-y-2 font-AltoneNormal text-white">
                <li></li>
                <li>
                  <a
                    onClick={() => setTab(0)}
                    className={` bg-opacity-30  flex items-center justify-between py-1.5 px-4 rounded cursor-pointer ${
                      tab === 0 ? "bg-gray-500" : ""
                    } `}
                  >
                    <span className="flex items-center space-x-2">
                      <span>Dashboard</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setTab(1)}
                    className={` bg-opacity-30 flex items-center py-1.5 px-4 rounded space-x-2 cursor-pointer   ${
                      tab === 1 ? "bg-gray-500" : ""
                    } `}
                  >
                    <span>Noticias</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setTab(2)}
                    className={` bg-opacity-30 flex items-center  py-1.5 px-4 rounded space-x-2 cursor-pointer   ${
                      tab === 2 ? "bg-gray-500" : ""
                    } `}
                  >
                    <span>Usuarios</span>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setTab(3)}
                    className={` bg-opacity-30 flex items-center  py-1.5 px-4 rounded space-x-2 cursor-pointer   ${
                      tab === 2 ? "bg-gray-500" : ""
                    } `}
                  >
                    <span>Perfil</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 w-full">
            {tab === 0 && <Dashboard></Dashboard>}
            {tab === 1 && <Noticias></Noticias>}
            {/* {tab === 2 && <Trayectoria></Trayectoria>} */}
          </div>
        </div>
      </div>
    </>
  );
};
