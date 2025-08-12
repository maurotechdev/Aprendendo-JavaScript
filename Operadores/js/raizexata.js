    function raizquadrada (){
    
    var ValorRaiz = Number(document.getElementById("valorRaiz").value);

    var ResultRaiz= Math.sqrt(ValorRaiz);

    if(ResultRaiz == Math.floor(ResultRaiz) ){
        
        document.getElementById("apresentarRaiz").textContent = "Raíz quadrada de " + ValorRaiz + " é " + ResultRaiz;
    
    }else{
    
        document.getElementById("apresentarRaiz").textContent = "Não existe raíz quadrada exata de " + ValorRaiz;
    
    }


}

    var CalculoRaiz = document.getElementById("calculoRaiz");
    CalculoRaiz.addEventListener("click" , raizquadrada);