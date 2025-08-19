function temponoparque (){

    var PagarParque = Number(document.getElementById("pagarParque").value);
    
    const trinta = 30;
    const secenta = 60;
    const centoevinte = 120;

    if(PagarParque < 1){
        document.getElementById("minutonoParque").innerHTML = "Valor Insuficiente";
        document.getElementById("minutonoParque").style.color= "red";
        return;
    }

    if((PagarParque >= 1) && (PagarParque < 1.75)){
        
        var ResultTroco = (PagarParque-1).toFixed(2);
        
        document.getElementById("minutonoParque").textContent= "Tempo: " + (trinta)+ " min";
        document.getElementById("troco").textContent= "Troco: R$ " + ResultTroco;

    }else if((PagarParque>= 1.75) && (PagarParque<3)){
        
        ResultTroco = (PagarParque-1.75).toFixed(2);

        document.getElementById("minutonoParque").textContent= "Tempo: " + (secenta)+ " min";
        document.getElementById("troco").textContent= "Troco: R$ " + ResultTroco;

    }else if(PagarParque>=3){
        
        ResultTroco = (PagarParque-3).toFixed(2);
        
        document.getElementById("minutonoParque").textContent= "Tempo: " + (centoevinte)+ " min";
        document.getElementById("troco").textContent= "Troco: R$ " + ResultTroco;
    }
        if(ResultTroco == 0){
        document.getElementById("troco").textContent= "";
    }
}
var VerTemponoParque = document.getElementById("vertemponoParque");
VerTemponoParque.addEventListener("click", temponoparque);