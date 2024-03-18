import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { EditorProvider, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";
import Image from "@tiptap/extension-image";

import Swal from "sweetalert2";
import { AlertError } from "../../../../../components/Util/alertError";
import { useRegistrarNoticia } from "../hooks/useRegistrarNoticia";
import { MenuBarUtils } from "../../../../../components/Util/MenuBarUtils";
import { Dot } from "../../../../../components/Util/Dot";

export const RegistrarNoticia = ({
  obtenerNoticias,
  noticia,
  estaEditando,
}) => {
  const [tags, setTags] = useState([]);
  const { obtenerTags, guardar } = useRegistrarNoticia();
  const [contenido, setContenido] = useState("");

  const animatedComponents = makeAnimated();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    async function encontrarTags() {
      const tagsEncontrados = await obtenerTags();
      setTags(tagsEncontrados);
    }
    if (estaEditando) {
      const { titulo, cuerpo, portada } = noticia;
      const tagsEditar = noticia.tags;
      setValue("titulo", titulo);
      setValue("portada", portada);
      setValue("tags", tags);
      setContenido(cuerpo);
    }
    encontrarTags();
  }, [contenido]);

  const handleChange = (texto) => {
    setContenido(texto);
  };

  const guardarNoticia = async (event) => {
    console.log(contenido);
    const respuesta = await guardar(event);
    if (respuesta) {
      Swal.fire({
        title: "El tamaño del archivo excede el límite de 3MB",
        text: "La imagen tiene que ser menos a 3mb",
        icon: "error",
      });
      reset();
      setTags([]);
    }
    reset();
    await obtenerNoticias();
  };

  const CustomDocument = Document.extend({
    content: "heading block*",
  });

  const extensions = [
    Image.configure({
      HTMLAttributes: {
        class: "w-40",
      },
    }),
    CustomDocument,
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: true, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === "heading") {
          return "What’s the title?";
        }

        return "Can you add some further context?";
      },
    }),
  ];

  const editor = useEditor({
    extensions,
    content: "",
    onUpdate: ({ editor }) => {
      setContenido(editor.getHTML());
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit(guardarNoticia)}>
        <div className="flex flex-col items-start justify-start h-full gap-10 px-20 py-5 bg-white  2xl:px-56">
          <h2 className="pt-3 text-2xl font-semibold ">Crea tu Noticia</h2>
          <div className="flex flex-row gap-5">
            <div className="flex items-center justify-center ">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                1
              </span>
            </div>

            <div className="flex flex-col items-start justify-center ">
              <h3 className="text-xl  font-AltoneNormal flex">
                TÍtulo <Dot />
                <span className="pl-3 text-sm  font-AltoneNormal">
                  "Escriba tu titulo mas creativo"
                </span>
              </h3>
              <input
                className={` 2xl:w-[50rem] lg:w-[40rem] md:w-[25rem] w-[20rem] p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                  errors.titulo &&
                  "border-red-500 outline-none border-2 ring-red-500"
                }`}
                type="text"
                name="titulo"
                id="titulo"
                placeholder="titulo"
                {...register("titulo", {
                  required: "El titulo es obligatorio",
                })}
              />
              {errors.titulo && (
                <AlertError> {errors.titulo.message} </AlertError>
              )}
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="flex items-center justify-center ">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                2
              </span>
            </div>

            <div className="flex flex-col items-start justify-center ">
              <h3 className="text-xl  font-AltoneNormal flex">
                Sumario <Dot />
                <span className="pl-3 text-sm  font-AltoneNormal">
                  "Destaca tu noticia en el sumario"
                </span>
              </h3>
              <input
                className={` 2xl:w-[50rem] lg:w-[40rem] md:w-[25rem] w-[20rem] p-2 bg-slate-300 text-black rounded-md border shadow-lg focus:ring-1 hover:border-blue-500 transition-all duration-100 focus:outline-none ${
                  errors.sumario &&
                  "border-red-500 outline-none border-2 ring-red-500"
                }`}
                type="text"
                name="sumario"
                id="sumario"
                placeholder="sumario"
                {...register("sumario", {
                  required: "El sumario es obligatorio",
                })}
              />
              {errors.sumario && (
                <AlertError> {errors.sumario.message} </AlertError>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex items-center justify-center ">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                3
              </span>
            </div>

            <div className="flex flex-col items-start justify-center ">
              <h3 className="text-xl  font-AltoneNormal flex">
                Portada
                <Dot />
                <span className="pl-3 text-sm  font-AltoneNormal">
                  "Selecciona la mejor imagen como portada"
                </span>
              </h3>
              <div className="">
                <input
                  type="file"
                  name="portada"
                  id="file-input"
                  accept=".png, .jpeg, .jpg"
                  maxLength="3145728"
                  {...register("portada", {
                    required: "La imagen es obligatoria",
                  })}
                  className="block w-[100%] border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0 file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400"
                />
                {errors.portada && (
                  <AlertError> {errors.portada.message} </AlertError>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="flex items-center justify-center ">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                4
              </span>
            </div>

            <div className="flex flex-col items-start justify-center ">
              <h3 className="text-xl  font-AltoneNormal flex">
                Tags
                <Dot />
                <span className="pl-3 text-sm  font-AltoneNormal">
                  "Escoja los tags adecuados a la noticia"
                </span>
              </h3>
              <div className="">
                <Controller
                  name="tags"
                  control={control}
                  rules={{ required: "Los tags son obligatorios" }}
                  render={({ field }) => (
                    <Select
                      components={animatedComponents}
                      closeMenuOnSelect={false}
                      isMulti
                      options={tags.map((tag) => ({
                        value: tag.rowId,
                        label: tag.nombre,
                      }))}
                      className="w-full "
                      {...field}
                    />
                  )}
                />
                {errors.tags && (
                  <AlertError> {errors.tags.message} </AlertError>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="flex items-center justify-center ">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                5
              </span>
            </div>

            <div className="flex flex-col items-start justify-center ">
              <h3 className="text-xl  font-AltoneNormal flex">
                Cuerpo <Dot />
                <span className="pl-3 text-sm  font-AltoneNormal">
                  "Diseña la Noticia a tu gusto"
                </span>
              </h3>

              <div className=" border rounded-lg  2xl:w-[50rem] lg:w-[40rem] md:w-[25rem] w-[20rem]  ">
                <EditorProvider
                  extensions={extensions}
                  slotBefore={<MenuBarUtils />}
                  editor={editor}
                ></EditorProvider>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex items-center justify-center ">
              <span className=" bg-blue-950 px-[9px] py-[1px] rounded-full text-white font-sans font-semibold">
                6
              </span>
            </div>

            <div className="flex flex-col items-start justify-center ">
              <button className="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-[#1a195f] hover:bg-white hover:text-[#1a195f] focus:text-[#1a195f] focus:bg-gray-200 text-gray-50 font-bold leading-loose transition duration-200">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
