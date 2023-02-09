<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 03 da etapa 02 - Aula 01-01

### Resumo

```javascript
let exercicioTitle = (numExercicio) => {
  console.log(`***** Exercício: ${numExercicio} *****`);
};

exercicioTitle(1);
/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
  */

console.log(!true, !false);

exercicioTitle(2);
/*
02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo"];

const hasAnimal = animals.includes("leão");
if (!hasAnimal) {
  console.log("Leão não existe no array animals.");
} else {
  console.log("Existe um leão no array animals.");
}

exercicioTitle(3);
/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.

  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43];

let sumNumber = 0;
const limit = 400
for (let i = 0; i < randomNumbers.length; i++) {
  sumNumber += randomNumbers[i];
  if (sumNumber > limit) {
    console.log(
      `A soma ultrapassou ${limit}. Até aqui, o valor atual é ${sumNumber}.`
    );
    break;
  }
}
exercicioTitle(4);
/*
04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = [
  "A",
  "certeza",
  "dúvida",
  "é",
  "o",
  "princípio",
  "da",
  "sabedoria.",
];

const frase = sentence.join(" ").replace(" certeza", "");
console.log(frase);

let newFrase = ''
for(let i = 0; i < sentence.length; i++){
  const word = sentence[i]
  const isCerteza = word === 'certeza'
  if(isCerteza){
    continue
  }
  newFrase += `${word} `
}
console.log(newFrase)

exercicioTitle(5);
/*
05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
  as informações corretas:

  "
  3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
      "
      */
const randomValues = [
  57,
  false,
  "JS",
  [],
  true,
  "HTML",
  31,
  null,
  false,
  "CSS",
  97,
  true,
  "Git",
  11,
  "sticker",
  false,
  "GitHub",
  true,
  null,
];

let stringAmount = 0;
let booleanAmount = 0;
let totalAmount = 0
let arrayString = [];

for (let i = 0; i < randomValues.length; i++) {
  const value = randomValues[i]
  const typeofItem = typeof value;
  const isString = typeofItem === "string";
  const isBollean = typeofItem === "boolean";

  if (stringAmount === 4) {
    break;
  }
  if (isBollean) {
    booleanAmount++;
  }
  if (isString) {
    stringAmount++;
    arrayString.push(value);
  }
totalAmount++
}

const lastItem = arrayString[arrayString.length - 1]
console.log(lastItem)
const allStrings = `${arrayString.join(", ").replace(`, ${lastItem}`, ` e ${lastItem}`)}`
console.log(`3 informações sobre o array randomValues:
- As primeiras 4 strings são ${allStrings};
- Até que as primeiras 4 strings fossem iteradas, ${booleanAmount} booleans foram iterados;
- O array foi iterado por ${totalAmount} vezes.`);

exercicioTitle(6);
/*
06

  - Descomente a constante abaixo e atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
    - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
    - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
    - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = "café";
let substancia = null;
switch (drinkType) {
  case "agua":
    substancia =
      "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.";
    console.log(substancia);
    break;
  case "refrigerante":
    substancia =
      "Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.";
    console.log(substancia);
    break;
  case "suco":
    substancia = "Bebida produzida do líquido extraído de frutos.";
    console.log(substancia);
    break;
  default:
    substancia = "Bebida desconhecida.";

    console.log(substancia);
}

exercicioTitle(7);
/*
07

- Reescreva o código comentado abaixo, utilizando um switch statement;
- Depois de escrever o switch, modifique o valor da declaração da const "a"  
para testar o switch que você escreveu.
*/

const number = 1;
let message = (number)=>{console.log(`O valor de "a" é: ${number}`)}

// if (a === 0) {
//   console.log(`O valor de "a" é ${a}`)
// } else if (a === 1) {
//   console.log(`O valor de "a" é ${a}`)
// } else {
//   console.log('O valor de "a" é qualquer número, exceto 0 e 1')
// }

switch (number) {
  case 0:
    message(number)
    break;
  case 1:
    message(number)
    break;
  default:
    console.log('O valor de "a" é qualquer número, exceto 0 e 1');
}
```

Neste execício aprendi conceitos de sobre a condicional switch, reforcei os conceitos de loop e condicionais if/else.
