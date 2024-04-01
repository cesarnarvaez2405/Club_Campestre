import React from "react";
import "./Style/dots-loading.css";

export const DotsLoading = () => {
  return (
    <>
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <circle className="spinner_qM83" cx="4" cy="12" r="3" />
        <circle className="spinner_qM83 spinner_oXPr" cx="12" cy="12" r="3" />
        <circle className="spinner_qM83 spinner_ZTLf" cx="20" cy="12" r="3" />
      </svg>
    </>
  );
};
