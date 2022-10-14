import React, {useState} from 'react';
import firebaseApp from "../firebase/credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function Docentes({curso}) {

    const [docentes, setDocentes] = useState(null);

    async function getDocentes(curso) {
        const docuRef = doc(firestore, `laboratorios/${curso}`);
        const docuCipher = await getDoc(docuRef);
        if(docuCipher.data()){
            return docuCipher.data().docentes;
        }
    }

    if(!docentes){
        getDocentes(curso).then((docentes => {
            setDocentes(docentes);
        }));
    }
    
    return (
        <div>
           
            <div>
               {docentes? docentes.map(docente => 
                    <label>
                      
                       
                      <p>{docente}</p>  
                     
                    </label>):<p>Cargando...</p>}

            </div>
           
        </div>
    )
}

export default Docentes