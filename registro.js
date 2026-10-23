const listaUsuarios = [];

function registrarUsuario() {
  const usuarioEncontrado = document.getElementById("usuarioRegistro").value;
  const contraseña = document.getElementById("passRegistro").value;
  const correo = document.getElementById("correoRegistro").value;
  const mensaje = document.getElementById("mensaje");

  if (usuarioEncontrado === "" || contraseña === "" || correo === "") {
    mensaje.textContent = "Por favor completa todos los campos para registrarte.";
    mensaje.style.color = "red";
    return;
  }

  const nuevoUsuario = {
    usuarioEncontrado: usuarioEncontrado,
    contraseña: contraseña
  };

  listaUsuarios.push(nuevoUsuario);

  mensaje.textContent = "¡Usuario registrado con éxito!";
  mensaje.style.color = "green";

  document.getElementById("usuarioRegistro").value = "";
  document.getElementById("passRegistro").value = "";
  document.getElementById("correoRegistro").value = "";
}

function iniciarSesion() {
  const usuarioEncontrado = document.getElementById("usuarioLogin").value;
  const contraseña = document.getElementById("passLogin").value;
  const mensaje = document.getElementById("mensaje");

  let encontrado = false;

  for (let i = 0; i < listaUsuarios.length; i++) {
    if (listaUsuarios[i].usuarioEncontrado === usuarioEncontrado && listaUsuarios[i].contraseña === contraseña) {
      encontrado = true;
      break; 
    }
  }

  if (encontrado) {
    document.getElementById("usuarioLogin").value = "";
    document.getElementById("passLogin").value = "";
    mensaje.textContent = "¡Inicio de sesión exitoso! Bienvenido.";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos, o el usuario no existe.";
    mensaje.style.color = "red";
  }
}

function mostrarLogin(){
    document.getElementById("divregistro").classList.add("oculto");
    document.getElementById("divinicio").classList.remove("oculto");
    document.getElementById("divinicio").classList.add("visible");
}

function mostrarRegistro(){
    document.getElementById("divinicio").classList.add("oculto");
    document.getElementById("divregistro").classList.remove("oculto");
    document.getElementById("divregistro").classList.add("visible");
}