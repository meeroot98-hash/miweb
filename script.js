const formularioLogin = document.querySelector('.Formulario');

formularioLogin.addEventListener('submit',function(evento){
    evento.preventDefault();
    const user = document.getElementById('user').value;
    const pass = document.getElementById('contraseña').value;

    // Validación simple (luego esto lo hará Java con una base de datos)
    if (user === "admin" && pass === "1234") {
        localStorage.setItem('estaLogueado', 'true'); // Guardamos la sesión
        window.location.href = "admin.html"; // Redirigimos
    } else {
        alert("Credenciales incorrectas");
    }
});











