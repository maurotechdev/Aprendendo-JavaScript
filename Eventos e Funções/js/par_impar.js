function parOUimpar (){
    var ValorparImpar = Number(document.getElementById("valorparImpar").value);

    if(isNaN(ValorparImpar)){
        alert("Informe um valor válido");
        return;
    }
    if(ValorparImpar % 2 == 0){
        document.getElementById("verificarValor").textContent = "O número "+ ValorparImpar+ " é par"
    }else{
        document.getElementById("verificarValor").textContent = "O número "+ ValorparImpar+ " é impar"
    }    
}
var Verificar = document.getElementById("verificar");
Verificar.addEventListener("click", parOUimpar);