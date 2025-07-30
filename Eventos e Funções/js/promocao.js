function farmacia(){
    var Descricao = document.getElementById("descricao").value;
    var Valor = document.getElementById("valor").value;

    var Desconto = Math.floor((Number(Valor * 2).toFixed(2)))+ ".00";

    Descricao = document.getElementById("ApresentarMedicamento").textContent = "Medicamento: " + Descricao;
    Valor = document.getElementById("ApresentarPromocao").textContent = "Valor promocional de 2 peças: R$ " + Desconto; 
}
var Ref = document.getElementById("promocao");
Ref.addEventListener("click", farmacia);