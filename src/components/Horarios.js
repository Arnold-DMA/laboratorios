import React from 'react'
import Docentes from './Docentes';
import Grupo1 from './Grupo1'
import Dias from './Dias'
import HoraInicio from './HoraInicio'
import './styles.css'
import HoraFinal from './HoraFin';
function Horarios({user}) {
  return (
    <div className='blanco1'>
        <h4 className='detalles'>
            Detalles de cursos
        </h4>
        <div className='diseño'>
          <div className='cursos'>
          <strong>
                Tus cursos
            </strong>
          </div>

            <div className='diseñotabla'>
              <table className='center' cellSpacing='0'>
                <thead>
                  <tr>
                    <th>Curso</th>
                    <th>Dias</th>
                    <th>Docentes</th>
                    <th>Grupos</th>
                    <th>Hora inicio</th>
                    <th>Hora fin</th>
                  </tr>

                </thead>
                <tbody>
                  {user.cursos.map(curso=>{
                    return(
                      <tr>
                        <td> {curso}</td>
                        <td>  {<Dias curso={curso}/>}       </td>
                        <td>{<Docentes curso={curso}/>}</td>
                        <td> {<Grupo1 curso={curso}/>} </td>
                        <td>{<HoraInicio curso={curso}/>} </td>
                        <td>{<HoraFinal curso={curso}/>}</td>


                      </tr>

                    );
                  })}
                  
                

                </tbody>
                
                </table>
               
            </div>
       
        </div>
    </div>
  )
}

export default Horarios