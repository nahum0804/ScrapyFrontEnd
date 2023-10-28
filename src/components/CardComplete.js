import React from 'react';

export function CardComplete({ visible, onClose, title, img }) {
  if (!visible) return null;

  const closeCard = () => {
    // Llama a la función onClose para cerrar la tarjeta
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-150 h-150 sm:w-125 sm:h-125 md:w-150 md:h-150 lg:w-5/6 lg:h-5/6 xl:w-3/4 xl:h-3/4 bg-black text-white rounded-lg flex'>
        {/* Imagen a la izquierda */}
        <img
          src={img} // Utiliza la imagen pasada como prop
          alt="Imagen"
          className="object-cover w-1/2 h-full"
        />

        {/* Contenido a la derecha */}
        <div className="flex-1">
          <div className="p-4">
            <h2 className="text-2xl font-bold">{title}</h2> {/* Utiliza el título pasado como prop */}
            <p>Descripción</p>
            {/* Otros datos */}
          </div>

          <button className="absolute top-0 right-0 p-2 text-white hover::text-blue" onClick={closeCard}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.707 10l3.536 3.536a1 1 0 11-1.414 1.414L9.293 11 5.757 14.536a1 1 0 11-1.414-1.414L7.586 10 4.05 6.464a1 1 0 111.414-1.414L9.293 8l3.536-3.536a1 1 0 111.414 1.414L10.707 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
