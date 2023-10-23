import React, { useState } from 'react';

function CardDetail(props) {
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <div className={`bg-white p-4 rounded-lg shadow-lg ${isDetailOpen ? '' : 'hidden'}`}>
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        onClick={handleCloseDetail}
      >
        X
      </button>
      <h1 className="text-2xl font-bold text-gray-800">{props.title}</h1>
      <img src={props.img} alt="imagen" className="max-w-full h-auto" />
      <p className="text-gray-600">{props.description}</p>
      <p className="text-blue-500 font-bold">Price: ${props.priceDollars}</p>
      <p className="text-blue-500 font-bold">Price in Euros: {props.priceEuros} €</p>
      {/* Agrega cualquier otra información adicional que desees mostrar */}
    </div>
  );
}

export default CardDetail;
