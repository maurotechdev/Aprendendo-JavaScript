function dentrodaRegra (){

    var Estrada = Number(document.getElementById("estrada").value);
    var Condutor = Number(document.getElementById("condutor").value);

    if((isNaN(Estrada) || isNaN(Condutor))){
        alert("Preencha os campos correctamente");
        return;
    }
    if(Condutor <= Estrada){
        document.getElementById("apresentarVerificacao").textContent = "Sem Multa";        
    }else if (Condutor = (Estrada+(Estrada*0,2))){
        document.getElementById("apresentarVerificacao").textContent = "Multa Leve";
    }else{
        document.getElementById("apresentarVerificacao").textContent = "Multa Grave";
    }
}
var VerificarVelocidade = document.getElementById("verificarVelocidade");
VerificarVelocidade.addEventListener("click", dentrodaRegra);