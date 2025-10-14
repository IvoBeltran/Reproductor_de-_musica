// Se declaran las variables globales
const fondo = document.querySelector(".app");
const imgCaratula = document.querySelector("#foto-caratula");
const titulo = document.querySelector(".titulo-cancion");
const artista = document.getElementById("artista");
const btnAleatorio = document.getElementById("aleatorio");
const btnAnterior = document.querySelector("#ant");
const btnSiguiente = document.querySelector("#sig");
const audio = document.getElementById("audio");
const btnPlayPause = document.getElementById("play-pause");
const barraProgress = document.getElementById("progress");
const inicio = document.getElementById("inicio");
const fin = document.getElementById("fin");
const btnList = document.querySelector('#btn-lista');
const contenedorCanciones = document.getElementById("contenedor-canciones");
const btnRegreso = document.getElementById("btn-regreso");



// Se consulta al json para cargar las canciones al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
    fetch("canciones.json")

        .then(response => response.json())

        .then(data => {
            canciones = data

            

        })


        .catch(error => {
            console.error("Error al cargar el JSON:", error);

        });

})



// Se realiza la funcion para mostrar la cancion 
function mostraCanciones(indice) {
    const cancion = canciones[indice];

    // Agregamos la foto de la caratula de fondo del reproductor
    fondo.style.setProperty('--fondo-caratula', url('${cancion.caratula}'));

    // Se agrega la imagen de la caractula de la canción seleccionada en el objeto img
    imgCaratula.setAttribute('src', cancion.caratula);
    // Agregamos el nombre de la cación seleccionada al titulo del reproductor
    titulo.textContent = cancion.nombre
    // Agregamos el nombre del artista seleccionado de la cación en el h3 del artista 
    artista.textContent = cancion.artista
}