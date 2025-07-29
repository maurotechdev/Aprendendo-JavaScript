// Declara a função mostrar Dados
function mostrarDados()
{
    // Obtém os valores dos campos de entrada
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    // Exibe os valores na div com id "resposta"
    document.getElementById("resposta").innerHTML = "Nome: " + nome; 
    document.getElementById("apresentar").innerHTML = "Email: " + email; 
}


// registra para o botão "mostrar" um ouvinte para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarDados);