//Receber o nome do que se vai pagar
// Receber o valor da conta que se paga
// Registrar todas as contas
// Apresentar todos os registros de conta
// Apresentar o número total de contas a pagar e o valor
let Resposta = "";
let ValorTotal = 0;
let QtdContas = 0;
function ContasdoMes (){
    let Descricao = document.getElementById("descricao").value;
    let Valor = Number(document.getElementById("valor").value);


        if((Descricao=="")){
            alert("Preencha correctamente o campo DESCRIÇÃO");
            document.getElementById("descricao").focus();
            return;
        }
        
        if(Valor==0 || isNaN(Valor)){
            alert("Preencha correctamente o campo VALOR");
            document.getElementById("valor").focus();
            return;
        }
        
        Resposta = Resposta + Descricao+" - R$: " + Valor.toFixed(2)+"\n";
       
        document.getElementById("exibaRegistro").textContent= Resposta;

        document.getElementById("descricao").value="";
        document.getElementById("valor").value="";
        document.getElementById("descricao").focus();
        
        QtdContas++;
        ValorTotal= ValorTotal+Valor;
        
        document.getElementById("exibaTotal").textContent="Em "+QtdContas+" contas deves reservar um total de R$: " + ValorTotal.toFixed(2);

}
let BtnConta = document.getElementById("btnConta");
BtnConta.addEventListener("click", ContasdoMes);