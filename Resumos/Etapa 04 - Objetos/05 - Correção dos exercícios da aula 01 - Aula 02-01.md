<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 - Aula 02-01

### Resumo

```javascript
const showChallengeNumber = (number) =>
  console.log(`***** Exercício: ${number} *****`);
showChallengeNumber(1);
/*
  01

  - Crie um objeto "cat" que possui as seguintes propriedades:
    - name, que recebe o nome do gato;
    - age, que recebe a idade;
    - color, que recebe a cor;
    - bestFriends, que recebe um array com os melhores amigos do gato;
    - sound, que é um método que retorna o miado do gato.
  - Exiba o objeto no console.
*/
let cat = {
  name: "Estruguncio",
  age: 5,
  color: "preto",
  addColor: function (newColor) {
    this.color = `${this.color} e ${newColor}`;
  },
  bestFriends: ["Gatão", "Pelado", "Atropelado", "Mastigado"],
  addFriends: function (friend) {
    this.bestFriends.push(friend);
  },
  sound: function () {
    return String("miaaaau");
  },
};

console.log(cat);

showChallengeNumber(2);
/*
  02

  - Exiba a mensagem abaixo no console, substituindo os "X" pelas informações  
    corretas.

  Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu "X", "age", que recebeu "X", "color", que recebeu "X", "bestFriends", que recebeu um array com os itens "X" e "X", e "sound", que recebeu uma função que retorna "X".
*/
console.log(
  `Até aqui, o objeto "cat" possui as seguintes propriedades e valores: "name", que recebeu ${
    cat.name
  }, "age", que recebeu ${cat["age"]}, "color", que recebeu ${
    cat.color
  }, "bestFriends", que recebeu um array com os itens ${cat.bestFriends.join(
    ", "
  )}, e "sound", que recebeu uma função que retorna ${cat["sound"]}.`
);

showChallengeNumber(3);
/*
  03

  - Adicione 2 anos à idade do gato e exiba a idade atualizada no console.
*/
cat["age"] += 2;
console.log(cat.age);

showChallengeNumber(4);
/*
  04

  - Crie uma função que adiciona um amigo(a) no array de amigos do gato;
  - Exiba o array de amigos no console para verificar se o novo amigo(a) foi  
    adicionado.
*/
cat.addFriends("Farelo");
console.log(cat.bestFriends);

showChallengeNumber(5);
/*
  05

  - Crie uma função que adiciona mais uma cor à cor do gato;
  - Utilize a sintaxe de colchetes para fazer isso;
  - Exiba a nova cor do gato no console, também utilizando a sintaxe de  
    colchetes.
*/
const newColor = 'branco'
const colorProperties = 'addColor'
cat[colorProperties](newColor);
console.log(cat.color);

showChallengeNumber(6);
/*
  06

  - Crie uma função que retorna um boolean indicando se um valor recebido por  
    parâmetro é um objeto;
  - Utilize a função para exibir no console se "cat" é um objeto.
*/
const isObject = (value) => typeof value === "object";
console.log(isObject(cat));

showChallengeNumber(7);
/*
  07

  - Crie um objeto "dog" que possui as mesmas propriedades do objeto "cat";
  - Crie uma função que retorna a mensagem abaixo, com as informações corretas;
  - Exiba a mensagem no console.

  "A soma das idades de NOME_DO_GATO e NOME_DO_CACHORRO é RESULTADO_DA_SOMA."
*/
let dog = {
  name: "Mut",
  age: 8,
  color: "Marrom",
  addColor: function (newColor) {
    this.color = `${this.color} e ${newColor}`;
  },
  bestFriends: ["Sarnento", "Babão", "Manco", "Mastigado"],
  addFriends: function (friend) {
    this.bestFriends.push(friend);
  },
  sound: function () {
    return String("Auau");
  },
};
const getAgeMessage = (cat, dog) => {
  const sumAge = cat.age + dog.age;
  const catName = cat.name;
  const dogName = dog.name;
  return `A soma das idades de ${catName} e ${dogName} é ${sumAge}.`;
};

console.log(getAgeMessage(cat, dog));

showChallengeNumber(8);
/*
  08

  - Se você descomentar os 2 console.log abaixo, verá que a função "isAnSUV"  
    está funcionando corretamente. Mas ela pode ser melhorada;
  - Como você refatoraria esta função?
*/

const isAnSUV = (car) => {
  if (
    car === "Honda HR-V" ||
    car === "Jeep Renegade" ||
    car === "Ford EcoSport" ||
    car === "Hyundai iX35"
  ) {
    return true;
  }

  return false;
};

const carsArray = [
  "Honda HR-V",
  "Jeep Renegade",
  "Ford EcoSport",
  "Hyundai iX35",
];

const isAnSUVIncludes = (car, carsArray) => {
  return carsArray.includes(car);
};

const findFirstCar = "Honda Civic";
const findSecondCar = "Ford EcoSport";

console.log(isAnSUVIncludes(findFirstCar, carsArray));

console.log(isAnSUVIncludes(findSecondCar, carsArray));

//console.log(isAnSUV("Honda Civic"));
//console.log(isAnSUV("Ford EcoSport"));

showChallengeNumber(9)
/*
  09

  - Crie uma função que recebe um parâmetro 'type';
  - Dentro da função, crie um objeto com as seguintes propriedades:
    - null, que recebe a mensagem 'Seta, explicitamente, uma variável sem valor.'
    - undefined, que recebe a mensagem 'Representa um valor não-setado.'
    - object, que recebe a mensagem 'Arrays, Datas, Objetos literais, Funções, etc.'
  - Se o valor que o parâmetro type receber corresponder à alguma das 3  
    propriedades, retorne a mensagem que a propriedade armazena;
  - Teste a função, exibindo no console a mensagem de cada propriedade.
*/
const getTypeDefinition = (type) => {
  const typeObject = {
    null: 'Seta, explicitamente, uma variável sem valor.',
    undefined: 'Representa um valor não-setado.',
    object: 'Arrays, Datas, Objetos literais, Funções, etc.',
  }
    return typeObject[type]
}

console.log(getTypeDefinition('object'))
console.log(getTypeDefinition('null'))
console.log(getTypeDefinition('undefined'))
```
