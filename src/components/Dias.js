import React, {useState} from 'react';
import firebaseApp from "../firebase/credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function Dias({curso}) {

    const [dias, setDias] = useState(null);

    async function getDias(curso) {
        const docuRef = doc(firestore, `laboratorios/${curso}`);
        const docuCipher = await getDoc(docuRef);
        if(docuCipher.data()){
            return docuCipher.data().dias;
        }
    }

    if(!dias){
        getDias(curso).then((dias => {
            setDias(dias);
        }));
    }
    
    return (
        <div>
          
            <div>
                {dias? dias.map(dia => 
                    <label>
                        <p>{dia}</p> 
                    </label>):<p>Cargando...</p>}
            </div>
            
        </div>
    )
}

export default Dias