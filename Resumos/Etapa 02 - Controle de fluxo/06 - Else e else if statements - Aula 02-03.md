<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Else e else if statements - Aula 02-03

### Resumo

Além do `if`, você também pode usar as estruturas `else` e `else if` em JavaScript para fornecer ações alternativas ou adicionais a serem executadas caso a condição original seja falsa. Aqui está um exemplo de como usar `else if`:

```javascript
let number = 0;
if (number > 0) {
  console.log("O número é positivo");
} else if (number < 0) {
  console.log("O número é negativo");
} else {
  console.log("O número é zero");
}
```

Neste exemplo, a condição verifica primeiro se `number` é maior que 0. Se for verdadeira, a mensagem "O número é positivo" será exibida. Se for falsa, a condição `number < 0` será verificada. Se for verdadeira, a mensagem "O número é negativo" será exibida. Se ambas as condições forem falsas, a mensagem "O número é zero" será exibida.

A estrutura `else` pode ser usada sem um `else if` e é executada quando nenhuma das condições anteriores for verdadeira. Aqui está um exemplo:

```javascript
let number = 10;
if (number % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}
```

Neste exemplo, a condição verifica se `number` é par (resto da divisão por 2 é igual a 0). Se for verdadeira, a mensagem "O número é par" será exibida. Se for falsa, a mensagem "O número é ímpar" será exibida.
