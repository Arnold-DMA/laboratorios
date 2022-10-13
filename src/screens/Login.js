import React from 'react';
import firebaseApp from "../firebase/credenciales";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(firebaseApp);

function Login() {

    function submitHandler(e){
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        signInWithEmailAndPassword(auth, email, password);

        console.log("submit");
    }

    return (
        <div>
            <h1>Inicio de sesión</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Correo electrónico:
                    <input type="email" id="email"/>
                </label>
                <label>
                    Contraseña:
                    <input type="password" id="password"/>
                </label>
                <input type="submit" value="Iniciar sesión"/>
            </form>
        </div>
    )
}

export default Login