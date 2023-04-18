<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 04 da etapa 11 - Aula 05-01 e Aula 05-02

### Resumo

### Códido Usado Neste Exercício

Javascript:

```javascript
/*
  01

  - Usando promises, faça um request para este endpoint:
    https://jsonplaceholder.typicode.com/users
  - Se o request estiver ok, exiba os objetos no console;
  - Se o request não estiver ok, exiba no console "Não foi possível obter os 
    dados dos usuários."
*/

const getUsers = (url = '') =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4

      if (isRequestOk) {
        const dataUsers = JSON.parse(request.responseText)
        resolve(dataUsers)
      }

      if (isRequestNotOk) {
        reject('Não foi possível obter os dados dos usuários.')
      }
    })

    request.open('GET', url)
    request.send()
  })

getUsers('https://jsonplaceholder.typicode.com/users')
  .then(dataUsers => console.log(dataUsers))
  .catch(error => console.log(error))

/*
  02

  - Crie uma função chamada `calculator`, que funcione assim:
    - A função deve receber um parâmetro que dirá qual operação matemática ela
      vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
  - Essa função deve retornar uma segunda função que deve receber dois 
    parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a 
    mensagem: "Resultado da operação: NUMERO_1 OPERADOR NUMERO_2 = RESULTADO."
  - Se o operador não for válido, retorne a mensagem "Operação inválida."
*/

const getOperationMessage = (num1, operator, num2, operation) =>
  `Resultado da operação: ${num1} ${operator} ${num2} = ${operation}.`

const calculator = operator => (num1, num2) => {
  const operations = {
    '+': getOperationMessage(num1, operator, num2, num1 + num2),
    '-': getOperationMessage(num1, operator, num2, num1 - num2),
    '*': getOperationMessage(num1, operator, num2, num1 * num2),
    '/': getOperationMessage(num1, operator, num2, num1 / num2),
    '%': getOperationMessage(num1, operator, num2, num1 % num2)
  }

  return operations[operator] || 'Operação inválida.'
}

const sum = calculator('+')
const subtraction = calculator('-')
const multiplication = calculator('*')
const Division = calculator('/')
const remainder = calculator('%')

console.log(sum(2, 2))
console.log(subtraction(8, 7))
console.log(multiplication(6, 6))
console.log(Division(24, 6))
console.log(remainder(12, 3))

/*
  03

  - Crie 2 arrays, `sul` e `sudeste`, que serão as regiões do Brasil. Cada 
    array deve conter os estados dessa região;
  - Crie uma const chamada `brasil`, que irá receber as duas regiões 
    concatenadas. Mostre o `brasil` no console;
  - Adicione 3 novos estados da região Norte no início do array e mostre no 
    console. Pesquise pelo método "unshift" no MDN;
  - Remova o primeiro estado do array `brasil` e mostre-o no console;
  - Crie um novo array chamado `newSul`, que recebe somente os estados do sul,
    pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
const sul = ['Paraná', 'Rio Grande do Sul', 'Santa Catarina']
const sudeste = [
  'Espírito Santo',
  'Minas Gerais',
  'Rio de Janeiro',
  'São Paulo'
]
let brasil = sul.concat(sudeste)
brasil.unshift('Amazonas', 'Acre', 'Rondônia')
console.log(brasil.shift())
console.log('Brasil: ', brasil)

const newSul = brasil.slice(2, 5) //não modifica o array original
console.log('New Sul', newSul)

/*
  04

  - Crie um novo array chamado `nordeste`, que tenha os estados do nordeste;
  - Remova de `brasil` os estados do `sudeste`, colocando-os em uma constante
    chamada `newSudeste`. Pesquise pelo método "splice";
  - Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
    ficar no mesmo nível que os estados já existentes, não em um array separado;
  - Percorra o array `brasil` e gere um novo array chamado `newBrasil`. Esse 
    array deve ter cada item como um objeto, com as propriedades:
      - `id`: que será o índice do array `brasil`;
      - `estado`: que será o estado do array `brasil`;
  - Percorra o array `brasil` e verifique se os estados tem mais de 7 letras 
    cada, atribuindo o resultado à uma constante. Se tiver, mostre no console a 
    mensagem "Sim, todos os estados tem mais de 7 letras.". Se não, mostre no 
    console: "Nem todos os estados tem mais de 7 letras.". Pesquise pelo método 
    every.
*/
const nordeste = [
  'Maranhão',
  'Piauí',
  'Ceará',
  'Rio Grande do Norte',
  'Paraíba',
  'Pernambuco',
  'Alagoas',
  'Sergipe',
  'Bahia'
]

const newSudeste = brasil.splice(5, 4) //modifica o array original
console.log('New Sudeste: ', newSudeste)
brasil = brasil.concat(nordeste)
console.log('Brasil: ', brasil)

const newBrasil = brasil.map((item, index) => ({ id: index, estado: item }))

const hasMoreThan7Letters = brasil.every(item => item.length > 7)
const message = hasMoreThan7Letters
  ? 'Sim, todos os estados tem mais de 7 letras.'
  : 'Nem todos os estados tem mais de 7 letras.'

console.log(message)

/*
05

- Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
    resultado à uma constante. Se esse estado existir no array, mostre no 
    console "Ceará está incluído.". Se não, mostre "Ceará não foi incluído =/";

    - Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
    objeto desse array, e adicione a frase abaixo na propriedade `estado`:
    - "ESTADO pertence ao Brasil.";

    - Atribua o novo array a uma constante;

    - Filtre o array criado acima, retornando somente os estados que tiverem ID 
    par. Atribua este novo array à uma constante.
    */

const isCearaIncluded = brasil.includes('Ceará')
const cearaMessage = isCearaIncluded
  ? 'Ceará está incluído.'
  : 'Ceará não foi incluído =/'
console.log(cearaMessage)

// const newBrasilUpdate = Array(newBrasil).map((estado, index, array) => {
//   const newBrasilChange =+ {id: index + 1, estado: `${estado} pertence ao Brasil.`}

// })

console.log('New Brasil: ', newBrasil)

const newBrasilUpdate = newBrasil.map(({ id, estado }) => ({
  id: id + 1,
  estado: `${estado} pertence ao Brasil.`
}))
console.log('New Brasil Update: ', newBrasilUpdate)


const filteredNewBrasilUpdate = newBrasilUpdate.filter(({id}) => id % 2 === 0)

console.log(filteredNewBrasilUpdate)
```

#### Explicação do Exercício 2

O código do exercício 2 acima é uma função que implementa uma calculadora que recebe dois números e um operador matemático, e retorna o resultado da operação com uma mensagem de feedback.

A função `getOperationMessage()` é utilizada para criar a mensagem de feedback com o resultado da operação realizada. Ela recebe quatro parâmetros: `num1` e `num2`, que são os operandos da operação, `operator`, que é o operador matemático utilizado, e `operation`, que é o resultado da operação. A função retorna uma string que contém a mensagem de feedback.

A função `calculator()` é uma função de ordem superior que recebe como parâmetro um operador matemático. Ela retorna uma função anônima que recebe dois parâmetros, `num1` e `num2`, que são os operandos da operação. Essa função anônima utiliza um objeto chamado `operations` que contém cinco propriedades, uma para cada operador matemático: `+`, `-`, `*`, `/` e `%`. Cada propriedade do objeto contém a mensagem de feedback retornada pela função `getOperationMessage()` com o resultado da operação realizada com o operador correspondente.

A função anônima retorna a mensagem de feedback correspondente à operação desejada, ou uma mensagem de erro caso o operador não seja um dos cinco operadores permitidos.

O código define uma constante `sum` que recebe a função retornada pela chamada `calculator('+')`, que representa a operação de soma. Em seguida, a função `sum()` é chamada com os parâmetros 2 e 2, e o resultado é exibido no console.

A mensagem exibida no console será: "Resultado da operação: 2 + 2 = 4."

## Conteúdo Extra Aula

#### Método unshift()

O método "unshift" em JavaScript é usado para adicionar um ou mais elementos no início de um array.

Sintaxe:

```javascript
array.unshift(elemento1, elemento2, ..., elementoN);
```

Parâmetros:

- `elemento1, elemento2, ..., elementoN`: Os elementos que serão adicionados ao início do array.

Retorno:

- O novo comprimento do array após a adição dos elementos.

Exemplo de uso:

```javascript
const numeros = [1, 2, 3, 4];
numeros.unshift(0); // adiciona 0 ao início do array
console.log(numeros); // [0, 1, 2, 3, 4]

numeros.unshift(-2, -1); // adiciona -2 e -1 ao início do array
console.log(numeros); // [-2, -1, 0, 1, 2, 3, 4]
```

No exemplo acima, o método "unshift" é usado para adicionar elementos ao início do array "numeros". Primeiro, o número 0 é adicionado, em seguida, os números -2 e -1 são adicionados. O console.log() é usado para mostrar o array após cada adição de elemento.

#### Método slice()

O método `slice()` em JavaScript é usado para retornar uma cópia de uma parte do array, sem modificar o array original. Ele pode receber dois parâmetros: o índice de início e o índice de fim do trecho que se deseja extrair do array.

Sintaxe:

```javascript
array.slice(inicio, fim)
```

Parâmetros:

- `inicio`: O índice de início da parte do array que se deseja extrair. Se este parâmetro for negativo, significa que começa a contar a partir do final do array. Caso não seja informado, o valor padrão é 0.
- `fim`: O índice de fim da parte do array que se deseja extrair. Se este parâmetro for negativo, significa que conta a partir do final do array. Caso não seja informado, o valor padrão é o comprimento do array.

Retorno:

- Uma cópia do trecho do array que vai do índice de `inicio` até o índice de `fim`, sem incluir o elemento do índice de `fim`.

Exemplo de uso:

```javascript
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
const citricas = frutas.slice(1, 3);
console.log(citricas); // ['banana', 'laranja']
```

No exemplo acima, a variável `frutas` contém um array de frutas, e a variável `citricas` contém uma cópia do trecho do array `frutas` que vai do índice 1 (inclusive) até o índice 3 (exclusive), ou seja, as frutas "banana" e "laranja". O array `frutas` não é modificado.

#### Método shift()

O método `shift()` em JavaScript é usado para remover e retornar o primeiro elemento de um array. Ele modifica o array original, deslocando todos os elementos restantes para um índice menor.

Sintaxe:

```javascript
array.shift()
```

Parâmetros:

- Este método não recebe parâmetros.

Retorno:

- O primeiro elemento do array que foi removido.

Exemplo de uso:

```javascript
const numeros = [1, 2, 3, 4];
const primeiroNumero = numeros.shift();
console.log(primeiroNumero); // 1
console.log(numeros); // [2, 3, 4]
```

No exemplo acima, o método `shift()` é usado para remover e retornar o primeiro elemento do array `numeros`. A variável `primeiroNumero` recebe o valor 1, que é o primeiro elemento do array. Em seguida, o console exibe o valor de `primeiroNumero` e o array `numeros`, que agora contém somente os elementos restantes após a remoção do primeiro elemento.
