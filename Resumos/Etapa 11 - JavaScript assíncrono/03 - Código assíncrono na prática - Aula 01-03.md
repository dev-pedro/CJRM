<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Código assíncrono na prática - Aula 01-03

### Resumo

### Código usado nesta aula

```javascript
console.log(1)
console.log(2)

setTimeOut(() => {
    console.log('função de callback executada')
}, 2000)

console.log(3)
console.log(4)
```

Esse código tem quatro chamadas de `console.log` e uma chamada de `setTimeout`.

As duas primeiras chamadas de `console.log` imprimem os valores 1 e 2 no console, respectivamente.

A chamada de `setTimeout` agenda a execução de uma função de callback para ser executada após um atraso de 2 segundos (2000 milissegundos). A função de callback é definida como uma função anônima que imprime a mensagem "função de callback executada" no console.

As duas últimas chamadas de `console.log` imprimem os valores 3 e 4 no console, respectivamente.

Quando o código é executado, as chamadas de `console.log` são executadas imediatamente e em ordem sequencial, sem aguardar a execução do `setTimeout`.

Após 2 segundos, a função de callback agendada pelo `setTimeout` é adicionada à Callback / Event Queue, aguardando a execução. Como as chamadas de `console.log` já foram concluídas, a pilha de execução fica vazia, e o JavaScript verifica se há algum callback na Callback / Event Queue a ser executado.

Quando o JavaScript encontra a função de callback agendada,a função de callback é adicionada à pilha de execução e executada, imprimindo a mensagem "função de callback executada" no console.

Em resumo, a sequência de eventos é a seguinte:

1. `console.log(1)` é executado e imprime "1" no console.
2. `console.log(2)` é executado e imprime "2" no console.
3. `setTimeout` é chamado e agenda a execução da função de callback após 2 segundos.
4. `console.log(3)` é executado e imprime "3" no console.
5. `console.log(4)` é executado e imprime "4" no console.
6. Após 2 segundos, a função de callback é adicionada à Callback / Event Queue.
7. Como a pilha de execução está vazia, a função de callback é executada e imprime "função de callback executada" no console.

Note que a função de callback só é executada após as chamadas de `console.log(3)` e `console.log(4)`, já que o `setTimeout` não bloqueia a execução sequencial do código. Isso é possível porque o `setTimeout` é uma função assíncrona que delega a execução da tarefa para a Web API do navegador, permitindo que o código principal continue a ser executado sem bloqueios.
