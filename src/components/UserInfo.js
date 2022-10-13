import React from 'react'

function UserInfo( {user}) {
  return (
    <div>
        <h3>
            Matrícula
        </h3>
        <h4>Detalle del estudiante</h4>
        <div>
            <strong>Nombre: </strong>{user.nombre}
        </div>
        <div>
            <strong>CUI: </strong>{user.cui}
        </div>
    </div>
  )
}

export default UserInfo