import React, { useState } from "react";

import Home from "./screens/Home";
import Login from "./screens/Login";

import firebaseApp from "./firebase/credenciales";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);


function App() {
  const [user, setUser] = useState(null);

  async function getData(email) {
    const docuRef = doc(firestore, `users/${email}`);
    const docuCipher = await getDoc(docuRef);
    const cursos = docuCipher.data().cursos;
    const abreviatura = docuCipher.data().abreviatura;
    return [cursos, abreviatura];
  }

  function setUserData(usuarioFirebase){
    getData(usuarioFirebase.email).then((cursos) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        cursos: cursos[0],
        abreviaturas: cursos[1],
      };
      setUser(userData);
      console.log("Datos: ", userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase) {
      if(!user){
        setUserData(usuarioFirebase);
      }
    }
    else {
      setUser (null);
    }
  });

  return (
    <div className="App">
      {user ? <Home user={user} /> : <Login />}
    </div>
  );
}

export default App;
