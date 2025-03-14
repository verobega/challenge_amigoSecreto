// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo")
    let nombreAmigo = inputAmigo.value;

    if (!nombreAmigo) {
        alert("Por favor, ingresa el nombre de un amigo");
        return;
    }
    amigos.push(nombreAmigo);
    console.log(amigos);
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

}