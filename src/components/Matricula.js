import React, {useState, useRef} from 'react'
import Grupos from './Grupos'

function Matricula({user}) {

    const [estados, setEstado] = useState([]);
    const referencias = useRef([]);
    referencias.current = [];

    function addToRefs(el){
        if(el && !referencias.current.includes(el)){
            referencias.current.push(el);
        }
        
    }

    //Función llamada cada vez que se realiza un cambio en la selección de curso
    function rehacer(i, activo) {
        //Comprueba si ya se ha asignado el curso en el horario anteriormente
        if(estados[i]){
            //Bucle para iterar todas las horas de laboratorio del [Curso, grupo] seleccionado
            estados[i][2].forEach(element => {
                //Comprueba si el horario asignado anteriormente no era un cruce y lo setea a vacío.
                if(referencias.current[element].className === "propuesta"){
                    referencias.current[element].textContent = "";
                    referencias.current[element].className = "vacio";
                }
                //En caso de que sea un cruce se separa los cursos dentro del cruce y se intera sobre ellos
                else if (referencias.current[element].className === "cruce"){
                    let temp = referencias.current[element].textContent.split("\n");
                    referencias.current[element].textContent = "";
                    let contar = 0;
                    temp.forEach(abr => {
                        //Se escriben todos los cursos menos el que está cambiando a otro horario.                        
                        if(abr !== estados[i][3]+" - "+estados[i][1]){
                            referencias.current[element].textContent += abr + "\n";
                            contar++;
                        }
                        //Si la cantidad de cursos que quedan en la celda que tenía cruce es 1 se setea como propuesta
                        //caso contrario permanece como cruce.
                        if (contar === 1){
                            referencias.current[element].className = "propuesta";
                        }
                        
                    });
                }
                
            });
        }
        console.log("activo", estados);
        let est = estados;
        est[i] = activo;
        setEstado(est);
        //Se itera para cada hora del curso seleccionado
        activo[2].forEach(element => {
            //Si la celda está vacía lo setea como propuesta
            if(referencias.current[element].className === "vacio"){
                referencias.current[element].textContent = estados[i][3]+" - "+estados[i][1];
                referencias.current[element].className = "propuesta";
            }
            //caso contrario lo setea como cruce
            else{
                referencias.current[element].textContent += "\n"+estados[i][3]+" - "+estados[i][1];
                referencias.current[element].className = "cruce";
            }
            
        });
    }
//Creación de tabla de horario con refs para controlar cada celda.
    function drawTabla(hora){
        let horario = [];
        for(let i = 0; i<5; i++){
            let key = hora*5 + i;
            horario.push(<td key={key} id={"horario-"+key} className="vacio" ref={addToRefs}></td>);
        }
        return horario;
    }
    
    
  return (
    <>
        <h4 className='blanco1'>
            Detalles de matrícula
        </h4>
        <div className='blanco1'>
            <strong>
                Tus cursos
            </strong>
            <div>
                {user.cursos.map((curso, iter) => <Grupos key={iter} curso={curso} marcarHTML={rehacer} iter={iter}/>)}
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Hora\Día</th>
                        <th className='diasSemana'>Lunes</th>
                        <th className='diasSemana'>Martes</th>
                        <th className='diasSemana'>Miércoles</th>
                        <th className='diasSemana'>Jueves</th>
                        <th className='diasSemana'>Viernes</th>
                    </tr>
                </thead>
                <tbody className='horarioBody'>
                    <tr>
                        <th>07:00 - 07:50</th>
                        {drawTabla(0)}
                    </tr>
                    <tr>
                        <th>07:50 - 08:40</th>
                        {drawTabla(1)}
                    </tr>
                    <tr>
                        <th>08:50 - 09:40</th>
                        {drawTabla(2)}
                    </tr>
                    <tr>
                        <th>09:40 - 10:30</th>
                        {drawTabla(3)}
                    </tr>
                    <tr>
                        <th>10:40 - 11:30</th>
                        {drawTabla(4)}
                    </tr>
                    <tr>
                        <th>11:30 - 12:20</th>
                        {drawTabla(5)}
                    </tr>
                    <tr>
                        <th>12:20 - 13:10</th>
                        {drawTabla(6)}
                    </tr>
                    <tr>
                        <th>13:10 - 14:00</th>
                        {drawTabla(7)}
                    </tr>
                    <tr>
                        <th>14:00 - 14:50</th>
                        {drawTabla(8)}
                    </tr>
                    <tr>
                        <th>14:50 - 15:40</th>
                        {drawTabla(9)}
                    </tr>
                    <tr>
                        <th>15:50 - 16:40</th>
                        {drawTabla(10)}
                    </tr>
                    <tr>
                        <th>16:40 - 17:30</th>
                        {drawTabla(11)}
                    </tr>
                    <tr>
                        <th>17:40 - 18:30</th>
                        {drawTabla(12)}
                    </tr>
                    <tr>
                        <th>18:30 - 19:20</th>
                        {drawTabla(13)}
                    </tr>
                    <tr>
                        <th>19:20 - 20:10</th>
                        {drawTabla(14)}
                    </tr>
                    <tr>
                        <th>20:10 - 21:00</th>
                        {drawTabla(15)}
                    </tr>
                </tbody>
            </table>
            <button>Matricularme</button>
        </div>
    </>
  )
}

export default Matricula