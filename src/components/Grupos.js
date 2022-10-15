import React, {useState} from 'react';
import firebaseApp from "../firebase/credenciales";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

function Grupos({curso, marcarHTML, iter}) {

    const [grupos, setGrupos] = useState(null);
    const [dia, setDia] = useState(null);
    const [horaI, setHoraI] = useState(null);
    const [horaF, setHoraF] = useState(null);
    const [abreviatura, setAbreviatura] = useState(null);

    async function getGrupos(curso) {
        const docuRef = doc(firestore, `laboratorios/${curso}`);
        const docuCipher = await getDoc(docuRef);
        if(docuCipher.data()){
            return docuCipher.data();
        }
    }

    if(!grupos){
        getGrupos(curso).then((dataLab => {
            setGrupos(dataLab.grupos);
            setHoraI(dataLab.inicioAcc);
            setHoraF(dataLab.finAcc);
            setAbreviatura(dataLab.abreviatura);
            setDia(dataLab.dias);
        }));
    }
    
    const getSeleccionado = (activo) => {
        marcarHTML(iter, activo);
    }

    const getNumeros = (dia, horaI, horaF) => {
        let horas = [];
        let diff = horaF - horaI +1;
        let inicio = horaI*5;
        switch (dia){
            case "Lunes": inicio += 0; break;
            case "Martes": inicio += 1; break;
            case "Miercoles": inicio += 2; break;
            case "Jueves": inicio += 3; break;
            case "Viernes": inicio += 4; break;
            default: inicio += 0;
        }
        for (let iter = 0; iter<diff; iter++) {
            horas.push((inicio+iter*5))
        }

        return horas;
    }
    
    return (
        <>
            {curso}
            <div>
                {grupos? grupos.map(function(grupo, i){
                    return <label key={i}>
                        <input type="radio" onChange={e => e.target.checked? getSeleccionado([curso, grupo, getNumeros(dia[i], horaI[i], horaF[i]), abreviatura]): null} name={"curso-"+curso} value={grupo} />
                        {grupo}
                        </label>}):<p>Cargando...</p>}
            </div>
            
        </>
    )
}

export default Grupos