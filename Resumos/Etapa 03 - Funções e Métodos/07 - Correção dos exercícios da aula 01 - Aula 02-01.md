<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 - Aula 02-01

### Resumo

```javascript
function titleLesson(numLesson = 0) {
  console.log(`***** Exercício - ${numLesson} *****`);
}
titleLesson(01);
/*
01

- Utilizando function declaration, implemente uma função que recebe 2 números  
por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.
*/
/**Esta declaração de função recebe dois numeros por parâmetros e retorna a multiplicação entre eles.
 */
function multiply(num1 = 1, num2 = 0) {
  return num1 * num2;
}
console.log(multiply(2, 6));

titleLesson(02);
/*
02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
  **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.
    */
/**Esta função expressa retorna a divisão de dois numeros que são recebidos por argumento*/
let divide = function (num1 = 1, num2 = 1) {
  return num1 / num2;
};
console.log(divide(16, 2));

titleLesson(03);
/*
03

  - Implemente uma função que apenas exibe no console o valor recebido por  
  parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().
  
  "Esta é a Xª vez que essa string é exibida."
*/
/**Esta função exibe sete vezes uma mensagem juntamente com o valor passado a ela por argumento */
function showValue(value = 'Você deve passar um valor como argumento') {
  console.log(value)
}
for (let i = 1; i <= 7; i++) {
  showValue(`Esta é a ${i}ª vez que essa string é exibida.`)
}


titleLesson(04);
/*
04

  - Comente o código acima, de forma que a string não seja mais exibida no  
  console;
  - Implemente uma função que retorna um novo array com as strings do array  
  "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
  função.
  */
function arrayUpperCase(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const wordUpperCase = millennialWords[i].toUpperCase()
    newArray.push(wordUpperCase);
  }
  return newArray;
}
const millennialWords = [
  "lol",
  "yolo",
  "troll",
  "stalkear",
  "selfie",
  "influencer",
  "crush",
  "fitness",
  "hater",
  "bae",
  "random",
  "kawaii",
  "outfit",
  "mood",
  "fail",
];

console.log(arrayUpperCase(millennialWords));

titleLesson(05);
/*
05

- Implemente uma função que retorna se um número é positivo;
- Use essa função para descobrir quantos números positivos o array 
  "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.
  
  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."
  */
 /**Esta função verifica um número passado por argumento se ele é positivo ou negativo */
function isNumberPositive(num = 0) {
  return num >= 1
}
const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];

const totalItemArray = randomNumbers.length;
let positiveNumbers = [];
let negativeNumbers = [];

for (let i = 0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i];
  isNumberPositive(number)
    ? positiveNumbers.push(number)
    : negativeNumbers.push(number);

  /* if (isNumberPositive(number)) {
    positiveNumbers.push(number);
  } else {
    negativeNumbers.push(number);
  } */
}

console.log(
  `O array "randomNumbers" possui ${totalItemArray} números, sendo ${positiveNumbers.length} positivos e ${negativeNumbers.length} negativos.`
);

titleLesson(06);
/*
 06

 - Descomente a invocação da função abaixo e implemente-a;
 - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
    - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.
*/

const getOddNumbers = function (arrayNumbers = []) {
  let oddArray = []

  for (let i = 0; i < arrayNumbers.length; i++) {
    const number = arrayNumbers[i]//pega um número durante a iteração no array
    const isNumberNegative = number % 2 != 0 // verifica se o numero é impar

    if(isNumberNegative){
      oddArray.push(number)
    }
  }
  return oddArray
}

const oddNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42])

console.log(oddNumbers)

titleLesson(07);
/*
07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () {
    return "Plymouth";
  },
  function () {
    return "é";
  },
  function () {
    return "uma";
  },
  function () {
    return "cidade";
  },
  function () {
    return "fantasma";
  },
  function () {
    return "localizada";
  },
  function () {
    return "na";
  },
  function () {
    return "ilha";
  },
  function () {
    return "de";
  },
  function () {
    return "Montserrat,";
  },
  function () {
    return "um";
  },
  function () {
    return "território";
  },
  function () {
    return "ultramarino";
  },
  function () {
    return "do";
  },
  function () {
    return "Reino";
  },
  function () {
    return "Unido";
  },
  function () {
    return "localizado";
  },
  function () {
    return "na";
  },
  function () {
    return "cadeia";
  },
  function () {
    return "de";
  },
  function () {
    return "Ilhas";
  },
  function () {
    return "de";
  },
  function () {
    return "Sotavento";
  },
  function () {
    return "nas";
  },
  function () {
    return "Pequenas";
  },
  function () {
    return "Antilhas,";
  },
  function () {
    return "Índias";
  },
  function () {
    return "Ocidentais.";
  },
];

let frase = ''
for(let i = 0; i < functions.length; i++){
  const textoDaFunction = `${functions[i]()} `
  frase += textoDaFunction
}
console.log(frase)
```

Nestes exercícios comecei a aprender o uso de funções.
