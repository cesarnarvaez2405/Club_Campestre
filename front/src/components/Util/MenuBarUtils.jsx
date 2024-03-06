import React, { useState } from "react";
import { useCurrentEditor } from "@tiptap/react";
import {
  CodeBracketIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/16/solid";

export const MenuBarUtils = () => {
  const { editor } = useCurrentEditor();

  const [selectedHeadingLevel, setSelectedHeadingLevel] = useState();

  if (!editor) {
    return null;
  }

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
        <a onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          horizontal rule
        </a>
        <a onClick={() => editor.chain().focus().setHardBreak().run()}>
          hard break
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
      </div>
    </>
  );
};
