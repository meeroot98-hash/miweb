const formulario = document.querySelector('.Formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const user = document.getElementById('user').value;
    const pass = document.getElementById('password').value;

    // 1. Traemos la lista de alumnos que guardamos en el Registro
    const listaAlumnos = JSON.parse(localStorage.getItem('alumnosGuardados')) || [];

    // 2. BUSCAMOS si existe un alumno que coincida con lo que el usuario escribió
    const alumnoEncontrado = listaAlumnos.find(alumno => 
        alumno.usuario === user && alumno.passWord === pass
    );

    // 3. VALIDACIÓN
    if (alumnoEncontrado) {
        localStorage.setItem('estaLogueado', 'true');
        localStorage.setItem('usuarioActual', user); // Guardamos quién entró
        window.location.href = "alumnos.html";
    } else {
        alert("Usuario o contraseña no encontrados. ¿Ya te registraste?");
    }
});











