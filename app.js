// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los nombres
let amigos =[];

//Función para agregar un amigo

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    ///console.log(nombre);
    if(nombre === ""){
        alert("Por favor, ingresa un nombre");
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
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
   return; 
}

//Comprobar si el array está vacío

function comprobarArray(){
    if(amigos.length === 0){
        alert("No hay amigos en la lista");
    }
   return;
}

//Función para sortear un amigo

function sortearAmigo(){
    comprobarArray();
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = "El amigo secreto es :" + amigoSorteado;
    listaAmigos.innerHTML = "";   
    return false;
} 

function reiniciarSorteo(){
    amigos = [];
    document.getElementById("resultado").innerHTML = "";
    mostrarAmigos();
    return;
}