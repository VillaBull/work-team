//Jalando los botones de los botones principales y las ventanas emergentes
var canvas = document.getElementById("contexto").getContext("2d");
var ventana1 = document.getElementById("ventana");
var coordenadas = document.getElementById("coor").addEventListener("click", ventanaY); //Boton
var te_clas = document.getElementById("teclas").addEventListener("click", ventanaX); //Boton

//jalando los inputs y botones de la primer ventana emergente
var salir1 = document.getElementById("exit").addEventListener("click", exit1); //boton_salida
var punto_x = document.getElementById("xUnoP");
var punto_y = document.getElementById("yUnoP");
var punto_x2 = document.getElementById("xUnoS");
var punto_y2 = document.getElementById("yUnoS");
var color = document.getElementById("coloron");
var dibujar = document.getElementById("button_C").addEventListener("click", coorde); //boton trazar linea

//jalando los inputs y botones de la segunda ventana
var ventana2 = document.getElementById("ventana_C");
var salir2 = document.getElementById("clsb").addEventListener("click", exit2); //boton para salir
var puntoPartidaX = document.getElementById("uno");
var puntoPartidaY = document.getElementById("dos");
var colorC = document.getElementById("color_C");
var dibuja = document.getElementById("ya").addEventListener("click", teclado); // boton para empezar a dibujar
var avance = 10;
avance = parseInt(avance);

//definiedo libreria de datos

var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

//definiendo las  funciones generales

function exit1()
{
    document.getElementById("ventana").style.display="none";
}

function exit2()
{
    document.getElementById("ventana_C").style.display="none";
    document.getElementById("uno").value = "";
    document.getElementById("dos").value = "";
    document.getElementById("color_C").value = "";
}

function ventanaY()
{
    alert("Recuerda que el Canvas es de 400x400!");
    document.getElementById("ventana").style.display="block";
}

function ventanaX()
{
    document.getElementById("ventana_C").style.display="block";
}

function coorde()
{
    function dibujar(p, x1, y1, x2, y2, c)
{
    p.beginPath();
    p.strokeStyle = c;
    p.moveTo(x1, y1);
    p.lineTo(x2, y2);
    p.stroke();
    p.closePath();
}
    dibujar(canvas, punto_x.value, punto_y.value, punto_x2.value, punto_y2.value, color.value); 

    document.getElementById("xUnoP").value = "";  
    document.getElementById("yUnoP").value = "";  
    document.getElementById("xUnoS").value = "";  
    document.getElementById("yUnoS").value = "";  
    document.getElementById("coloron").value = "";  
}

function teclado()
{
    alert("Presiona Cualquier Tecla Direccional y Mira La Magia ;)")
    document.addEventListener("keydown", hagase);

    canvas.beginPath();
    canvas.strokeStyle = "black";
    canvas.moveTo(puntoPartidaX.value, puntoPartidaY.value);
    canvas.lineTo(parseInt(puntoPartidaX.value) + 1, parseInt(puntoPartidaY.value) + 1);
    canvas.stroke();
    canvas.closePath();
}

function hagase(varia)
{
    function dibujar(p, x1, y1, x2, y2, c)
{
    p.beginPath();
    p.strokeStyle = c;
    p.moveTo(x1, y1);
    p.lineTo(x2, y2);
    p.stroke();
    p.closePath();
}

    switch (varia.keyCode)
    {
    case teclas.LEFT:
        dibujar(canvas, puntoPartidaX.value, puntoPartidaY.value, puntoPartidaX.value - avance, puntoPartidaY.value, colorC.value);
        puntoPartidaX.value = parseInt(puntoPartidaX.value) - avance;
    break;

    case teclas.UP:
        dibujar(canvas, puntoPartidaX.value, puntoPartidaY.value, puntoPartidaX.value, puntoPartidaY.value - avance, colorC.value);
        puntoPartidaY.value = parseInt(puntoPartidaY.value) - avance;
    break;

    case teclas.RIGHT:
        dibujar(canvas, puntoPartidaX.value, puntoPartidaY.value, parseInt(puntoPartidaX.value) + avance, puntoPartidaY.value, colorC.value);
        puntoPartidaX.value = parseInt(puntoPartidaX.value) + avance;
    break;

    case teclas.DOWN:
        dibujar(canvas, puntoPartidaX.value, puntoPartidaY.value, puntoPartidaX.value, parseInt(puntoPartidaY.value) + avance, colorC.value);
        puntoPartidaY.value = parseInt(puntoPartidaY.value) + avance;
    break;
    }
}                  