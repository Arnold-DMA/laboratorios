import React, {useState} from 'react';
import UserInfo from '../components/UserInfo';
import firebaseApp from '../firebase/credenciales';
import { getAuth, signOut } from "firebase/auth";

import Sydebar from '../components/Sydebar';
import Matricula from '../components/Matricula';
import Horarios from '../components/Horarios';
import Propio from '../components/Propio';
const auth = getAuth(firebaseApp);

function Home( {user} ) {

  const [menu, changeMenu] = useState("Propio");

  return (
    <div>
    <header>
      Bienvenido {user.nombre}
      
      <button onClick={()=> signOut(auth) }>Cerrar sesión</button>
    </header>
    <nav>
      <UserInfo user={user} />
    </nav>
    <aside>
      <Sydebar user={user} changeMenu={changeMenu}/>
    </aside>
    <section>
      {menu==="Propio"? <Propio user={user}/>: menu==="Matricula"?<Matricula user={user}/>:<Horarios user={user}/>}
    </section>
    <footer>

    </footer>
    </div>
  )
}

export default Home