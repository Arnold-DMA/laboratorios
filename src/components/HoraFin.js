import React, {useState} from 'react';
import firebaseApp from "../firebase/credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function HoraFinal({curso}) {

    const [horaFinal, sethoraFinal] = useState(null);

    async function gethoraFinal(curso) {
        const docuRef = doc(firestore, `laboratorios/${curso}`);
        const docuCipher = await getDoc(docuRef);
        if(docuCipher.data()){
            return docuCipher.data().horaFinal;
        }
    }

    if(!horaFinal){
        gethoraFinal(curso).then((horaFinal => {
            sethoraFinal(horaFinal);
        }));
    }
    
    return (
        <div>
          
            <div>
                {horaFinal? horaFinal.map(horafinal => 
                    <label>
                        <p>{horafinal}</p> 
                    </label>):<p>Cargando...</p>}
            </div>
            
        </div>
    )
}

export default HoraFinal