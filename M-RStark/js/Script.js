const MAXIMOS_INTENTOS = 10,
columnas = A, 
Segundos_espera_voltear_imagen= 1,
Nombre_imagen_oculta = "./1.jpeg";
new Vue({
    el: "#memoria",
    data: () => ({
        imagenes:[
        "./2.jpeg",
        "./3.jpeg",
        "./4.jpeg",
        "./5.jpeg",
        "./6.jpeg",
        "./7.jpeg",
        ],
        memorama: [],
        ultimascoodrnadas:{
            indicefile: null,
            indiceimagen: null,
        },
    })
})

