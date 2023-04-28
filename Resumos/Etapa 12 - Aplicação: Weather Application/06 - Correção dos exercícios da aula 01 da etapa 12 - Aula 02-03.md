<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 da etapa 12 - Aula 02-01,- Aula 02-02 - Aula 02-03

### Resumo

### Código Usados Neste Exercício

HTML: index.html

```html
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercicio 33</title>
</head>
<body>
  <script src="./index.js"></script>
  <script src="./app.js"></script>
</body>
</html>
```

Javascript: index.js

```javascript
const book = {
  name: 'Rápido e devagar',
  author: 'Daniel Kahneman',
  pages: 608,
  releaseYear: 2012,
  publisher: 'Objetiva',
  price: 44.90
}
```

Javascript: app.js

```javascript
/*
  01

  - Ao descomentar o código abaixo, um erro será lançado;
  - Solucione esse problema sem declarar uma constante "book".
*/
console.log(book)

/*
  02

  - Implemente uma função que, ao ser invocada, recebe um array com 3 itens;
  - A função deve retornar um novo array em que:
    - O 1º item é o 3º item do array recebido por argumento;
    - O 2º item é o 1º item do array recebido por argumento;
  - Implemente a função da forma mais concisa que você conseguir.
*/
const crazyArray = ([first, third]) => [third, first]
console.log(crazyArray([1, 2, 3]))
/*
  03

  - Em uma declaração, faça o destructuring apenas da propriedade 'name' do 
    objeto com o id 3.
*/

const topics = [
  { id: 1, name: 'Artes & cultura' },
  { id: 2, name: 'Negócios & finanças' },
  { id: 3, name: 'Carreiras' }
]
const [ , , {name}] = topics
/*
  04

  - O 2º item do array abaixo contém as cores RGB;
  - Em uma declaração, faça o destructuring dos valores desse item em 3 consts: 
    'red', 'green' e 'blue'.
*/

const colors = ['#FF00FF', ['#FF0D0D', '#0AFA00', '#011EFA'], '#7BF0FF']
const [, [red, green, blue]] = colors

/*
  05

  - Descomente o código abaixo e implemente a função greet;
  - Observe que ela recebe 2 argumentos, um objeto e uma string;
  - Dentro da declaração da função:
    - Faça um destructuring no objeto recebido no 1º argumento;
    - No destructuring, nomeie de forma dinâmica a const que você está 
      declarando, usando o 2º argumento que a invocação da função recebeu.
      Você já conhece a sintaxe que nomeia de forma dinâmica;
    - Atribua "desconhecido" como valor default da const do destructuring;
    - Faça a função retornar "Olá, meu nome é [NOME]!".
*/

const greet = (obj, dynamicName) => {
  const {[dynamicName]: name = 'desconhecido' } = obj

  return `Ola meu nome é ${name}`
}


console.log(greet({ name: 'Pedro' }, 'name'))
console.log(greet({}, 'personName'))

/*
  06

  - O idioma da interface gráfica da aplicação que estamos construindo 
    (Weather App) é pt-BR;
  - Ao invocarmos a getCityWeather, observe que a propriedade "WeatherText" do 
    objeto obtido armazena a descrição do clima em inglês: "cloudy", "rain", 
    etc;
  - Traduza os possíveis valores dessa propriedade;
  - Não é necessário implementar condicionais, objetos, ou arrays para fazer
    isso.
*/

/*
  07

  - Refatore o weather.js;
  - Uma dica do que pode ser melhorado:
    - A repetição dos requests pode ser eliminada por uma função genérica e 
      reutilizável, responsável apenas por fazer requests.
*/
```

### Conteúdo Extra Aula

#### Destructuring em Objetos e Arrays

Em JavaScript, a deconstrução (ou destructuring) é uma técnica que permite extrair valores de arrays e objetos de forma mais concisa e legível. A sintaxe para a deconstrução de objetos e arrays é um pouco diferente, então vamos cobri-las separadamente.

##### Deconstrução de objetos:

Para destruir um objeto em JavaScript, usamos a seguinte sintaxe:

```javascript
const {propriedade1, propriedade2} = objeto;
```

Aqui, `propriedade1` e `propriedade2` são variáveis que você deseja extrair do objeto. O `objeto` é o objeto de onde você deseja extrair as propriedades. É importante notar que o nome da variável deve ser o mesmo que o nome da propriedade no objeto.

##### Deconstrução de arrays:

Para destruir um array em JavaScript, usamos a seguinte sintaxe:

```javascript
const [elemento1, elemento2] = array;
```

Aqui, `elemento1` e `elemento2` são variáveis que você deseja extrair do array. O `array` é o array de onde você deseja extrair os elementos. É importante notar que a ordem das variáveis na sintaxe deve corresponder à ordem dos elementos no array.

### Destructuring em Objetos e Arrays Aninhados

Se um objeto ou um array contiver outros objetos ou arrays aninhados, você pode usar a mesma sintaxe de destruição para extrair esses itens.

Deconstrução de objetos aninhados:

Para destruir objetos aninhados, você pode simplesmente aninhar as chaves da seguinte forma:

```javascript
const objeto = {
  propriedade1: {
    subpropriedade1: 'valor1',
    subpropriedade2: 'valor2'
  },
  propriedade2: 'valor3'
};

const {propriedade1: {subpropriedade1, subpropriedade2}, propriedade2} = objeto;

console.log(subpropriedade1); // Output: "valor1"
console.log(subpropriedade2); // Output: "valor2"
console.log(propriedade2); // Output: "valor3"
```

Observe que o nome das variáveis deve corresponder exatamente aos nomes das subpropriedades no objeto.

Deconstrução de arrays aninhados:

Para destruir arrays aninhados, você pode simplesmente adicionar mais colchetes à sintaxe:

```javascript
const array = ['valor1', ['valor2', 'valor3']];

const [elemento1, [elemento2, elemento3]] = array;

console.log(elemento1); // Output: "valor1"
console.log(elemento2); // Output: "valor2"
console.log(elemento3); // Output: "valor3"
```

Observe que a ordem das variáveis deve corresponder exatamente à ordem dos elementos no array aninhado.

### Para Ignorar um Item do Array Aninhado

Se você quiser ignorar um item em um array aninhado durante a destruição, pode simplesmente deixar um espaço vazio entre as vírgulas para indicar que o elemento deve ser ignorado. Aqui está um exemplo:

```javascript
const array = ['valor1', ['valor2', 'valor3', 'valor4']];

const [elemento1, [, elemento3, elemento4]] = array;

console.log(elemento1); // Output: "valor1"
console.log(elemento3); // Output: "valor3"
console.log(elemento4); // Output: "valor4"
```

Observe que a posição do espaço vazio na sintaxe deve corresponder à posição do elemento que você deseja ignorar no array aninhado. O espaço vazio indica que o elemento deve ser ignorado e que a variável não deve ser declarada.
