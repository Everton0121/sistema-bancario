// variavel que armazena o saldo inicial da conta
let saldo = 0

// funçao para atualizar o saldo na tela
function atualizarSaldo() {
    // seleciona o elemento do saldo e atualizar o texto com o valor formado
    document.getElementById('saldo').textContent = saldo.toFixed(2)
}
// funcao que realiza o deposito
function depositar() {
    // obtem o valor digitado pelo usuario e converte para o numero decimel
    valor = parseFloat(document.getElementById('valor').value)
    //verifica se o valor e valido (maior que 0 e numerico)
    if (isNaN(valor) || valor <= 0) {
        // exibe alerta se o valor for invalido 
        alert("Por favor meu amigo, insira um numero valido! ")
        return // interrompe a excucao da funcao 
        
    }
    // adicionar valor ao saldo
    saldo += valor 
    //atualizar o saldo na tela 
    atualizarSaldo()

    //exibir uma mensagem confirmando o deposito
    alert("valor transferido com sucesso! Deposito R$" + valor.toFixed(2))

}

// funçao que realiza o saque 

function sacar() {
    // obtem o valor digtado pelo usuario e converte para decimal 
    valor = parseFloat(document.getElementById('valor').value)
    // verificar se o valor e valido 
    if (isNaN(valor) || valor <= 0)
    alert("por favor, insira um valor valido para sacar!")
    return
}
//verificar se o saldo e suficiente
    if  (valor > saldo) {
    alert("Bah! ta pobrinho kkkkk!Saldo insuficiente")
    return
    }
//subtrai o valor do saldo
saldo -= valor

// atualizar o saldo
atualizarSaldo()
alert("saque de R$" + valor.toFixed(2) + "  realizado com sucesso!")



