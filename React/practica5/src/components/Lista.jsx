import React from 'react'
import "./styles.css";

const enlaces = ["https://www.youtube.com/watch?v=B8wt7p9LHOw", "https://twitter.com/home", "https://www.facebook.com/"]
const Lista = () => {
  return (
    <div>
      <h2>Lista Enlaces:</h2>
      <ul className='navbar'>
        <a href={enlaces[0]}><li>Youtube</li></a>
        <a href={enlaces[1]}><li>Twitter</li></a>
        <a href={enlaces[2]}><li>Facebook</li></a>
      </ul>
    </div>
  )
}

export default Lista