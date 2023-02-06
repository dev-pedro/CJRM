<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# For loop - Aula 01-03

### Resumo

O `for` loop é uma estrutura de controle de fluxo em JavaScript que permite que você execute uma série de instruções repetidamente por um número definido de vezes. A sintaxe básica é a seguinte:

```javascript
for (inicialização; condição; incremento) {
  // código a ser executado
}
```

A inicialização define uma variável que será usada como contador e geralmente é definida como um valor inicial. A condição é uma expressão que é avaliada antes de cada iteração. Se a condição for verdadeira, as instruções dentro do loop serão executadas. Se for falsa, o loop será interrompido. O incremento define como o contador será modificado após cada iteração.

Aqui está um exemplo de como usar o `for` loop para imprimir os números de 0 a 9:

```javascript
for (let i = 0; i <= 10; i++) {
  console.log(i);//console mostra 0 a 10
}
```

Este loop inicializa a variável `i` como 0, verifica se `i` é menor ou igual a 10 antes de cada iteração e adiciona 1 a `i` após cada iteração.
