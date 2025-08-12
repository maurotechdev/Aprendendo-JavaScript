function fusohorario (){

    var HoraBrazil = Number(document.getElementById("horaBrazil").value);

    if(HoraBrazil == 0 || isNaN(HoraBrazil)){
        alert("Preencha o campo correctamente...")
        document.getElementById("horaBrazil").focus();
        return;
    }

    if(HoraBrazil > 24){
        alert("Insere uma hora válida...");
        document.getElementById("horaBrazil").focus();
        return;
    }
    var resulthorario = HoraBrazil + 5;

    if(resulthorario >= 24){
        var resulthorario = resulthorario-24;
    }

    document.getElementById("apresentarHora").innerHTML = "Hora na França: " + resulthorario.toFixed(2);
    document.getElementById("apresentarHora").style.color = "blue";
}

    var HoraFranca = document.getElementById("horaFranca");
    HoraFranca.addEventListener("click", fusohorario); 