import React from 'react'
import Grupos from './Grupos'

function Matricula({user}) {
    
  return (
    <div>
        <h4 className='blanco1'>
            Detalles de matrícula
        </h4>
        <div className='blanco1'>
            <strong>
                Tus cursos
            </strong>
            <div>
                {user.cursos.map(curso => <Grupos curso={curso}/>)}
            </div>
            <button>Matricularme</button>
        </div>
    </div>
  )
}

export default Matricula