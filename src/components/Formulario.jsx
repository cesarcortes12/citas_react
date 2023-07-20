//cremaos un segundo componente pero de manera mas facil

import { useState, useEffect } from 'react';
import Error from './Error'

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => { //extraemos el prop desde app.jsx para irlo llenando
  /*HOOK: 
  siempre se declara el useState a inicio de l componente
  tenemos del lado izquierdo la variable y la funcion que modifica esa variable
  del lado derecho el valor inicial de la variables*/

  /* REGLAS DE LOS HOOKS
    -se colocan en parte superior del componente
    -no debe estar dentro de condicionales
    -no deben estardespues de un return
   */

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  //hacemos un state para una alerta en dado caso que falte un campo para llenar
  const [error, setError] = useState(false)

  //vamos a declarar el useEffect recordar que siempre debe tener adentro una funcion
  //y con eso evitamos los reRenders
  //NOTA EL useEfect se encarga de escuchar los cambios que sucedan en alguna parte de nuestro state
  //tambien se utiliza para cuando un componente este listo y tambien pueden haber varios useEffect
  useEffect( () => {
      if(Object.keys(paciente).length>0){//object.keys verifica si un arreglo esta vacio o no
        console.log("si hay algo")
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
      }
  },[paciente]) //AQUI SE EJECUTA CADA VEZ QUE PACIENTE CAMBIE los quee sta dentro de los corchetes son las dependencias



  const generarId =() =>{ 
    //esta funcion lo que hace es renerar un numero aleatorio y lo une con 
    // una fecha aleatoria, es una forma de generar un id unico
    const random =Math.random().toString(36).substring(2)
    const fecha =Date.now().toString(36)
    return fecha+random
  }//fin funcion id


  //declaramos la funcion  de handleSubmit como es de varias lineas se hace una funcion cuando es de una sola
  // linea se hace un callback mejor

  const handleSubmit = (e) => //con la e le pasamos el evento para luego prevenir el envio por default
  {
    e.preventDefault(); //aqui prevenimos el envio por defecto para poder hacer validaciones
    //validacion del formulario
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('hay algun campo vacio')
      setError(true)
      return;
    }
    setError(false)

    //vamos a construir un objeto de paciente para enviarlo por prop al app.jsx
    const objetoPaciente={
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      
    }
    
    //esto es para cuando vamos a editar entonces necesitamos validar si ya hay un id
    if(paciente.id){
      //editando el registro
      //como ya tenemos el objeto con id se lo agregamos al nuevo objeto paciente
      objetoPaciente.id=paciente.id
      //iteramos en pacientes para buscar el id 
      //si es igual retorna el nuevo objeto actualizado sino solo retorna el que estaba antes
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id
                                                    ? objetoPaciente : pacienteState )
      
      setPacientes(pacientesActualizados)
      setPaciente({})

      
    }else{
      //creando un nuevo registro
      objetoPaciente.id= generarId() //esta propiedad es un id que se genera por una funcion ya quee s un nuevo registro
      //recordar que nunca se debe modificar el arrglo original por eso con el spred operator hacemos una copia 
      setPacientes([...pacientes,objetoPaciente]);
    }

    

    //reiniciar el formulario despues de agregar los datos
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 '>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Agregar Pacientes y {""}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit} //normalmente se le pone un handle a un onSubmit
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'

      >
        
        {error && <Error>
                    <h1>Recuerda</h1> 
                    <p>todos los campos son obligatorios</p> 
                  </Error>} 
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold' >
            Nombre de la Mascota {nombre} 
          </label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="text"
            id='mascota'
            placeholder='Nombre de la  Mascota'
            //aqui tenemos la variable y la funcion modificadore del hook 
            value={nombre}
            //mediante un arrow function accedemos al valor por el evento y lo modificamos 
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold' >
            Nombre Propietario
          </label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="text"
            id='propietario'
            placeholder='Nombre del propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='Email' className='block text-gray-700 uppercase font-bold' >
            Email
          </label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="email"
            id='Email'
            placeholder='Email del propietario'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold' >
            Alta
          </label>
          <input
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            type="date"
            id='alta'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}

          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold' >
            Sintomas
          </label>
          <textarea
            name=""
            id="sintomas"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe Los Sintomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />

        </div>

        <input
          type="submit"
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all'
          value={paciente.id ? 'Editar Paciente'  : 'Agregar Paciente'}
        />

      </form>
    </div>
  )
}

export default Formulario 