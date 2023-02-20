<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Query selector & query selector all - Aula 01-07

### Resumo

O `querySelector` e `querySelectorAll` são métodos do DOM (Document Object Model) em JavaScript que permitem selecionar elementos HTML com base em um seletor CSS.

O método `querySelector` é usado para selecionar o primeiro elemento correspondente ao seletor CSS especificado. Ele retorna um objeto que representa o elemento HTML selecionado ou null se nenhum elemento for encontrado. Por exemplo, se quisermos selecionar o primeiro elemento `h1` em um documento, podemos usar o seguinte código:

```javascript
const primeiroH1 = document.querySelector('h1');
```

O método `querySelectorAll` é semelhante ao `querySelector`, mas em vez de selecionar apenas o primeiro elemento correspondente, ele retorna uma lista de todos os elementos correspondentes ao seletor CSS especificado. Essa lista é um objeto do tipo NodeList, que pode ser iterado com um loop ou transformado em um array usando o método `Array.from()`. Por exemplo, se quisermos selecionar todos os elementos `p` em um documento, podemos usar o seguinte código:

```javascript
const todosOsPs = document.querySelectorAll('p');
```

Esses métodos são muito úteis para manipular elementos HTML em JavaScript e podem ser combinados com outras funções do DOM, como o `addEventListener`, para adicionar comportamentos interativos aos elementos selecionados.
