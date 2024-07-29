import React from "react";

const Popup = (Formulario, additionalProps) => {
  return class extends React.Component {
    render() {
      const { cerrarModal, titulo, subtitulo, ...rest } = additionalProps;

      return (
        <div
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 items-center justify-center w-full max-h-full overflow-x-hidden overflow-y-auto bg-gray-700 shadow md:inset-0 bg-opacity-60 sm:max-md:pt-12 sm:max-md:pb-20 "
        >
          <div className="relative w-full max-w-2xl max-h-full p-4 2xl:left-1/3 2xl:top-[20%] sm:max-md:left-[0%] lg:top-0 lg:left-[28%]">
            <div className="relative bg-blue-950 rounded-lg shadow dark:bg-blue-950">
              <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {titulo}
                </h2>
                <button
                  type="button"
                  onClick={cerrarModal}
                  className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
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

              <div className="p-8 space-y-4 md:p-8">
                <p className="text-base leading-relaxed text-black dark:text-white">
                  {subtitulo}
                </p>
                <Formulario {...this.props} {...rest} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
};

export default Popup;
