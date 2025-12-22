const formulario = document.querySelector('.Formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('correo');




formulario.addEventListener('submit', function(evento){

  evento.preventDefault();

if(inputNombre.value === ""){
  inputNombre.style.border="3px solid red";
  alert("este campo es obligatorio");
  return;


}else{

  inputNombre.style.border="3px solid green";

}

const nuevoAlumno =  {

  nombre : inputNombre.value,
  email : inputEmail.value,
  id : Date.now()

  }
  console.log(nuevoAlumno);











