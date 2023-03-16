import React from 'react'
import Animales from './Animales'
import "./Animal.css"

const Animal = ({lista}) => {
  return (
    <div>
      <div className='title'>
        <h1 className='titleText'>Lista de animales:</h1>
      </div>
      <ul>
      {lista.map((elemento) => {
        return <li><Animales key={elemento.id} element={elemento}/></li>
      })}
      </ul>
    </div>
  )
}

export default Animal