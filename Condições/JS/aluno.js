function MediaAluno() {
  var nomeAluno = document.getElementById("nomeAluno").value;
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);

  var resultNota = (nota1 + nota2) / 2;
    document.getElementById("NotaFinal").textContent = "Média: " + resultNota.toFixed(1);
  if (resultNota >= 7.0) {
    document.getElementById("resultado").textContent =
      "Parabens " + nomeAluno + ", você foi aprovado(a)!";
    document.getElementById("resultado").style.color = "green";
  }else if((resultNota >= 4) && (resultNota<7)){
    document.getElementById("resultado").textContent= "Ohhh... "+ nomeAluno + ", você foi ao recurso.";
    document.getElementById("resultado").style.color ="green";
  }else {
    document.getElementById("resultado").textContent =
      "Ops... " + nomeAluno + ", você foi reprovado(a).";
    document.getElementById("resultado").style.color = "red";
  }
}
var Enviar = document.getElementById("enviar");
Enviar.addEventListener("click", MediaAluno);