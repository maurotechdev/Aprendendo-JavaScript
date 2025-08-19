function multiplicacao (){
    var Numero2 = Number(document.getElementById("numero2").value);
    var Comeco = document.getElementById("comeco").value;
    var Termino = Number(document.getElementById("termino").value);

    if(isNaN(Numero2)||Numero2==0){
        alert("Insira os dados corretamente!")
        return;
    }

    var Resultado = "";

    for(var i=Comeco; i<=Termino; i++ ){

        Resultado = Resultado + Numero2 + " X " + i + " = "+ Numero2 * i + "\n";
    }
    document.getElementById("apresentarTabuada2").textContent = Resultado;
}
var BtnTabuada2 = document.getElementById("btnTabuada2");
BtnTabuada2.addEventListener("click", multiplicacao);