<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Operadores lógicos && e || - Aula 02-04

### Resumo

Em JavaScript, os operadores lógicos `&&` e `||` são usados para combinar condições e determinar o resultado lógico final.

##### Operador &&

O operador `&&` (AND lógico) retorna verdadeiro se ambas as condições forem verdadeiras e falso caso contrário. Aqui está um exemplo:

```javascript
let x = 5;
let y = 10;
if (x < 10 && y > 5) {
  console.log("Ambas as condições são verdadeiras");
} else {
  console.log("Uma das condições é falsa");
}
```

Neste exemplo, ambas as condições são verdadeiras, então a mensagem "Ambas as condições são verdadeiras" será exibida.

##### Operador ||

O operador `||` retorna `true` se pelo menos uma das condições for verdadeira e `false` somente se ambas as condições forem falsas. Por exemplo:

```javascript
let x = 5;
let y = 10;
if (x < 10 || y < 5) {
  console.log("Pelo menos uma das condições é verdadeira");
} else {
  console.log("Ambas as condições são falsas");
}
```

Neste exemplo, a condição `x < 10` é verdadeira, então a mensagem "Pelo menos uma das condições é verdadeira" será exibida.
