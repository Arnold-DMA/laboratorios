import React from 'react'


function Sydebar({user, changeMenu}) {


  return (
    <div className='blanco'>
        <button onClick={()=> changeMenu("Propio") }>Mis Matrículas</button>
        <button onClick={()=> changeMenu("Matricula") }>Matricularme</button>
        <button onClick={()=> changeMenu("Horarios") }>Horarios</button>
    </div>
  )
}

export default Sydebar