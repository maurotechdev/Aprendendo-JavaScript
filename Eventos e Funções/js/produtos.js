function promocional (){
    var Nomeproduto = document.getElementById("nomeproduto").value;
    var Precoproduto = parseFloat(document.getElementById("precoproduto").value);

    var valorPromocional = ((Precoproduto*2) + (Precoproduto/2)).toFixed(2)

    document.getElementById("PrecoPromocional").textContent = Nomeproduto + " pague 3 e leve por apenas R$ " + valorPromocional;

    valorPromocional= (Precoproduto/2).toFixed(2);

    document.getElementById("ReducaoPromocional").textContent = "Você economiza R$ " + valorPromocional + " na compra do(a) " + Nomeproduto;
}

    var btnOferta= document.getElementById("btnOferta");
    btnOferta.addEventListener("click", promocional);