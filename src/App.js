import React from 'react';
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import ReactDOM from 'react-dom';
import './App.css';

//Las actividades a crear seran widgets. Por lo tanto ademas de implementarlos, la planilla debera ser
// un mapa de widgets. 

/*
 * Aqui es donde se renderiza la pagina. Aqui es donde estara renderizada la planilla y sus botones para sus funciones.
 * Tambien deberan estar renderizadod los widgets de las actividades ya creadas, asi como sus funciones.
 * 
 */
function App() {

  const [actividades, setActividades] = useState([]);

  function handleDrag(){}

  return (
    <div>
      <div className="App">
        <h1 id="title">Organizador de horarios</h1>
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDrag}>
          
      </DndContext>

    </div>
  );
}

export default App;
