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
let isPlaying = true;



// Se consulta al json para cargar las canciones al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
    fetch("canciones.json")

        .then(response => response.json())

        .then(data => {
            canciones = data

            mostraCanciones(indiceActual)


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

// función para avanzar en la lista de canciones 
btnSiguiente.addEventListener("click", () => {
    if (aleatoria) {
        // Multiplicar por la longitud de la lista para obtener un rango de 0 hasta (longitud del arreglo)
        // Math.floor() redondea hacia abajo para obtener un índice válido
        const indiceAleatorio = Math.floor(Math.random() * (canciones.length));
        indiceActual = indiceAleatorio;
    } else {
        // Esto lo ponemos por si en indice llega al ultimo retorne al primero
        if (indiceActual === canciones.length - 1) [
            indiceActual = 0
        ]
        else {
            indiceActual++
        }
    }
    // Retornamos el valor de la funcion inical
    mostraCanciones(indiceActual);
    // REPRODUCIMOS LA CANCIÓN DESPUES DE ACTUALIZAR EL ÍNDICE O SI NO SE REPRODUCE LA CANCIÓN ANTERIOR EN EL ARREGLO AL CAMBIAR AL BOTÓN SEGUIENTE
    const cancion = canciones[indiceActual]
    // CAMBIAMOS LA CANCIÓN
    audio.setAttribute('src', cancion.cancion);

    audio.play()

    btnPlayPause.innerHTML = '<i class="bi bi-pause-fill"></i>'
    // MANTENEMOS EL BOOLEANO EN TRUE PARA QUE NO IMPORTE SI LA CANCIÓN ESTÁ PAUSADA O NO, SE REPRODUZCA SIEMPRE LA SIGUIENTE AL PRESIONAR EL BOTÓN DE NEXT
    isPlaying = true
})