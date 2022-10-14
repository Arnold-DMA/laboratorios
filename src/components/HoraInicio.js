import React, {useState} from 'react';
import firebaseApp from "../firebase/credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function HoraInicio({curso}) {

    const [horaInicio, sethoraInicio] = useState(null);

    async function gethoraInicio(curso) {
        const docuRef = doc(firestore, `laboratorios/${curso}`);
        const docuCipher = await getDoc(docuRef);
        if(docuCipher.data()){
            return docuCipher.data().horaInicio;
        }
    }

    if(!horaInicio){
        gethoraInicio(curso).then((horaInicio => {
            sethoraInicio(horaInicio);
        }));
    }
    
    return (
        <div>
          
            <div>
                {horaInicio? horaInicio.map(horainicio => 
                    <label>
                        <p>{horainicio}</p> 
                    </label>):<p>Cargando...</p>}
            </div>
            
        </div>
    )
}

export default HoraInicio