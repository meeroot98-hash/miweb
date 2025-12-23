const formulario = document.querySelector('.Formulario');
const inputNombre = document.getElementById('nombre');
const inputCorreo = document.getElementById('correo');
const contenedor = document.getElementById('contenedor');

let listaAlumnos = JSON.parse(localStorage.getItem('alumnosDB')) || [];
listaAlumnos.forEach(alumno => agregarTarjeta(alumno));

formulario.addEventListener('submit',function(evento){

evento.preventDefault();



const alumno ={

  nombre : inputNombre.value,
  correo : inputCorreo.value,



};
agregarTarjeta(alumno);

listaAlumnos.push(alumno);

localStorage.setItem('alumnosDB', JSON.stringify(listaAlumnos));
console.table(listaAlumnos);
formulario.reset();

})

function agregarTarjeta (alumno){

  const tarjeta = document.createElement('div');
  tarjeta.className = 'tarjetaAlumno';

  tarjeta.innerHTML = `
        <h3>${alumno.nombre}</h3>
        <p>${alumno.correo}</p>
        `;

        contenedor.appendChild(tarjeta);


}









