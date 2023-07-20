//notas los componentes en react se divden en dos : antes del return y despues
//como funciones if etc
//lo que esta en el return es lo que se muestra en pantalla

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import {useState, useEffect} from 'react'


function App() {
  //esta linea es la isntruccion que obtiene lo que alla en el local storage si no hay nada entonces crea un arreglo vacio
  const initial =JSON.parse(localStorage.getItem('pacientes')) ?? []
  //esto es para el props y pasar variables a otros componentes
  const [pacientes ,setPacientes] = useState(initial);
  //
  //creamos un arreglo useState pero para controlar cada uno de los pacientes para los botones editar y eliminar 
  const [paciente,setPaciente]= useState({})

  //vamos a crear u neffect para que los datos persistan en el local storage
  /*useEffect( () =>{
    const obtenerLS = () =>{
      const pacientesLS =  JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
      console.log(pacientesLS)
    }
    obtenerLS();
  },[]);*/
  //no le pasamos dependias por que solo queremos que se ejecute una vez


  //vamos a almacenar en el localStorage la informacion mediante json
  useEffect( ()=>{ //json no adminte arreglos entonces por eso convertimos todo a un string
      localStorage.setItem('pacientes',JSON.stringify(pacientes));
  },[pacientes]) 

  //creamos la funcion eliminar que va a tomar el id hasta paciente y regresa al app.jsx
  const eliminarPaciente =((id)=>{
    const pacientesActualizados = pacientes.filter(pacienteaEliminar => pacienteaEliminar.id !== id);
    setPacientes(pacientesActualizados);

  })

  return (
    //este proyecto url http://localhost:5173/
    //recordar que solo se retorna un elemento en el nivel mas alto 
    // <> esto es un fragment
    //para diferenciar expresiones u operaciones dentro del fragment se debe poner entre llaves
      <div className="container mx-auto mt-20 "> 
        <Header
         
          
        />
        <div className="mt-12 md:flex">
          <Formulario
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente} // lopasamos al formulario para limpiarlo del formulario despues de la edicion
          />
          <ListadoPacientes
            pacientes={pacientes}//le estamos pasadndo el prop
            setPaciente={setPaciente}//le estamos pasasndo el prop
            eliminarPaciente={eliminarPaciente}// le pasamos el prop con el id recibido }
          />

        </div>
        
      </div> 
  )
}

export default App
