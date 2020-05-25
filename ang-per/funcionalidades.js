var coordenadas = document.getElementById("coor").addEventListener("click", coordenada);;
var exi = document.getElementById("exit").addEventListener("click", exit1);

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
    p = document.getElementById("contexto").getContext("2d");

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