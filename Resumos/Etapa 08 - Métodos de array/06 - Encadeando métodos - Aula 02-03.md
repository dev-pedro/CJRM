<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Encadeando métodos - Aula 02-03

### Resumo

#### Encadeando métodos usando map no filter em javascript

Em JavaScript, é possível encadear métodos usando as funções `map` e `filter` para processar e transformar arrays de dados de forma mais elegante e concisa. A seguir, estão alguns exemplos de como encadear essas funções:

Exemplo 1: Filtrando e mapeando um array de números

Suponha que você tenha um array de números e deseje filtrar apenas os números pares e, em seguida, multiplicá-los por 2. Você pode encadear as funções `filter` e `map` da seguinte forma:

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const numerosParesMultiplicadosPorDois = numeros
  .filter(numero => numero % 2 === 0)
  .map(numero => numero * 2);

console.log(numerosParesMultiplicadosPorDois); // [4, 8, 12]
```

Explicação:

- A função `filter` é usada para filtrar apenas os números pares do array original.
- A função `map` é usada para multiplicar cada número par por 2 e criar um novo array com os resultados.

Exemplo 2: Filtrando e mapeando um array de objetos

Suponha que você tenha um array de objetos que representam pessoas e deseje filtrar apenas as pessoas com idade superior a 18 anos e, em seguida, mapear seus nomes. Você pode encadear as funções `filter` e `map` da seguinte forma:

```javascript
const pessoas = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Pedro', idade: 17 },
  { nome: 'Mariana', idade: 31 },
  { nome: 'João', idade: 19 },
];

const nomesPessoasMaioresDeIdade = pessoas
  .filter(pessoa => pessoa.idade > 18)
  .map(pessoa => pessoa.nome);

console.log(nomesPessoasMaioresDeIdade); // ['Ana', 'Mariana', 'João']
```

Explicação:

- A função `filter` é usada para filtrar apenas as pessoas com idade superior a 18 anos do array original.
- A função `map` é usada para extrair o nome de cada pessoa filtrada e criar um novo array com os resultados.

#### Código usado nesta aula

```javascript
const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

const booksOnSale = books
  .filter(({ price }) => price > 20)
  .map(({ name, price }) => `O livro '${name}' esta em promoção por ${price} reais`)

debugger
```
