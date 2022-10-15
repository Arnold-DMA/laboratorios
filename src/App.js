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

  //Función para obtener los datos del usuario que ha iniciado sesión.
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

  //Función que se ejecuta al hacer un cambio en la autenticación
  onAuthStateChanged(auth, (usuarioFirebase) => {
    //Si existe una sesión obtiene los datos
    if(usuarioFirebase) {
      if(!user){
        setUserData(usuarioFirebase);
      }
    }
    //de lo contrario setea los datos a null
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
