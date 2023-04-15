<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Funções de callback - Aula 03-03

### Resumo

### Código usado nesta aula

```javascript
const getTodos = callback => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
    if (isRequestOk) {
      callback(null, request.responseText)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível receber os dados da API', null)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
  request.send()
}

console.log(1)
console.log(2)

getTodos((error, data) => {
  console.log('callback executado')

  if(error){
    console.log(error)
    return
  }

  console.log(data)

})

console.log(3)
console.log(4)
```

### Reforçando o Conceito de Callback - Conteúdo Extra Aula

Em JavaScript, uma função de callback é uma função que é passada como argumento para outra função e que será executada posteriormente, geralmente quando algum evento ocorrer ou quando uma operação assíncrona for concluída.

As funções de callback são muito utilizadas em JavaScript para lidar com eventos assíncronos, como solicitações de rede, manipulação de arquivos, interação com o usuário, entre outras. Quando uma operação assíncrona é iniciada, a função de callback é registrada para ser executada quando a operação for concluída.

Aqui está um exemplo simples de como usar uma função de callback em JavaScript:

```javascript
const minhaFuncao => (callback) {
  console.log('Executando minha função...');
  callback();
}

const minhaCallback => () {
  console.log('Executando minha callback...');
}

minhaFuncao(minhaCallback);
```

Nesse exemplo, a função `minhaFuncao` recebe uma função de callback como argumento e a executa posteriormente. A função `minhaCallback` é definida separadamente e passada como argumento para `minhaFuncao`.

Quando `minhaFuncao` é executada, ela imprime a mensagem "Executando minha função..." no console e, em seguida, executa a função de callback passada como argumento. Nesse caso, a função de callback `minhaCallback` imprime a mensagem "Executando minha callback..." no console.

É importante notar que a ordem em que as funções são executadas depende do fluxo de execução do programa. No exemplo acima, a função de callback é executada após a execução da função que a recebeu como argumento. No entanto, em outras situações, a função de callback pode ser executada antes ou simultaneamente à função que a chamou.
