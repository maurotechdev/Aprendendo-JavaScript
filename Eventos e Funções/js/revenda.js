function revendaAutomovel(){
    var Modelo = document.getElementById("modelo").value;
    var Preco = parseFloat (document.getElementById("preco").value);

    var percentagem50 =  (Preco*0.5);
    var percentagem = (percentagem50 + Preco).toFixed(2);

    document.getElementById("ApresentarTitulo").textContent = "Modelo do carro: "+ Modelo;
    
    document.getElementById("ApresentarPreco50").textContent = "Percentagem Adicionada: "+ percentagem50;

    document.getElementById("ApresentarPreco").textContent = "Valor a pagar: "+ percentagem;
}

var calc = document.getElementById("calcular");
calc.addEventListener("click", revendaAutomovel);