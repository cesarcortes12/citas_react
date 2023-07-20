
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}) => {
    
    
    //vamos a iterar con un map es el mas utilizado por que retorna un nuevo arreglo
    return (
        <div className=" md:w-1/2  lg:w-3/5 md:h-screen">

            {pacientes && pacientes.length ? //aqui usamos un ternario
                (
                    <>
                        <h2 className='font-black text-center text-3xl'>Listado Pacientes</h2>
                        <p className='text-xl text-center mt-5 mb-10'>
                            Administra Tus {""}
                            <span className='text-indigo-600 font-bold '>
                                Pacientes y Citas
                            </span>
                        </p>
                    </>
                ) : (
                       <>
                            <h2 className='font-black text-center text-3xl'>No Hay Pacientes</h2>
                        <p className='text-xl text-center mt-5 mb-10'>
                            Comienza agregando pacientes {""}
                            <span className='text-indigo-600 font-bold '>
                                y apareceran en este lugar
                            </span>
                        </p>
                       </>     
                    )}
            
            
            <div className="lg:h-screen md:h-screen overflow-y-scroll ">

            { pacientes.map( (paciente) => {
                return(
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                     />
                )
            })}
               
                

            </div>
        </div>


    )
}

export default ListadoPacientes