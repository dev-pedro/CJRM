<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 02 da etapa 12 - Aula 01-01 e Aula 01-02

### Resumo

### Códigos Destes Exercícios

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
//vesão 1
const reverseString = (string = '') => string.split('').reverse().join('')

//vesão 2
const reverse = (string = '') =>
  string.split('').reduce((acc, letter) => letter + acc, '')

  //vesão 3
const reverseStringOther = (string = '') => {
  const array = string.split('')
  const newArray = []

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }

  return newArray.join('')
}

console.log(
  reverseString('123456'),
  reverseStringOther('123456'),
  reverse('123456')
)

/*
  02
  
  - Descubra o que o código abaixo está fazendo e refatore-o.
*/

const numbers = [5, 20, 7, 32, 47, 83, 91, 27, 33]
const foundNumber = numbers.includes(15)

// let foundNumber = false
// numbers.forEach(number => {
//   if (number === 15) {
//     foundNumber = true
//   }
// })

console.log(foundNumber)

/*
  03

  - Refatore o código da Weather Application implementado na última aula;
  - Dicas do que pode ser refatorado:
    - Substituir o if/else por um código mais elegante =D
    - Isolar a manipulação do DOM em pequenas funções de responsabilidade única.
*/
```
