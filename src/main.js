
let imagenes = [
    {
        "url": "./src/img/img1.webp",
        "nombre": "1 Datos curioso de la informática",
        "descripcion": "Se cree que el primer virus informático lanzado en el mundo era un virus de sector de arranque, que se creó en el año 1986 por los hermanos Farooq Alvi. Fue diseñado por ellos para proteger sus trabajos de investigación."

    },
    {
        "url": "./src/img/img2.webp",
        "nombre": "2 Datos curioso de la informática",
        "descripcion": "Al principio los discos duros de computadoras personales  cuya capacidad era de  20 MB  costaban  alrededor de $800 dólares. Hoy en día, una unidad flash de 2 GB cuesta alrededor de $8 dólares o menos. Eso es una disminución de 100 veces en precio y un aumento de 100 veces en la capacidad."

    },
    {
        "url": "./src/img/img3.webp",
        "nombre": "3 Datos curioso de la informática",
        "descripcion": "Un ser humano normal parpadea 20 veces en un minuto, mientras que un usuario frente a una computadora parpadea sólo 7 veces por minuto!."

    },
    {
        "url": "./src/img/img4.jpg",
        "nombre": "4 Datos curioso de la informática",
        "descripcion": "El término “bug” se originó por una polilla en concreto, la que causó el mal funcionamiento del ordenador Mark III en 1947. Un momento para la historia de la informática."

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}