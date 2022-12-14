import React, {useState} from 'react';
import firebaseApp from "../firebase/credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function Grupo1({curso}) {

    const [grupos, setGrupos] = useState(null);

    async function getGrupos(curso) {
        const docuRef = doc(firestore, `laboratorios/${curso}`);
        const docuCipher = await getDoc(docuRef);
        if(docuCipher.data()){
            return docuCipher.data().grupos;
        }
    }

    if(!grupos){
        getGrupos(curso).then((grupos => {
            setGrupos(grupos);
        }));
    }
    
    return (
        <div>
          
            <div>
                {grupos? grupos.map(grupo => 
                    <label>
                        <p>{grupo}</p> 
                    </label>):<p>Cargando...</p>}
            </div>
            
        </div>
    )
}

export default Grupo1