import React, {useState} from 'react'
import Matricula from '../components/Matricula';
import Horarios from './Horarios';
import Propio from './Propio';

function Sydebar({user}) {

    const [menu, changeMenu] = useState("Propio");

  return (
    <div className='blanco'>
        <button onClick={()=> changeMenu("Propio") }>Mis Matrículas</button>
        <button onClick={()=> changeMenu("Matricula") }>Matricularme</button>
        <button onClick={()=> changeMenu("Horarios") }>Horarios</button>
        {menu==="Propio"? <Propio user={user}/>: menu==="Matricula"?<Matricula user={user}/>:<Horarios user={user}/>}
    </div>
  )
}

export default Sydebar