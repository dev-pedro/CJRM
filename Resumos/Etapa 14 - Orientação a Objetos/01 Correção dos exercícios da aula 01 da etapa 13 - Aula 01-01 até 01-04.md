<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 01 da etapa 13 - Aula 01-01 até 01-04

### Resumo

### Conteúdo Extra aula

O atributo `valueAsNumber` é usado em elementos de formulário HTML, como `input` e `select`, para obter ou definir o valor numérico do elemento. Ele retorna o valor numérico do elemento, se ele estiver definido, ou `NaN` se o valor não puder ser convertido em um número.

Por exemplo, vamos supor que temos um elemento `input` do tipo `number` com o valor "42":

```javascript
<input type="number" id="meuNumero" value="42">
```

Podemos obter o valor numérico desse elemento usando o atributo `valueAsNumber`:

```javascript
let meuNumero = document.getElementById("meuNumero").valueAsNumber;
console.log(typeof meuNumero); // saída: "number"
console.log(meuNumero); // saída: 42
```

Também podemos definir o valor numérico do elemento usando o atributo `valueAsNumber`:

```javascript
document.getElementById("meuNumero").valueAsNumber = 10;
```

Agora, o valor do elemento `input` será "10".

É importante lembrar que o atributo `valueAsNumber` só funciona para elementos de formulário com o atributo `type` definido como `"number"`, `"range"` ou `"datetime-local"`. Se o elemento não for desse tipo, o atributo `valueAsNumber` retornará `NaN`. Além disso, se o valor do elemento não puder ser convertido em um número válido, o atributo `valueAsNumber` também retornará `NaN`.

### Definição de Pipe em Programação

Em programação, um "pipe" (também conhecido como "tubo" ou "pipe line") é uma técnica para conectar a saída de um processo ou função à entrada de outro processo ou função. É uma maneira de encadear várias operações em uma sequência de processamento, onde a saída de uma operação é a entrada da próxima.

### Princípios Para Saber Como Manipular Arrays

1. A partir do array que você vai manipular, você precisa gerar um novo array **com a mesma quantidade de itens com valores diferentes**?
* **NÃO** - Então não usar esses métodos `filter() ou reduce()`

* **SIM** - Usar o `map()`
2. A partir do array que você vai manipular, você precisa gerar um novo array **com menos itens**?
* **NÃO** - Então não usar esses métodos `map() ou reduce()`

* **SIM** - Usar o `filter()`
3. A partir do array que você vai manipular, você precisa **gerar um novo valor** que não seja um array?
* **NÃO** - Então não usar esses métodos `map() ou filter()`

* **SIM** - Usar o `reduce()`
4. A partir do array que você vai manipular, você precisa manipular outros valores externos (efeito colateral)?
* **NÃO** - Então não usar esses métodos `map() , reduce() ou filter()`

* **SIM** - Usar o `forEach()`

### spread (`...`)

O operador spread (`...`) em JavaScript é usado para expandir um objeto iterável, como um array, em um conjunto de argumentos individuais. Ele permite que você passe um array como uma lista de argumentos para uma função, ou copie os valores de um objeto iterável em um novo objeto ou array.

Aqui estão alguns exemplos de como usar o operador spread em JavaScript:

1. Passando um array como argumentos de uma função:

```javascript
function minhaFuncao(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}

const meuArray = [1, 2, 3];

minhaFuncao(...meuArray); // output: 1 2 3
```

2. Concatenando arrays:

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...array2];

console.log(newArray); // output: [1, 2, 3, 4, 5, 6]
```

3. Copiando objetos iteráveis:

```javascript
const meuObjeto = { nome: 'João', idade: 30 };
const novoObjeto = { ...meuObjeto };

console.log(novoObjeto); // output: { nome: 'João', idade: 30 }
```

4. Adicionando novas propriedades a um objeto:

```javascript
const meuObjeto = { nome: 'João', idade: 30 };
const novoObjeto = { ...meuObjeto, cidade: 'São Paulo' };

console.log(novoObjeto); // output: { nome: 'João', idade: 30, cidade: 'São Paulo' }
```

O operador spread é uma maneira simples e conveniente de manipular objetos iteráveis em JavaScript. Ele torna mais fácil escrever código legível e conciso, especialmente quando você está trabalhando com arrays ou objetos com muitas propriedades.

### A Cópia Rasa (shallow copy)

A cópia rasa (shallow copy) é um termo que se refere à cópia de um objeto ou array em que as referências aos objetos internos são copiadas, mas não os próprios objetos. Isso significa que, se você fizer uma cópia rasa de um objeto que contém outros objetos como propriedades, a cópia terá referências aos mesmos objetos internos que o objeto original.

O operador spread em JavaScript pode ser usado para fazer uma cópia rasa de um objeto ou array. Quando você usa o spread operator para copiar um objeto ou array, o operador cria um novo objeto ou array e copia as referências aos objetos internos para o novo objeto ou array.

Por exemplo, considere o seguinte objeto que contém um array como propriedade:

```javascript
const objetoOriginal = {
  nome: 'João',
  idade: 30,
  hobbies: ['leitura', 'fotografia']
};
```

Se você fizer uma cópia rasa desse objeto usando o operador spread, o novo objeto terá as mesmas referências aos objetos internos:

```javascript
const novoObjeto = { ...objetoOriginal };
```

Nesse exemplo, o novo objeto `novoObjeto` terá as mesmas propriedades e valores que o objeto original. No entanto, se você alterar o array de hobbies em qualquer um dos objetos, a mudança será refletida em ambos os objetos, porque os objetos internos são os mesmos:

```javascript
objetoOriginal.hobbies.push('caminhada');
console.log(objetoOriginal.hobbies); // output: ['leitura', 'fotografia', 'caminhada']
console.log(novoObjeto.hobbies); // output: ['leitura', 'fotografia', 'caminhada']
```

Para evitar esse comportamento, você pode fazer uma cópia profunda (deep copy) dos objetos internos usando outras técnicas, como a recursão ou bibliotecas especializadas.

### Fazendo a Cópia Profunda

A cópia profunda (deep copy) é um tipo de cópia em que todos os objetos e referências internas de um objeto são copiados, criando assim uma nova instância de cada objeto e garantindo que alterações em um objeto não afetem a cópia. Em JavaScript, existem algumas maneiras de fazer a cópia profunda de um objeto ou array.

1. Usando JSON.stringify e JSON.parse

Uma maneira simples de fazer uma cópia profunda é transformar o objeto em uma string JSON, e depois convertê-lo de volta em um objeto. Isso funciona para objetos simples que não contêm funções ou referências circulares.

```javascript
const objetoOriginal = {
  nome: 'João',
  idade: 30,
  hobbies: ['leitura', 'fotografia']
};

const novoObjeto = JSON.parse(JSON.stringify(objetoOriginal));
```

2. Usando bibliotecas especializadas

Existem várias bibliotecas especializadas em JavaScript que oferecem suporte para a cópia profunda de objetos complexos. Algumas das mais populares são:

- Lodash: uma biblioteca utilitária que inclui uma função `cloneDeep` para fazer cópias profundas.

```javascript
const objetoOriginal = {
  nome: 'João',
  idade: 30,
  hobbies: ['leitura', 'fotografia']
};

const novoObjeto = _.cloneDeep(objetoOriginal);
```

* jQuery: uma biblioteca popular que inclui uma função `extend` que pode ser usada para criar uma cópia profunda de um objeto.

```javascript
const objetoOriginal = {
  nome: 'João',
  idade: 30,
  hobbies: ['leitura', 'fotografia']
};

const novoObjeto = $.extend(true, {}, objetoOriginal);
```

3. Implementando uma solução personalizada

Uma solução personalizada também pode ser implementada, utilizando uma abordagem recursiva para copiar todos os objetos internos. Essa abordagem funciona bem para objetos complexos e pode ser implementada da seguinte maneira:

```javascript
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  const newObj = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach(key => {
    newObj[key] = deepCopy(obj[key]);
  });

  return newObj;
}

const objetoOriginal = {
  nome: 'João',
  idade: 30,
  hobbies: ['leitura', 'fotografia']
};

const novoObjeto = deepCopy(objetoOriginal);
```

Com essas técnicas, é possível fazer uma cópia profunda de objetos complexos em JavaScript.



### Explicando a `deepCopy()`

`deepCopy` é uma função que implementa a cópia profunda (deep copy) de um objeto em JavaScript. A cópia profunda é um tipo de cópia em que todos os objetos e referências internas de um objeto são copiados, criando assim uma nova instância de cada objeto e garantindo que alterações em um objeto não afetem a cópia.

A função `deepCopy` utiliza uma abordagem recursiva para copiar todos os objetos internos de um objeto, e retorna uma cópia profunda do objeto original. A implementação da função é a seguinte:

```javascript
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  const newObj = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach(key => {
    newObj[key] = deepCopy(obj[key]);
  });

  return newObj;
}
```

O funcionamento da função é o seguinte:

- A função recebe um objeto como argumento.
- Se o argumento não for um objeto, ou for nulo, a função retorna o próprio argumento, sem fazer cópia.
- Se o argumento for um objeto, a função cria um novo objeto vazio (`newObj`), que será a cópia profunda do objeto original.
- Se o objeto original for um array, a função identifica isso usando a função `Array.isArray` e cria um novo array vazio em `newObj`. Caso contrário, cria um novo objeto vazio em `newObj`.
- A função itera sobre todas as chaves do objeto original, usando `Object.keys`, e para cada chave, chama recursivamente a função `deepCopy` para criar uma cópia profunda do valor correspondente no objeto original. A cópia profunda é então atribuída à mesma chave em `newObj`.
- Quando todas as chaves do objeto original foram iteradas, a função retorna `newObj`, que é uma cópia profunda do objeto original.

Com essa implementação, a função `deepCopy` é capaz de criar cópias profundas de objetos complexos em JavaScript, incluindo objetos aninhados e arrays.

### Código Usado Nestes Exercícios

Javascript:

```javascript
/*
  01

  - Implemente uma função que recebe o nome da key de um item da localStorage 
    e retorna o valor da key parseado para objeto javascript.
*/
const myObjt = {
  name: 'Pedro'
}
localStorage.setItem('name', JSON.stringify(myObjt))

const getObjectFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key))
}

console.log(getObjectFromLocalStorage('name'))

/*
  02

  - Mesmo com um input type="initValue", a expressão `event.target.value` abaixo 
    resulta em uma string;
  - Exiba, no console, o valor que foi inserido no input;
  - O exibido valor deve ser do tipo initValue;
  - Não utilize a invocação da InitValue() ou qualquer outro método que converta 
    strings em initValue.

  Dica: pesquise por valueAsInitValue.
*/

// const input = document.querySelector('[data-js="input"]')

// input.addEventListener('input', event => {
//   console.log(event.target.valueAsInitValue)
// })

/*
  03

  - Implemente uma função 'combineOperations' que recebe 2 parâmetros:
    - Um valor inicial, do tipo initValue;
    - Um array de funções.
  - A combineOperations deve: 
    - Passar o valor inicial para a 1ª função do array;
    - Passar o valor retornado pela invocação da 1ª função para a 2ª função, e 
      assim por diante. Até que cada função do array tenha sido invocada;
    - Retornar o valor que a invocação da última função do array retornou.
  - Descomente o código abaixo. A primeira invocação da combineOperations deve 
    retornar 60 e a segunda invocação, 10.
*/

const add100 = num => num + 100

const divByFive = num => num / 5

const multiplyByThree = num => num * 3

const multiplyFive = num => num * 5

const addTen = num => num + 10

const combineOperations = (initValue, arrayFunctions = []) =>
  arrayFunctions.reduce((acc, func) => func(acc), initValue)

console.log(combineOperations(0, [add100, divByFive, multiplyByThree]))
console.log(combineOperations(0, [divByFive, multiplyFive, addTen]))

/*
  04

  - O código abaixo não está funcionando. Descubra o que ele está tentando 
    fazer e refatore-o.
*/

const albums = [
  {
    id: 537,
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: 59.9,
    genre: 'Progressive Rock'
  },
  {
    id: 975,
    title: 'Houses of the Holy',
    artist: 'Led Zeppelin',
    price: 81.0,
    genre: 'Rock'
  },
  {
    id: 359,
    title: 'Heaven and Hell',
    artist: 'Black Sabbath',
    price: 49.9,
    genre: 'Heavy metal'
  }
]

const searchAlbum = {
  id: 975,
  title: 'Houses of the Holy',
  artist: 'Led Zeppelin',
  price: 81.0,
  genre: 'Rock'
}

const searchAlbumExistInArray = albums.some(
  album => album.id === searchAlbum.id
)
if (searchAlbumExistInArray) {
  console.log(`${JSON.stringify(searchAlbum)} existe no array albums.`)
}
// albums.includes(searchAlbum)
// if (albums.includes(searchAlbum)) {
//   console.log(`${JSON.stringify(searchAlbum)} existe no array albums.`)
// }

/*
  05

  - Baseado no que foi mostrado na aula passada, faça uma cópia do `obj`.
*/

const obj = {
  prop0: () => {},
  prop1: 'a',
  prop2: 'b',
  prop3: null,
  prop4: true,
  prop5: false,
  prop6: [9, { x: 1, y: 2 }],
  prop7: 7,
  prop8: { a: 'x', b: 'y' }
}

const objAsJSON = { ...obj }
console.log(objAsJSON)

/*
  06

  - Implemente uma função que cria e retorna um elemento HTML;
  - Ela deve receber o nome do elemento HTML a ser criado e um objeto com os 
    atributos que o elemento deve conter;
  - A quantidade de atributos que o elemento irá conter pode variar.

  Dica: pesquise por Object.entries.
*/

const createElement = (elementName, attributes) => {
  const element = document.createElement(elementName)
  const attributesAsArray = Object.entries(attributes)
  attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value))

  return element
}

const input = createElement('input', {
  type: 'radio',
  id: 'input1',
  name: 'main',
  value: 'principal',
  for: 'input1',
  'data-js': 'input1'
})

console.log(input)

/*
  07

  - Na weather app, faça com que quando o usuário recarregar a página ou sair 
    da aplicação e voltar, as informações da última cidade pesquisada sejam 
    exibidas na interface.
*/
```
