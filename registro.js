const listaUsuarios = [];

function registrarUsuario() {
  const usuarioEncontrado = document.getElementById("usuarioRegistro").value;
  const contraseña = document.getElementById("passRegistro").value;
  const correo = document.getElementById("correoRegistro").value;
  const mensaje = document.getElementById("mensaje");
  const checkbox = document.getElementById("terminos");

  if (usuarioEncontrado === "" || contraseña === "" || correo === "" || !checkbox.checked) {
    mensaje.textContent = "ⓘ Por favor completa todos los campos para registrarte.";
    mensaje.style.color = "#ffffff";
    return;
  }

  const nuevoUsuario = {
    usuarioEncontrado: usuarioEncontrado,
    contraseña: contraseña
  };

  listaUsuarios.push(nuevoUsuario);

  mensaje.textContent = "ⓘ Has sido registrado en AgroNova.";
  mensaje.style.color = "#ffffff";

  document.getElementById("usuarioRegistro").value = "";
  document.getElementById("passRegistro").value = "";
  document.getElementById("correoRegistro").value = "";
}

function iniciarSesion() {
  const usuarioEncontrado = document.getElementById("usuarioLogin").value;
  const contraseña = document.getElementById("passLogin").value;
  const message = document.getElementById("message");

  let encontrado = false;

  for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].usuarioEncontrado === usuarioEncontrado && listaUsuarios[i].contraseña === contraseña) {
      encontrado = true;
      break; 
    }
  }

  if (encontrado) {
    window.location.href = "indexlogeado.html";
  } else {
    message.textContent = "ⓘ Usuario o contraseña incorrectos, o el usuario no existe.";
    message.style.color = "#ffffff";
  }
}

function mostrarLogin(){
    document.getElementById("divregistro").classList.add("oculto");
    document.getElementById("divregistro").classList.remove("visible");
    document.getElementById("divinicio").classList.remove("oculto");
    document.getElementById("divinicio").classList.add("visible");
}

function mostrarRegistro(){
    document.getElementById("divinicio").classList.add("oculto");
    document.getElementById("divinicio").classList.remove("visible");
    document.getElementById("divregistro").classList.remove("oculto");
    document.getElementById("divregistro").classList.add("visible");
}