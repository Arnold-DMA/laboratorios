import React from 'react';
import firebaseApp from '../firebase/credenciales';
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Home( {user} ) {
  return (
    <div>
      Home
      <button onClick={()=> signOut(auth) }>Cerrar sesión</button>
      <br/>
      <button>Aquí irá toda la magia</button>
    </div>
  )
}

export default Home