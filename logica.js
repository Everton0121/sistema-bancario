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
    // Obtém o valor digtado pelousuário e converte para decimal
    valor = parseFloat(document.getElementById('valor').value)
    // Verificar se o valor é válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido parça!")
        return
    }
    // verificar se o saldo é suficiete
    if (valor > saldo) {
        alert("Pá! tA pobre!Saldo Insuficiente")
        return
    }
    // Subtrai o valor do saldo 
    saldo -= valor
    
    // Atualizar o saldo
    atualizarSaldo()
    alert("Saque de R$ "+ valor.toFixed(2) + "  realizado com sucesso!")
}


