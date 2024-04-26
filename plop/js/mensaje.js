


document.getElementById("submitBtn").addEventListener("click", function() {
    var correo = document.getElementById("correo").value;
    if (correo.trim() !== "") {
        mostrarAlerta("Instrucciones de restablecimiento de contraseña enviadas correctamente.", "success");
        setTimeout(function() {
            window.location.href = "login.html";
        }, 3000);
    } else {
        mostrarAlerta("Por favor ingrese su correo electrónico.", "error");
    }
});

function mostrarAlerta(mensaje, tipo) {
    var alerta = document.getElementById("alerta");
    alerta.textContent = mensaje;
    alerta.classList.remove("oculto");
    if (tipo === "success") {
        alerta.classList.add("success");
    } else if (tipo === "error") {
        alerta.classList.add("error");
    }
}
