// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres y si el sorteo ya se realizo
let amigos =[];
let sorteoRealizado = false; // Variable para controlar si ya se sorteó

//Función para agregar un amigo

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim();
    ///console.log(nombre);
    if(nombre === ""){
        alert("Por favor, ingresa un nombre");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    amigos.push(nombre);
    limpiarNombre();
    mostrarAmigos();
}   

//Función para limbiar caja de texto
function limpiarNombre(){
    let nombreIngresado = document.querySelector("#amigo");
    nombreIngresado.value = "";
    return;
// document.querySelector("#amigo").value = ""; ¡¡¡sirve para reducir el codigo!!!
}

//Función para mostrar los amigos en la lista
function mostrarAmigos(){
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
    
   return; 
}

//Comprobar si el array está vacío

function comprobarArray(){
    if(amigos.length === 0){
        alert("No hay amigos en la lista");
        return false;
    }
   return true;
}

//Función para sortear un amigo

function sortearAmigo(){
    comprobarArray();
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = "El amigo secreto es :" + amigoSorteado;
       
    document.getElementById("sortearAmigo").disabled = true; // Deshabilita el botón de agregar amigo
    
    sorteoRealizado = true; //Marcamos que el sorteo ya se hizo
    return;
} 

//Función para reiniciar el sorteo

function reiniciarSorteo(){
    amigos = [];
    sorteoRealizado = false;
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado
    document.getElementById("listaAmigos").innerHTML = ""; // Limpia la lista de nombres
    document.getElementById("sortearAmigo").disabled = false; // Habilita el botón de sorteo
}