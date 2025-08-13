function exibirsaque (){
    var ValorSaque = Number(document.getElementById("valorSaque").value);
    if(ValorSaque<10){
        alert("Não é possível sacar este valor");
        document.getElementById("valorSaque").focus();
        return;
    }
    var ResultSaque = Math.floor(ValorSaque/100); 
    document.getElementById("nota100").textContent = "Nota de 100 R$: " + ResultSaque;

    ResultSaque = Math.floor((ValorSaque%100)/50);
    document.getElementById("nota50").textContent = "Nota de 50 R$: " + ResultSaque;

    ResultSaque = Math.floor((ValorSaque%50)/10);
    document.getElementById("nota10").textContent = "Nota de 10 R$: " + ResultSaque;

}
var Saque_btn = document.getElementById("saque_btn");
Saque_btn.addEventListener("click", exibirsaque); 