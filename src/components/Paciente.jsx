

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => { //le pasamos el prop paciente que es un objeto con toda la informacion
    
const handleEliminar =() =>{
    const respuesta = confirm('desea eliminar la mascota ')

    if(respuesta){
        eliminarPaciente(paciente.id)
    }
}

    return (
        <div className="bg-white mx-5 my-5 shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase "> Nombre : {""}
                <span className="font-normal normal-case" >
                    {paciente.nombre}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase "> Propietario : {""}
                <span className="font-normal normal-case" >
                    {paciente.propietario}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase "> Email : {""}
                <span className="font-normal normal-case" >
                    {paciente.email}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase "> Fecha ALta : {""}
                <span className="font-normal normal-case" >
                    {paciente.fecha}
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase "> Sintomas : {""}
                <span className="font-normal normal-case" >
                    {paciente.sintomas}
                </span>
            </p>
            <div className='flex justify-between mt-10'>
                <button
                    type="button" 
                    className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md'
                    onClick={() => setPaciente(paciente)} //este setPaciente viene siguiendo una ruta desde el app.jsx
                    //a travez de cada componente
                >Editar
                </button>
                <button
                    type="button" 
                    className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md'
                    onClick={handleEliminar} //no le ponemos los parentesis por que manda a llamar de inmediato a la funcion 
                    //por eso mejor mediante un callback en la funcion esperamos
                >Eliminar
                </button>
            </div>

        </div>
    )
}

export default Paciente