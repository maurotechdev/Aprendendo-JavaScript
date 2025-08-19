function tabuadadamultiplicacao (){
    var Numero = Number(document.getElementById("numero").value);
    
    if(isNaN(Numero) || Numero==0){
        alert("Peencha corretamente o campo");
        document.getElementById("apresentarTabuada").focus();
        return;
    }
        var ResultNumero = 0; 
    
    for(var i = 1; i <= 12; i++){
        ResultNumero = ResultNumero + Numero + " x " + i + " = " + Numero * i +"\n";
    }
    document.getElementById("apresentarTabuada").textContent = ResultNumero;
}
var BtnTabuada = document.getElementById("btnTabuada");
BtnTabuada.addEventListener("click", tabuadadamultiplicacao);



