var coordenadas = document.getElementById("coor").addEventListener("click", coordenada);;
var exi = document.getElementById("exit").addEventListener("click", exit1);
var tec = document.getElementById("teclas").addEventListener("click", teclasi);
var p = document.getElementById("contexto").getContext("2d");

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
        console.log("khe");
        document.addEventListener("keydown", khe);

function khe(vari)
        {
        console.log("ja!");
        var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};

        var p = document.getElementById("contexto").getContext("2d");
        var colorci_C =document.getElementById("color_C");
        var x = document.getElementById("uno");
        var xy = x.value;
        var y = document.getElementById("dos");
        var yx = y.value;
        var avance = 10;

        switch(vari.keyCode)
        {
            case teclas.LEFT:
                dib(colorci_C.value, xy, yx, xy - avance, yx, p);
                xy = xy - avance;
            break;
            case teclas.UP:
                dib(colorci_C.value, xy, yx, xy, yx - avance, p);
                yx = yx - avance;
            break;
            case teclas.RIGHT:
                dib(colorci_C.value, xy, yx, xy + avance, yx, p);
                xy = xy + avance;
            break;
            case teclas.DOWN:
                dib(colorci_C.value, xy, yx, xy, yx + avance, p);
                yx = yx + avance;
            break;
        }

        }
    }
}