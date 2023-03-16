import React from 'react'
import "./Animal.css"
const Animales = ({element}) => {
  return (
    <div className='lista'>    
      <div>ID: {element.id} </div> <div>Nombre: {element.nombre} </div> <div>Raza: {element.raza} </div> <div>Edad: {element.edad} 
      </div><div>Diagnóstico: {element.diagnostico} </div> <div>Propietario: {element.propietario}</div>
    </div>
  )
}

export default Animales