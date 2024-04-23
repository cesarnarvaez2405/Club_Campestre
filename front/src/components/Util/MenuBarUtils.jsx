import React, { useState } from "react";
import { useCurrentEditor } from "@tiptap/react";
import {
  CodeBracketIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  PhotoIcon,
} from "@heroicons/react/16/solid";
import { useRegistrarNoticia } from "../../views/Plataforma/modules/Inicio/hooks/useRegistrarNoticia";

export const MenuBarUtils = () => {
  const { editor } = useCurrentEditor();
  const { guardarImagenesRegistro } = useRegistrarNoticia();

  const [selectedHeadingLevel, setSelectedHeadingLevel] = useState(3);
  const [imagenes, setImagenes] = useState([]);
  const [verModalImagenes, setVerModalImagenes] = useState(false);

  if (!editor) {
    return null;
  }

  const guardarImagenes = async () => {
    const respuesta = await guardarImagenesRegistro(imagenes);
    if (respuesta) {
      respuesta.forEach((url, index) => {
        editor.chain().focus().setImage({ src: url }).run();
        if (index < respuesta.length - 1) {
          editor.chain().insertContent("\n").run();
        }
      });
      setVerModalImagenes(false);
      setImagenes([]);
    }
  };

  const cerrarModal = () => {
    setVerModalImagenes(false);
    setImagenes([]);
  };

  return (
    <>
      <div className=" border-b flex flex-wrap justify-between gap-5 p-2 bg-blue-950 text-white rounded-md">
        <a
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive("bold")
              ? " is-active cursor-pointer"
              : "cursor-pointer"
          }
        >
          <strong>B</strong>
        </a>
        <a
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive("italic")
              ? "is-active cursor-pointer"
              : "cursor-pointer"
          }
        >
          <p className="italic font-serif">I</p>
        </a>
        <a
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive("strike")
              ? "is-active cursor-pointer"
              : " cursor-pointer"
          }
        >
          <p className="line-through font-serif">S</p>
        </a>
        <a
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={
            editor.isActive("code")
              ? "is-active cursor-pointer"
              : "cursor-pointer"
          }
        >
          <div>
            <CodeBracketIcon className=" w-5 h-5" />
          </div>
        </a>
        <a
          className=" cursor-pointer"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-eraser"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" />
              <path d="M18 13.3l-6.3 -6.3" />
            </svg>
          </div>
        </a>

        <a
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          P
        </a>
        <select
          className="  bg-blue-950  cursor-pointer focus:bg-blue-950"
          value={selectedHeadingLevel}
          onChange={(e) => {
            const level = parseInt(e.target.value);
            editor.chain().focus().toggleHeading({ level }).run();
            setSelectedHeadingLevel(level);
          }}
        >
          <option
            value={1}
            className={
              editor.isActive("heading", { level: 1 }) ? "is-active" : ""
            }
          >
            h1
          </option>
          <option
            value={2}
            className={
              editor.isActive("heading", { level: 2 }) ? "is-active" : ""
            }
          >
            h2
          </option>
          <option
            value={3}
            className={
              editor.isActive("heading", { level: 3 }) ? "is-active" : ""
            }
          >
            h3
          </option>
          <option
            value={4}
            className={
              editor.isActive("heading", { level: 4 }) ? "is-active" : ""
            }
          >
            h4
          </option>
          <option
            value={5}
            className={
              editor.isActive("heading", { level: 5 }) ? "is-active" : ""
            }
          >
            h5
          </option>
          <option
            value={6}
            className={
              editor.isActive("heading", { level: 6 }) ? "is-active" : ""
            }
          >
            h6
          </option>
        </select>
        {/* <a onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          horizontal rule
        </a>
        <a onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
        </a> */}

        <a
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <div>toggleBulletList</div>
        </a>

        <a
          className=" cursor-pointer"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          <div>
            <ArrowUturnLeftIcon className=" h-5 w-5" />
          </div>
        </a>
        <a
          className=" cursor-pointer"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          <div>
            <ArrowUturnRightIcon className=" h-5 w-5" />
          </div>
        </a>
        <a
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-align-left"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l10 0" />
              <path d="M4 18l14 0" />
            </svg>
          </div>
        </a>
        <a
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-align-center"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M8 12l8 0" />
              <path d="M6 18l12 0" />
            </svg>
          </div>
        </a>
        <a
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-align-right"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M10 12l10 0" />
              <path d="M6 18l14 0" />
            </svg>
          </div>
        </a>
        <a
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-align-justified"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l12 0" />
            </svg>
          </div>
        </a>
        <a
          onClick={() => {
            setVerModalImagenes(true);
          }}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            verModalImagenes ? " is-active cursor-pointer" : "cursor-pointer"
          }
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </a>
      </div>

      {verModalImagenes && (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full bg-white shadow dark:bg-gray-700 dark:bg-opacity-60"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full left-1/3 top-1/4 ">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Agregar imagenes
                </h3>
                <button
                  type="button"
                  onClick={cerrarModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Por favor seleccionar las imagenes que quieren visualizar en
                  la noticia
                </p>
                <div className="">
                  <input
                    type="file"
                    name="portada"
                    id="file-input"
                    onChange={(event) => {
                      if (event.target.files.length > 5) {
                        alert("You can only select up to 5 files.");
                        setImagenes([]);
                        return;
                      }
                      setImagenes(event.target.files);
                    }}
                    multiple
                    accept=".png, .jpeg, .jpg"
                    maxLength="3145728"
                    className="block w-[100%] border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-white dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-gray-400"
                  />
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  onClick={guardarImagenes}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
