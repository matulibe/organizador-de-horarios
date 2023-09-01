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

  const [actividades, setActividades] = useState([
    {
      list: "lunes"
    },
    {
      list: "lunes"
    },
    {
      list: "lunes"
    },
    {
      list: "lunes"
    },
    {
      list: "lunes"
    },
    {
      list: "lunes"
    },

    {
      list: "lunes"
    },
  ]);

  const getList = (list) =>{
    return actividades.filter(item => item.list === list)
  }

  const startDrag = (e, item) => {
    e.dataTransfer.setData('itemID', item.id);
  }

  function handleDrag(){}

  return (
    <>
      <div className="title">Organizador de horarios</div>
      <div className='planilla'>
        <div className='dia'>
          <h2>Lunes</h2>
          <div className='celda'>
            {getList("lunes").map(item => (
              <div className='actividades'>
                <strong className='titulo'>Titulo</strong>
              </div>
            ))}
          </div>
        </div>
        <div className='dia'>
          <h2>Martes</h2>
          <div className='celda'>
            {getList("martes").map(item => (
              <div className='actividades'>
                <strong className='titulo'>Titulo</strong>
              </div>
            ))}
          </div>
        </div>
        <div className='dia'>
          <h2>Miercoles</h2>
          <div className='celda'>
            {getList("miercoles").map(item => (
              <div className='actividades'>
                <strong className='titulo'>Titulo</strong>
              </div>
            ))}
          </div>
        </div>
        <div className='dia'>
          <h2>Jueves</h2>
          <div className='celda'>
            {getList("jueves").map(item => (
              <div className='actividades'>
                <strong className='titulo'>Titulo</strong>
              </div>
            ))}
          </div>
        </div>
        <div className='dia'>
          <h2>Viernes</h2>
          <div className='celda'>
            {getList("viernes").map(item => (
              <div className='actividades'>
                <strong className='titulo'>Titulo</strong>
              </div>
            ))}
          </div>
        </div>
        <div className='dia'>
          <h2>Sabado</h2>
          <div className='celda'>
            {getList("sabado").map(item => (
              <div className='actividades'>
                <strong className='titulo'>Titulo</strong>
              </div>
            ))}
          </div>
        </div>
        <div className='dia'>
          <h2>Domingo</h2>
          <div className='celda'>
            {getList("domingo").map(item => (
              <div className='actividades'>
                <strong className='titulo'>Titulo</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
