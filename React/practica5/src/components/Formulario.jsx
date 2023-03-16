import React from 'react'
import "./styles.css";
const Formulario = () => {
  return (
    <div>
      <form method='post' action='' name='formulario' className='form'>
        <label htmlFor="nombre">Nombre:</label>
        <input type='text' id='formulario' name='nombre' />
        <label htmlFor="email">Email:</label>
        <input type='email' id='formulario' name='email' />
        <label htmlFor="password">Contraseña:</label>
        <input type='password' id='formulario' name='password' />
        <br></br>
        <input type='submit' value='Enviar' />
      </form>
    </div>
  )
}

export default Formulario