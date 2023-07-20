
/*en este componente pasamos un prop que es un mensaje y viene del formulario linea 77 para luego mostrarlo 
 pero lo pasamos de otra forma que tambien se puede con la palabra children y es para cuando queremos
 pasarle multiples lineas o bastante codigo html
 */
const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-center p-3 text-white uppercase font-bold mb-3 rounded-md' >
    {children}
  </div>
  )
}

export default Error