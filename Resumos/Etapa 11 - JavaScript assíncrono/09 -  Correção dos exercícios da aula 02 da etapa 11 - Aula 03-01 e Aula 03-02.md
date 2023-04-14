<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 02 da etapa 11 - Aula 03-01 e Aula 03-02

### Resumo

### Códigos do Exercício

Javascript:

```javascript
/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/
const request = new XMLHttpRequest()

// request.addEventListener('readystatechange', () => {
//   const isRequestValid = request.readyState === 4 && request.status === 200
//   const isRequestNotValid = request.readyState === 4
//   if (isRequestValid) {
//     console.log(request.responseText)
//     return
//   }
//   if(isRequestNotValid) {
//     console.log('Não foi possível obter os dados do pokémon')
//   }
// })

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
request.send()

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

let me = {
  name: 'Pedro Henrique',
  lastName: 'Santos',
  gender: 'Masculino',
  age: 44,
  height: 1.73,
  weigh: 75,
  isWalking: false,
  walkedMeters: 0
}

console.log(me)

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

me.incrementAge = () => {
  me.age++
}
for (let i = 0; i < 5; i++) {
  me.incrementAge()
}
console.log(me.age)

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

me.walk = meters => {
  me.walkedMeters += meters
  me.isWalking = true
}

const meters = [25, 8, 14, 21]
meters.forEach(meter => me.walk(meter))
console.log(me.walkedMeters, me.isWalking)

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

const getPluralOrSingular = (quantity, singular, plural) => {
  return quantity === 1 ? singular : plural
}

me.intruduction = () => {
  const {name, lastName, gender, age, height, weigh, isWalking, walkedMeters} = me

  const correctGender = gender === 'Masculino' ? 'o' : 'a'
  const agePluralOrSingular = getPluralOrSingular(age, 'ano', 'anos')
  const walkedMetersPluralOrSingular = getPluralOrSingular(
    me.walkedMeters,
    'metro',
    'metros'
  )
  const heightMetersPluralOrSingular = getPluralOrSingular(
    me.height,
    'metro',
    'metros'
  )

  return `Oi. Eu sou ${correctGender} ${name} ${lastName}, tenho ${age} ${agePluralOrSingular}, ${height} ${heightMetersPluralOrSingular} de altura, peso ${weigh} quilos e, só hoje, eu já caminhei ${walkedMeters} ${walkedMetersPluralOrSingular}.`
}
me.age = 38
console.log(me.intruduction())

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const falsyValues = [false, 0, '', null, undefined, NaN,false]
const truthyValues = [true, '0', () => {}, {}, [], -1, 'false']


const isTrusthy = value => Boolean(value)
const logFalsyValues = falsyValue => console.log(isTrusthy(falsyValue))
const logTruthyValues = truthyValue => console.log(isTrusthy(truthyValue))

falsyValues.forEach(logFalsyValues)
truthyValues.forEach(logTruthyValues)

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/
const getBook = bookName => {
  
  const books = {
    'As Cronicas de Nárnia': {
      totalPages: 768,
      author: 'C.S. Lewis',
      publisher: 'Geoffrey Bles'
    },
    'O Senhor dos Anéis': {
      totalPages: 1178,
      author: 'J.R.R. Tolkien',
      publisher: 'Allen & Unwin'
    },
    'Harry Potter e a Pedra Filosofal': {
      totalPages: 223,
      author: 'J.K. Rowling',
      publisher: 'Bloomsbury'
    }
  };

    // return books[bookName] ? books[bookName] : books
    return books[bookName] || books//curto circuito
  


}

console.log(getBook('As Cronicas de Nárnia'))
```

### Expressão Curto Circuíto em Javascript

Uma expressão de curto circuito em JavaScript é uma expressão que pode ser avaliada como verdadeira ou falsa sem que todas as suas partes sejam avaliadas. Isso ocorre porque JavaScript usa a avaliação de curto-circuito, que é uma técnica de avaliação lógica que interrompe a avaliação assim que o resultado final puder ser determinado.

Existem dois operadores lógicos que são comumente usados para criar expressões de curto circuito em JavaScript: o operador OR (`||`) e o operador AND (`&&`).

Quando o operador OR é usado em uma expressão, a expressão é verdadeira se qualquer um dos operandos for verdadeiro. A avaliação ocorre da esquerda para a direita e assim que um operando verdadeiro é encontrado, a avaliação é interrompida e o valor verdadeiro é retornado. Se ambos os operandos são falsos, o último operando é retornado. Veja um exemplo:

```javascript
const a = 5;
const b = 0;
const c = null;

console.log(a || b); // 5
console.log(b || c); // null
console.log(c || a || b); // 5
```

Neste exemplo, o operador OR é usado para criar expressões de curto circuito. Na primeira expressão, `a || b`, o valor de `a` é verdadeiro, então a expressão retorna 5, sem avaliar o valor de `b`. Na segunda expressão, `b || c`, ambos os valores são falsos, mas como `c` é o último operando, ele é retornado. Na terceira expressão, `c || a || b`, o valor de `c` é falso, então a avaliação passa para o próximo operando, `a`, que é verdadeiro. Como um operando verdadeiro foi encontrado, o valor 5 é retornado, sem avaliar o valor de `b`.

Já quando o operador AND é usado em uma expressão, a expressão é verdadeira se todos os operandos forem verdadeiros. A avaliação ocorre da esquerda para a direita e assim que um operando falso é encontrado, a avaliação é interrompida e o valor falso é retornado. Se todos os operandos forem verdadeiros, o último operando é retornado. Veja um exemplo:

```javascript
const a = 5;
const b = 0;
const c = null;

console.log(a && b); // 0
console.log(b && c); // 0
console.log(a && c && b); // null
```

Neste exemplo, o operador AND é usado para criar expressões de curto circuito. Na primeira expressão, `a && b`, o valor de `a` é verdadeiro, mas o valor de `b` é falso, então a expressão retorna 0, sem avaliar outros operandos. Na segunda expressão, `b && c`, ambos os valores são falsos, então a expressão retorna 0, sem avaliar outros operandos. Na terceira expressão, `a && c && b`, o valor de `a` é verdadeiro, mas o valor de `c` é falso, então a expressão retorna `null`, sem avaliar o valor de `b`.
