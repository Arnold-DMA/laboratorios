import React from 'react';
import firebaseApp from "../firebase/credenciales";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import './Login.css'
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
            
            <h1 class="title">SISTEMA DE MATRICULAS LABORATORIOS 2022-B</h1>
            <body>
            
            <section class="form-login">

                <h5>Bienvenido</h5>
            
                <form onSubmit={submitHandler}>
                <p><label>
                    Correo electrónico:
                    <input class="controls" type="email" id="email"/>
                </label>
                </p>
                <p>
                <label>
                    Contraseña:
                    <input class="controls" type="password" id="password"/>
                </label>
                </p>
                <input class= "button" type="submit" value="Iniciar sesión"/>
                </form> 
            </section>
            </body>
        </div>
    )
}

export default Login