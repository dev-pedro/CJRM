<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O operador lógico not (!) - Aula 03-02

### Resumo

O operador lógico `!` (não) em JavaScript é usado para inverter o valor booleano de uma expressão. Se a expressão for verdadeira, o operador `!` retornará `false`, e se a expressão for falsa, o operador `!` retornará `true`. Por exemplo:

```javascript
const x = true;
console.log(!x); // output: false

const y = false;
console.log(!y); // output: true
```

O operador `!` é útil para verificar se uma expressão é falsa ao invés de verdadeira. Por exemplo:

```javascript
const isUserLogin = false;
if (!isUserLogin) {
  console.log("Você não está logado, faça login para continuar!");
}
```

Neste exemplo, a `isUserLogin` é falsa, então o operador `!` que esta antes da variável inverte o valor booleano para `true`, o que faz com que a mensagem `Você não está logado, faça login para continuar!` seja exibida.
