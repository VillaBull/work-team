var coordenadas = document.getElementById("coor").addEventListener("click", coordenada);
var exi = document.getElementById("exit").addEventListener("click", exit1);
var tec = document.getElementById("teclas").addEventListener("click", teclasi);
var p = document.getElementById("contexto").getContext("2d");

function sa()
{
    document.getElementById("uno").value= "";
    document.getElementById("dos").value = "";
    document.getElementById("color_C").value = "";
    document.getElementById("ventana_C").style.display="none";
}

function exit1()
{
    document.getElementById("ventana").style.display="none";
}

function dib(color, x1, y1, x2, y2, l)
{
    l.beginPath();
    l.strokeStyle = color;
    l.moveTo(x1, y1);
    l.lineTo(x2, y2);
    l.stroke();
    l.closePath();
}

function coordenada()
{
    alert("Recuerda que el Canvas es de 400x400!");

    document.getElementById("ventana").style.display="block";

    boton_C = document.getElementById("button_C");
    x1 = document.getElementById("xUnoP");
    y1 = document.getElementById("yUnoP");
    x2 = document.getElementById("xUnoS");
    y2 = document.getElementById("yUnoS");
    colorcin = document.getElementById("coloron");

    boton_C.addEventListener("click", vamos)

    function vamos()
    {
        dib(colorcin.value, xUnoP.value, yUnoP.value, xUnoS.value, yUnoS.value, p);
        
        xUnoP.value= "";
        yUnoP.value= "";
        xUnoS.value= "";
        yUnoS.value= "";
        coloron.value = "";
    }
}
function teclasi()
{
    document.getElementById("ventana_C").style.display="block";
    ye = document.getElementById("ya");
    ye.addEventListener("click", dibuj);

function dibuj()
    {
        var xT = document.getElementById("uno");
        var yT = document.getElementById("dos");
        var yT1 = parseInt(yT.value);
        var xT1 = parseInt(xT.value);

        alert("Presiona Cualquier Tecla de Movimiento y mira la magia!")
        document.addEventListener("keydown", khe);
        dib("black", xT1, yT1, xT1 + 1, yT1 + 1, p);

function khe(vari)
        {
            var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
            var c= document.getElementById("color_C").value;
            var xT = document.getElementById("uno");
            var yT = document.getElementById("dos");
            var yT1 = parseInt(yT.value);
            var xT1 = parseInt(xT.value);
            var avance = 10;
            var avance = parseInt(avance);

        switch(vari.keyCode)
        {
            case teclas.LEFT:
                dib(c, xT1, yT1, xT1 - avance, yT1, p);
                xT.value = parseInt(xT.value) - parseInt(avance); 
            break;

            case teclas.UP:
                dib(c, xT1, yT1, xT1, yT1 - avance, p);
                yT.value = parseInt(yT.value) - parseInt(avance);
            break;

            case teclas.RIGHT:
                dib(c, xT1, yT1, xT1 + avance, yT1, p)
                xT.value= parseInt(xT.value) + parseInt(avance);
            break;

            case teclas.DOWN:
                dib(c, xT1, yT1, xT1, yT1 + avance, p)
                yT.value = parseInt(yT.value) + parseInt(avance);
            break;
        }

        }
    }
}