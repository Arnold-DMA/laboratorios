import React, {useState} from 'react'
import Matricula from '../components/Matricula';
import Horarios from './Horarios';
import Propio from './Propio';

function Sydebar({user}) {

    const [menu, changeMenu] = useState("Propio");

  return (
    <div className='blanco2'>
        <button  className='boton' onClick={()=> changeMenu("Propio") }>Mis Matrículas</button>
        <button className='boton' onClick={()=> changeMenu("Matricula") }>Matricularme</button>
        <button className='boton' onClick={()=> changeMenu("Horarios") }>Horarios</button>
        {menu==="Propio"? <Propio user={user}/>: menu==="Matricula"?<Matricula user={user}/>:<Horarios user={user}/>}
        {menu=="Propio"? <Propio user={user}/>: menu==="Horarios"}
    </div>
  )
}

export default Sydebar


