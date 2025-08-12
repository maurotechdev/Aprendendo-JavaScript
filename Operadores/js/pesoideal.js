function pesoideal (){
    var NomePessoa = document.getElementById("nomePessoa").value;
    var Altura = document.getElementById("altura").value;
    var SexoMacho = document.getElementById("sexoMacho").checked;
    var SexoFemia = document.getElementById("sexoFemia").checked;

    
    if(NomePessoa == ""){
        document.getElementById("erroNome").innerHTML= "Por favor Preencha o campo Nome!"
        document.getElementById("erroNome").style.color= "red";
    }
    if (!(SexoMacho) && !(SexoFemia)){
        document.getElementById("erroSexo").innerHTML= "Por favor, selecione o seu sexo!"
        document.getElementById("erroSexo").style.color= "red";
    }
    if(Altura == ""){
        document.getElementById("erroAltura").innerHTML= "Não Inseriste a sua altura!"
        document.getElementById("erroAltura").style.color= "red";
        return;
    }
    
    if (SexoMacho) {
    
        var ResultPeso = (22 * Math.pow(Altura, 2)).toFixed(2);

    } else{
    
        var ResultPeso = (21 * Math.pow(Altura, 2)).toFixed(2);

    } 
        document.getElementById("apresentarPeso").textContent = NomePessoa + " o seu peso ideal é de " + ResultPeso + " kg";
}

var Calculo = document.getElementById("calculo");
Calculo.addEventListener("click", pesoideal);

function limparcampos (){
    
    location.reload();
    
}
var Limpar = document.getElementById("limpar");
Limpar.addEventListener("click", limparcampos);