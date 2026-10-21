function Inicio(){
    let CorreoElectrónico = document.getElementById("Usuario").value;
    let Contraseña = document.getElementById("Contraseña").value;
    
    alert("Usuario: " + CorreoElectrónico + "\nContraseña: " + Contraseña);

    if (CorreoElectrónico == "WindBlade@gmail.com" && Contraseña == "WindBlade2026") {
        alert("Bienvenidoooo");
        window.location = "index1.html"; 
    } else {
        alert("Usuario o Contraseña incorrectos"); 
    }


}


function Registro() {
    window.location = "registro.html";
}

function Registroparalocation(){
    window.location = "index1.html";

}

function regresoinicio(){
    window.location = "index.html";
}