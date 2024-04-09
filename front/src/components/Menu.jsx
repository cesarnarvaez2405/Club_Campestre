import React, { useEffect, useState } from "react";
import { linkRutas } from "../routes/Rutas";
import { Link, useLocation } from "react-router-dom";
import { useAuthUtils } from "../hooks/Utils/useAuthUtils";
import { onSelect } from "../store/Auth/menuStore";
import { useDispatch, useSelector } from "react-redux";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const primerasRutas = linkRutas.slice(0, 2);
const ultimasRutas = linkRutas.slice(2, 5);

export const Menu = () => {
  const { nameMenu } = useSelector((state) => state.menu);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const { status } = useAuthUtils();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    dispatch(onSelect(location.pathname));
  }, [location]);

  return (
    <>
      {status === "no autenticado" && (
        <div className='absolute z-50 w-full h-36 max-md:sm:hidden'>
          <div className='grid h-full grid-cols-9'>
            <div className='flex flex-row justify-end w-full col-span-4 pr-10'>
              {primerasRutas.map((ruta) => (
                <div
                  key={ruta.name}
                  onMouseEnter={() => setOpenSubMenu(ruta.name)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                >
                  <Link
                    to={ruta.path}
                    className='flex items-center px-10 text-white duration-150 ease-in-out border-l-2 cursor-pointer my-14 border-x-amber-300 hover:text-sky-900 font-AltoneNormal'
                  >
                    <h4>{ruta.title}</h4>
                  </Link>
                  {ruta.subMenu && ruta.name === openSubMenu && (
                    <div className=' absolute w-[10rem] font-AltoneNormal text-white backdrop-blur-xl pb-4 top-[60%] px-2  '>
                      {ruta.subMenu.map((subRuta, index) => (
                        <div className='pt-4 border-b border-amber-300'>
                          <Link
                            to={subRuta.path}
                            className=' hover:opacity-65'
                            key={index}
                          >
                            <h4 key={subRuta.title}>{subRuta.title}</h4>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className='flex items-center justify-center col-start-5'>
              {nameMenu !== "/hotel" && (
                <img
                  src='https://i.ibb.co/qY6Z6k1/Logo-club.png'
                  alt='Logo-club'
                  border='0'
                  className='h-32 bg-center object-contain'
                ></img>
              )}

              {nameMenu === "/hotel" && (
                <img
                  src='https://i.ibb.co/vZ0R8mg/Hotel-Club-Campestre.png'
                  alt='Hotel-Club-Campestre'
                  border='0'
                ></img>
              )}
            </div>
            <div className='flex flex-row justify-start w-full col-span-4 pl-10'>
              {ultimasRutas
                .filter((ruta) => ruta.estaRegistrado === undefined)
                .map((ruta) => (
                  <div
                    key={ruta.name}
                    onMouseEnter={() => setOpenSubMenu(ruta.name)}
                    onMouseLeave={() => setOpenSubMenu(null)}
                  >
                    <Link
                      key={ruta.name}
                      to={ruta.path}
                      className='flex items-center px-10 text-white duration-150 ease-in-out border-r-2 cursor-pointer my-14 border-x-amber-300 hover:text-sky-900 font-AltoneNormal'
                    >
                      <h4>{ruta.title}</h4>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {status === "autenticado" && (
        <div className='absolute z-50 w-full h-36  max-md:sm:hidden'>
          <div className='flex items-center justify-center pt-3 '>
            <div className='grid items-center h-full grid-cols-6'>
              <img
                src='https://i.ibb.co/qY6Z6k1/Logo-club.png'
                alt='Logo-club'
                border='0'
                className='h-32 '
              ></img>
              {linkRutas.map((ruta) => (
                <div
                  key={ruta.name}
                  onMouseEnter={() => setOpenSubMenu(ruta.name)}
                  onMouseLeave={() => setOpenSubMenu(null)}
                  className='flex items-center justify-center my-6 border-r-2 border-x-amber-300'
                >
                  <Link
                    to={ruta.path}
                    className='flex items-center text-white duration-150 ease-in-out cursor-pointer hover:text-sky-900 font-AltoneNormal'
                  >
                    <h4>{ruta.title}</h4>
                  </Link>
                  {ruta.subMenu && ruta.name === openSubMenu && (
                    <div className=' absolute w-[10rem] font-AltoneNormal text-white backdrop-blur-xl pb-4 top-[60%] px-2  '>
                      {ruta.subMenu.map((subRuta) => (
                        <div className='pt-4 border-b border-amber-300'>
                          <Link
                            to={subRuta.path}
                            className=' hover:opacity-65'
                            key={subRuta.name}
                          >
                            <h4>{subRuta.title}</h4>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className='absolute z-50 w-full pl-5 pt-10'>
        <div className=' flex justify-between'>
          <button onClick={handleHamburgerClick} className='md:hidden'>
            <div
              className={` h-10 w-10 text-black ${
                !isMobileMenuOpen ? "text-white" : ""
              }`}
            >
              {!isMobileMenuOpen && <Bars3Icon fill='white' />}
            </div>
          </button>
          <div className=' pr-10'>
            <img
              src='https://i.ibb.co/qY6Z6k1/Logo-club.png'
              alt='Logo-club'
              border='0'
              className='h-16 bg-center object-contain md:hidden '
            ></img>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-200 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <button onClick={handleHamburgerClick} className='md:hidden'>
            <div className=' w-10 h-10'>
              {isMobileMenuOpen && <XMarkIcon />}
            </div>
          </button>

          <div className='font-thin text-2xl pl-4 border-l-2 border-black'>
            {linkRutas.map((ruta, index) => (
              <div key={index}>
                <Link
                  to={ruta.path}
                  className='block p-4 text-black hover:bg-gray-200'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {ruta.title}
                </Link>
                {ruta.subMenu &&
                  ruta.subMenu.map((subRuta, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subRuta.path}
                      className='block p-4 text-black hover:bg-gray-200 ml-4'
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subRuta.title}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
