
var respuesta=document.getElementById("mani");
var c = "camello";
var i = 3;

function elegir()
{
 do{
    if(respuesta.value == c)
    {
        alert("Lograste ver la imagen Felicidades !");
    }
    else
    {
        alert(" Game over ");
    } 
i++;
}while(i==3);

}
