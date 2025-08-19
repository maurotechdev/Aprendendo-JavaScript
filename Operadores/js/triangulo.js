function ladosdotriangulo (){
    
    var LadoA = document.getElementById("ladoA").value;
    var LadoB = document.getElementById("ladoB").value;
    var LadoC = document.getElementById("ladoC").value;

    if(((LadoA+LadoB)<=LadoC) || ((LadoB+LadoC)<=LadoA) || ((LadoC+LadoA)<=LadoB)){
        document.getElementById("podem_nao_formar").textContent = "Os lados podem formar um triângulo";
        if(LadoA==LadoB==LadoC){
            document.getElementById("tipoTriangulo").textContent= "Tipo: Equilátero";
        }else if(((LadoA==LadoB)!=LadoC)||(LadoA!=(LadoB==LadoC))||(LadoB!=(LadoA==LadoC))){
            document.getElementById("tipoTriangulo").textContent= "Tipo: Isósceles";
        }else if(LadoA!=LadoB!=LadoC){
            document.getElementById("tipoTriangulo").textContent= "Tipo: Escaleno";
        }
    }else{
        document.getElementById("podem_nao_formar").innerHTML = "Os lados não podem Formar";
        document.getElementById("podem_nao_formar").style.color= "red";
    }
    
}
var VerificarLados = document.getElementById("verificarLados");
VerificarLados.addEventListener("click", ladosdotriangulo);