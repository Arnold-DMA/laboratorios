import React, {useState} from 'react';
import firebaseApp from "../firebase/credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function Propio({user}) {

    const [matricula, setMatricula] = useState(null);

    async function getMatricula(userId) {
        const docuRef = doc(firestore, `matriculas/${userId}`);
        const docuCipher = await getDoc(docuRef);
        if(docuCipher.data()){
            return [docuCipher.data().cursos, docuCipher.data().grupos];
        }
    }

    if(!matricula){
        getMatricula(user.email).then((registro => {
            setMatricula(registro)
        }));
    }

  return (
    <div>
        <h4 className='blanco1'>
            Mis Matrículas
        </h4>
        {matricula?matricula[0].map(function(curso, i) {
            return matricula[1][i]?<div> {curso+": "+matricula[1][i]}</div>:<div>{curso+": No registra matrícula."}</div>
        }):<p>Cargando...</p>}
    </div>
  )
}

export default Propio