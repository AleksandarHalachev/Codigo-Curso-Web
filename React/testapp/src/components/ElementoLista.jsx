import React from 'react'

const ElementoLista = ({nombre}) => {
  return (
    <div>
        <h3 key={nombre.id}>{nombre}</h3>
    </div>
  )
  }

export default ElementoLista