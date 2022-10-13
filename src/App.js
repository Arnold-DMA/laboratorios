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
    const nombreCompleto = docuCipher.data().nombres + " " + docuCipher.data().apellidos;
    const cui = docuCipher.data().cui;
    return [cursos, abreviatura, nombreCompleto, cui];
  }

  function setUserData(usuarioFirebase){
    getData(usuarioFirebase.email).then((datos) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        cursos: datos[0],
        abreviaturas: datos[1],
        nombre: datos[2],
        cui: datos[3],
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
