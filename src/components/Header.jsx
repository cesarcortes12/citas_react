//crreamos una funcion que la exportamos a app.jsx

function Header(){

   

    return(
        //el md es como el media query la w es width 1/2 es como la mitad 
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto ">
            Seguimiento Pacientes {''} 
            <span className="text-indigo-600">Veterinaria</span>
        </h1>
    )
}

export default Header;
