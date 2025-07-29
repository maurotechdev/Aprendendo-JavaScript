function locadora()
{
    var Titulo = document.getElementById("titulo").value;
    var Duracao = document.getElementById("duracao").value;

    // Exibe os valores na div com id "respoder..."
    document.getElementById("responderTitulo").textContent = "O título do filme é: " + Titulo;
    
    document.getElementById("responderDuracao").textContent = "A duração do filme" + Titulo + " é de: " + Math.floor(Duracao/60) +" e " + Duracao%60 + " minutos";
}

// registra para o botão "calcular" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função locadora

var Calcular = document.getElementById("calcular");
Calcular.addEventListener("click", locadora);