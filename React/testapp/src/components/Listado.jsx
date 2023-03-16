import React from 'react'
import ElementoLista from './ElementoLista';

const Listado = () => {
    const usuarios = [
        {
            id: 1,
            nombre: 'José Antonio Hernández',
        },
        {
            id: 2,
            nombre: 'José Manuel Pérez',
        },
        {
            id: 3,
            nombre: 'José Miguel Santana',
        },
        {
            id: 4,
            nombre: 'José Juan Rodríguez',
        },
    ];
  return (
    <div>
      <h2>Listado de usuarios</h2>
      <ul>
        {usuarios.map((usuario)=>(
        // <h2>{usuario.nombre}</h2>
        <ElementoLista key={usuario.id} nombre={usuario.nombre} />
        ))}
      </ul>
    </div>
  )
}

export default Listado