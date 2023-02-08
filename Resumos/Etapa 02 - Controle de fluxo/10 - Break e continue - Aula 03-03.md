<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Break e continue - Aula 03-03

### Resumo

`break` e `continue` são duas palavras-chave em JavaScript usadas para controlar a execução de loops.

##### Break

`break` é usado para interromper completamente a execução de um loop. Quando o comando `break` é encontrado dentro de um loop, ele para imediatamente a execução do loop e salta para a próxima instrução após o loop. Por exemplo:

```javascript
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
```

Neste exemplo, quando `i` é igual a 5, o comando `break` é ativado e a execução do loop é interrompida. A saída será 0, 1, 2, 3, 4.

##### Continue

`continue` é usado para pular a iteração atual de um loop e prosseguir para a próxima iteração. Por exemplo:

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
```

Neste exemplo, se `i` for par, o comando `continue` é ativado e a iteração atual é pulada. A saída será 1, 3, 5, 7, 9.
