import React from 'react'
import Grupos from './Grupos'

function Matricula({user}) {
    
  return (
    <div>
        <h4 className='blanco'>
            Detalles de matrícula
        </h4>
        <div className='blanco'>
            <strong>
                Tus cursos
            </strong>
            <div>
                {user.cursos.map(curso => <Grupos curso={curso}/>)}
            </div>
        </div>
    </div>
  )
}

export default Matricula