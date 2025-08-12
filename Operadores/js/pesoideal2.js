function pesoideal2 (){

var NomePessoa = document.getElementById("nomePessoa").value;
var Altura = Number(document.getElementById("altura").value);
var SexoMacho = document.getElementById("sexoMacho").checked;
var SexoFemia = document.getElementById("sexoFemia").checked;

if((NomePessoa == "") || (SexoMacho == false) && (SexoFemia == false)){
    alert("Nome ou Sexo não corresponde...");
    document.getElementById("nomePessoa").focus();
    return;
}

if((Altura == 0) || isNaN(Altura)){
    alert("Por favor insere a altura correctamente...");
    document.getElementById("altura").focus();
    return;
}

if(SexoMacho){
    var ResultPeso = (22 * Math.pow(Altura , 2)).toFixed(2);
}else{
    var ResultPeso = (21 * Math.pow(Altura , 2)).toFixed(2);
}

document.getElementById("apresentarPeso").innerHTML = NomePessoa + " o teu peso é de " + ResultPeso + " kg";
document.getElementById("apresentarPeso").style.color = "green";
}

var Calculo = document.getElementById("calculo");
Calculo.addEventListener("click", pesoideal2);

function limparcampos (){
    
    document.getElementById("nomePessoa").value = "";
    Number(document.getElementById("altura").value  = "");
    document.getElementById("sexoMacho").checked = false;
    document.getElementById("sexoFemia").checked = false;
    document.getElementById("apresentarPeso").innerHTML="";
    document.getElementById("nomePessoa").focus();
}
var Limpar = document.getElementById("limpar");
Limpar.addEventListener("click", limparcampos);