//para crear las dependecias
//npm i -D tailwindcss postcss autoprefixer

//NOTA PARA CREAR LOS ARCHIVOS DE TAILWIND EN LA TERMINAL
// npx tailwindcss init -p




/** @type {import('tailwindcss').Config} */
export default {
  //en content van los archivos que hacen parte de la presentacion de l proyecto
  //basicamente es poner los archivos en donde vas a aplicar tailwind
  // los ** indica que a todo lo que este en esa carpeta y el *.jsx es para todos los archivos con esa extension
  content: ["index.html","./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [],
}

