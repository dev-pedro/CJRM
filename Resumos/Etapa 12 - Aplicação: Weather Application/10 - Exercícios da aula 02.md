<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Exercícios da aula 02

### Resumo

### Código Deste Exercício

HTML:

```html
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Exercício 34</title>
</head>
<body>
  <script src="./app.js"></script>
</body>
</html>
```

Javascript:

```javascript
/*
  01

  - Implemente uma função que recebe uma string por parâmetro e retorna a 
    string invertida;

    Exemplos: 
      - Se '123' é recebido por parâmetro, '321' deve ser retornado;
      - Se 'abc' é recebido por parâmetro, 'cba' deve ser retornado;

  - Após implementar a função, implemente outra versão da função. Essa 2ª 
    versão deve fazer o mesmo que a função anterior faz, mas de forma diferente.
*/

/*
  02

  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 83, 91, 27, 33]
let foundNumber = false
numbers.forEach(number => {
  if (number === 15) {
   foundNumber = true
  }
})

console.log(foundNumber)

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/
```
