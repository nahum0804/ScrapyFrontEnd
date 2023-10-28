import React from 'react';

function Card(props) {
  return (
    <div className="card mx-2 my-2 p-4 rounded-lg shadow-lg lg:w-1/4 md:w-1/2 sm:w-full bg-slate-950 transform transition-transform scale-100 hover:scale-105">
      <img src={props.img} alt="imagen" className="max-w-full h-auto" />
      <h1 className="text-2xl font-bold text-white">{props.title}</h1>

      <button onClick={props.toggleCardCompleteVisibility} className="bg-rose-700 text-white px-4 py-2 rounded-full mx-auto mt-4  hover:bg-white hover:text-black">        View More
      </button> 
    </div>
  );
}

export { Card };
