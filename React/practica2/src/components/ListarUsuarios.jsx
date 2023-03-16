import React from 'react'

const ListarUsuarios = ({element}) => {
  return (
    <div>
      <p key={element.id}>{element.nombre} / {element.email} / {element.nickname}</p>
    </div>
  )
}

export default ListarUsuarios