import './App.css';
import React, { useState } from 'react';
import { ImportComponents } from './components/ImportComponents';
import { CardComplete } from './components/CardComplete';

function App() {
  const [cardCompleteVisible, setCardCompleteVisible] = useState(false);

  const toggleCardCompleteVisibility = () => {
    setCardCompleteVisible(!cardCompleteVisible);
  }

  //Close the card
  const close = () => {
    setCardCompleteVisible(false);
  }


  return (
    <div className="App">
      <header className="p-4 bg-black text-white">
        <h1 className="text-2xl font-bold">Mi Aplicación</h1>
      </header>
      <ImportComponents toggleCardCompleteVisibility={toggleCardCompleteVisibility} />
      <CardComplete visible={cardCompleteVisible} onClose={close} />
      <footer className="p-4 bg-gray-950 text-white">
        <p>Footer</p>
        <p>More text</p>
      </footer>
    </div>
  );
}

export default App;
