import React, {useState} from 'react'

function Login() {

    function submitHandler(e){
        e.preventDefault();
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