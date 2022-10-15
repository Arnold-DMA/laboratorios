import React from 'react'


function Sydebar({user, changeMenu}) {


  return (
    <div className='blanco2'>
        <button  className='boton' onClick={()=> changeMenu("Propio") }>Mis Matrículas</button>
        <button className='boton' onClick={()=> changeMenu("Matricula") }>Matricularme</button>
        <button className='boton' onClick={()=> changeMenu("Horarios") }>Horarios</button>
    </div>
  )
}

export default Sydebar


