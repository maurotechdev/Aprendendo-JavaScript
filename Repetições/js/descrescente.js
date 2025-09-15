function numerodecrescente (){
    var Decrescente = Number(document.getElementById("decrescente").value);
if(isNaN(Decrescente)){
    alert("Valor incorreto");
    return;
}
    var resultdesc="";
    while(Decrescente>0){
        
        resultdesc = resultdesc + Decrescente+ " - ";
        Decrescente--;
    }
    if (!(Decrescente>0)){
        resultdesc= resultdesc + Decrescente+ " . ";
    }
    document.getElementById("apresentardesc").textContent= resultdesc;
}
var BtnMostrar = document.getElementById("btnMostrar");
BtnMostrar.addEventListener("click", numerodecrescente);