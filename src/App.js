import './App.css';
import React from 'react';
import { ImportComponents } from './components/ImportComponents';

function App() {
  return (
    <div className="App">
      <header className="p-4">
        <h1 className="text-2xl font-bold">Mi Aplicación</h1>
      </header>
      <ImportComponents/>
    </div>
  );
}

export default App;
