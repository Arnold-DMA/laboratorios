import React from 'react'

function UserInfo( {user}) {
  return (
    <div>
        <h3 className='blanco'>
            Matrícula
        </h3>
        <h4 className='blanco'>Detalle del estudiante</h4>
        <div className='blanco'>
            <strong>Nombre: </strong>{user.nombre}
        </div>
        <div className='blanco'>
            <strong>CUI: </strong>{user.cui}
        </div>
    </div>
  )
}

export default UserInfo