import React from 'react'
import "./Navbar.css"
const enlaces = ["#inicio", "#blog", "#usuarios"]

const Navbar = () => {
  return (
  <div>
    <ul className='navbar'>
      <a href={enlaces[0]}><li>Inicio</li></a>
      <a href={enlaces[1]}><li>Blog</li></a>
      <a href={enlaces[2]}><li>Usuarios</li></a>
    </ul>
  </div>
  )
}

export default Navbar