const formulario = document.querySelector('.registro');
const inputAlumno=document.getElementById('usuario');
const inputCorreo=document.getElementById('email');
const password = document.getElementById('pass');

//almacenado en el local storage
let listaAlumno = JSON.parse(localStorage.getItem('alumnosGuardados')) || [];
console.log("Cargado del storage:", listaAlumno);


formulario.addEventListener('submit',function(evento){
    evento.preventDefault();

const nuevoAlumno = {

usuario : inputAlumno.value,
correo : inputCorreo.value,
passWord:password.value

};

listaAlumno.push(nuevoAlumno);
//guardando alumno en el localstorage
localStorage.setItem('alumnosGuardados', JSON.stringify(listaAlumno));
/////////////////////////////////////
if (nuevoAlumno.usuario !== "" && nuevoAlumno.correo !== "") {
        
        alert("¡Registro exitoso! Redirigiendo...");

        // 3. REDIRECCIÓN: Así se cambia de página en JavaScript
        window.location.href = "alumnos.html"; 

    } else {
        alert("Por favor, llena todos los campos.");
    }

    formulario.reset();
});

console.table(listaAlumno);
formulario.reset();


