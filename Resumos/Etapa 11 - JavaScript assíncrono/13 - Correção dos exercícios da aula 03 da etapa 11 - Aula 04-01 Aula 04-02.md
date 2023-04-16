<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 03 da etapa 11 - Aula 04-01 e Aula 04-02

### Resumo

### Código dos Exercícios

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício 29</title>
</head>
<body>
  <h1>Exercício 29</h1>
  
  <script src="./app.js"></script>
</body>
</html>
```

Javascript:

```javascript
/*
  01

  - Faça requests para a https://pokeapi.co/, da seguinte forma:
    - Encapsule o código do request em uma função que recebe os parâmetros 
      "url" e "callback";
    - Se o request estiver data, exiba no console 'Pokémon obtido: 
      NOME_DO_POKEMON';
    - Se o request não estiver data, exiba no console 'Não foi possível obter o 
      Pokémon';
    - Os pokémons buscados devem ser: 'bulbasaur', 'charmander' e 'squirtle';
    - Os requests devem ser sequenciais. Ou seja, um request só deve ser 
      executado quando o request anterior for finalizado.
*/

function getPokemon (pokemon, callback) {
  const request = new XMLHttpRequest()
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4

    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      return callback('Pokemon capturado:', data.name)
    }

    if (isRequestNotOk) {
      return callback('Pokemon não encontrado', null)
    }
  })

  request.open('GET', url)
  request.send()
}

getPokemon('bulbasaur', (msg, pokemonData) => {
  console.log(msg, pokemonData)
  getPokemon('charmander', (msg, pokemonData) => {
    console.log(msg, pokemonData)
  })
  getPokemon('squirtle', (msg, pokemonData) => {
    console.log(msg, pokemonData)
  })
})

/*
  02

  - Há algumas etapas, implementamos o método some, do zero;
  - Neste exercício, seu desafio será criar o método map, do zero;
  - Implemente uma função "map" que possui a mesma funcionalidade do método  
    map original;
  - Você não poderá utilizar o método map de array, embutido na linguagem;
  - A assinatura da invocação desta função deve ser:
    - map([1, 2, 3], number => number * 2) // [2, 4, 6];
    - map([1, 2, 3], number => number * 3) // [3, 6, 9];
  - Se você não se lembra como o método map funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "O método map" - Aula 01-02 da etapa 08;
      - "Correção dos exercícios da aula 01 da etapa 08" - Aula 02-01 da etapa 
        08;
    2) Pesquisar no MDN.
*/

const map = (array = [], callback) => {
  const newArray = []
  const addNewItemToNewArray = item => {
    const newItem = callback(item)
    newArray.push(newItem)
  }
  array.forEach(addNewItemToNewArray)
  return newArray
}

console.log(map([1, 2, 3], number => number * 2))
console.log(map([1, 2, 3], number => number * 3))

/*
  03

  - Descomente o console.log abaixo e faça o this do método referenciar o 
    objeto person.
*/

const person = {
  name: 'Pedro',
  getName: () => person.name
}

console.log(person.getName())

/*
  04

  - Descomente a 2ª const abaixo e salve este arquivo;
  - Um erro será exibido no console;
  - Faça as duas const x coexistirem, sem modificar o nome de qualquer uma 
    delas.
*/

const x = 'x'

const getX = () => {
  const x = 'y'
  return x
}
console.log(x, getX())

/*
  05

  - O código abaixo está funcionando. Refatore-o da forma mais concisa que você 
    conseguir.
*/

const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`
console.log(getFullName({ firstName: 'Afonso', lastName: 'Solano' }))

/*
  06

  - Crie uma função chamada 'convertToHex', que recebe o nome de uma cor por 
    parâmetro. Exemplo: 'red';
  - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
  - Verifique se a cor passada por parâmetro é algum hexa escolhido. Se for,
    retorne a frase 'O hexadecimal para a cor COR é HEXADECIMAL';
  - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a mensagem 'Não temos o equivalente hexadecimal para COR';
  - Exiba o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

const convertToHex = (color = '') => {
  const nameColor = color.toLowerCase()
  const colorsHex = {
    red: 'FF2626',
    black: '000000',
    white: 'FFFFFF',
    yellow: 'FA00DF',
    blue: 'FF45FF'
  }

  return colorsHex[color]
    ? `O hexadecimal para a cor ${nameColor} é ${colorsHex[`${nameColor}`]}.`
    : `Não temos o equivalente hexadecimal para ${nameColor}.`
}
const arrayColors = [
  'green',
  'red',
  'black',
  'white',
  'purple',
  'yellow',
  'blue',
  'gray'
]
const logColorMessage = color => console.log(convertToHex(color))
arrayColors.forEach(logColorMessage)

/*
  07

  - Através do array abaixo, gere um objeto com a frequência de idades das 
    pessoas;
  - Ou seja, se o array contém 3 pessoas com 18 anos, o objeto gerado deve ter 
    uma propriedade 18 com o valor 3, se o array contém 2 pessoas com 19 anos,
    o objeto gerado deve ter uma propriedade 19 com o valor 2 e assim por 
    diante.
  
  Resultado desejado: { 18: 3, 19: 2, 20: 1 }

  Dica: pesquise por Computed Property Names.
*/

const people = [
  { id: 5, name: 'Angelica', age: 18, federativeUnit: 'Pernambuco' },
  { id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo' },
  { id: 47, name: 'Ana Carolina', age: 18, federativeUnit: 'Alagoas' },
  { id: 87, name: 'Felipe', age: 18, federativeUnit: 'Minas Gerais' },
  { id: 9, name: 'Gabriel', age: 20, federativeUnit: 'São Paulo' },
  { id: 73, name: 'Aline', age: 19, federativeUnit: 'Brasília' }
]
const createOrIncrementAgeFrequency = (acc, { age }) => {
  acc[age] = acc[age] + 1 || 1
  return acc
}
const agesFrequency = people.reduce(createOrIncrementAgeFrequency, {})
console.log(people, agesFrequency)
```

### Conteúdo Extra Aula

#### Computed Property Names

Computed Property Names é um recurso introduzido no ECMAScript 6 (ES6) que permite aos desenvolvedores gerar dinamicamente nomes de propriedades em literais de objeto e classes usando uma expressão.

No ES6, os desenvolvedores podem usar colchetes para envolver uma expressão que será calculada em tempo de execução para determinar o nome da propriedade. A expressão dentro dos colchetes pode ser qualquer expressão JavaScript válida que retorne um valor de string.

Aqui está um exemplo de como usar computed property names em um literal de objeto:

```javascript
const propName = "nome";
const obj = {
  [propName]: "João",
  ["idade"]: 30,
  [2 + 2]: 4
};
console.log(obj); // { nome: "João", idade: 30, 4: 4 }
```

Neste exemplo, temos um objeto `obj` com três propriedades. A primeira propriedade usa a variável `propName` para calcular dinamicamente o nome da propriedade. A segunda propriedade usa um literal de string para especificar o nome da propriedade. A terceira propriedade usa uma expressão matemática para calcular o nome da propriedade.

Computed property names também podem ser usados em definições de classe para gerar dinamicamente nomes de método. Aqui está um exemplo:

```javascript
class MinhaClasse {
  [nomeMetodo]() {
    console.log("Olá, mundo!");
  }
}
const nomeMetodo = "dizerOla";
const obj = new MinhaClasse();
obj[nomeMetodo](); // logs "Olá, mundo!"
```

Neste exemplo, definimos uma classe `MinhaClasse` com um método cujo nome é calculado dinamicamente em tempo de execução usando a variável `nomeMetodo`. Em seguida, criamos uma instância de `MinhaClasse` e invocamos o método gerado dinamicamente usando a variável `nomeMetodo`.

Computed property names podem ser uma ferramenta poderosa para criar código dinâmico e flexível. No entanto, eles devem ser usados com cuidado, pois podem tornar o código mais difícil de entender e manter.
