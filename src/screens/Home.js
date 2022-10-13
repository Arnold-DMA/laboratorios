import React from 'react';
import UserInfo from '../components/UserInfo';
import firebaseApp from '../firebase/credenciales';
import { getAuth, signOut } from "firebase/auth";

import Sydebar from '../components/Sydebar';
const auth = getAuth(firebaseApp);

function Home( {user} ) {
  return (
    <div>
      <h1 className='blanco'>
        Bienvenido {user.nombre}
      </h1>
      <button onClick={()=> signOut(auth) }>Cerrar sesión</button>
      <UserInfo user={user} />
      <Sydebar user={user}/>
      
    </div>
  )
}

export default Home