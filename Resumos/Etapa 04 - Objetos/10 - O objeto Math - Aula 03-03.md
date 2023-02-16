<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O objeto Math - Aula 03-03

### Resumo

O objeto Math é um objeto embutido na linguagem de programação JavaScript que fornece funções e constantes matemáticas para uso em cálculos matemáticos. Ele não é um construtor, ou seja, não é possível instanciar um objeto Math, ele é acessado diretamente pelo seu nome.

Algumas das funções fornecidas pelo objeto Math incluem:

- Math.abs(): retorna o valor absoluto de um número
- Math.ceil(): retorna o menor inteiro maior ou igual a um número
- Math.floor(): retorna o maior inteiro menor ou igual a um número
- Math.round(): retorna o valor de um número arredondado para o inteiro mais próximo
- Math.min(): retorna o menor de dois ou mais números
- Math.max(): retorna o maior de dois ou mais números
- Math.pow(): retorna a base elevada ao expoente
- Math.sqrt(): retorna a raiz quadrada de um número
- Math.random(): retorna um número aleatório entre 0 e 1

Além disso, o objeto Math também fornece algumas constantes matemáticas, como Math.PI (o valor de pi) e Math.E (a constante de Euler). Essas funções e constantes podem ser usadas em cálculos matemáticos em JavaScript.

Alguns exemplos de como usar as funções Math.round(), Math.floor(), Math.ceil() e Math.trunc() em JavaScript:

```javascript
// Exemplo de Math.round():
console.log(Math.round(3.14159)); // Saída: 3
console.log(Math.round(3.5)); // Saída: 4
console.log(Math.round(3.9)); // Saída: 4

// Exemplo de Math.floor():
console.log(Math.floor(3.14159)); // Saída: 3
console.log(Math.floor(3.5)); // Saída: 3
console.log(Math.floor(3.9)); // Saída: 3

// Exemplo de Math.ceil():
console.log(Math.ceil(3.14159)); // Saída: 4
console.log(Math.ceil(3.5)); // Saída: 4
console.log(Math.ceil(3.9)); // Saída: 4

// Exemplo de Math.trunc():
console.log(Math.trunc(3.14159)); // Saída: 3
console.log(Math.trunc(-3.5)); // Saída: -3
console.log(Math.trunc(3.9)); // Saída: 3
```

No primeiro exemplo, a função `Math.round()` é usada para arredondar números para o inteiro mais próximo. O segundo exemplo usa a função `Math.floor()` para arredondar para baixo o número para o inteiro mais próximo, enquanto o terceiro exemplo usa a função `Math.ceil()` para arredondar para cima. O último exemplo usa a função `Math.trunc()` para remover a parte decimal do número e retornar apenas a parte inteira. Observe que a função `Math.trunc()` é diferente da função `Math.floor()` para números negativos, uma vez que a função `Math.floor()` sempre arredonda para baixo.

#### Números aleatório

Você pode obter um número aleatório entre 0 e 100 usando a função `Math.random()` juntamente com a função `Math.floor()`. A função `Math.random()` retorna um número aleatório entre 0 (inclusive) e 1 (exclusivo). Multiplicando o resultado por 100, você obtém um número aleatório entre 0 (inclusive) e 100 (exclusivo). Em seguida, use a função `Math.floor()` para arredondar para baixo o número e retornar um número inteiro entre 0 e 99. Finalmente, adicione 1 ao resultado para obter um número inteiro entre 1 e 100. Aqui está um exemplo:

```javascript
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum); // Saída: um número aleatório entre 1 e 100
```

Este código usa a função `Math.floor()` para arredondar para baixo o resultado de `Math.random() * 100` e, em seguida, adiciona 1 ao resultado para obter um número aleatório inteiro entre 1 e 100. A cada execução desse código, você deve obter um número inteiro aleatório entre 1 e 100.

#### Abaixo tabela-metodos-arredondamento

<img title="" src="../Etapa%2004%20-%20Objetos/tabela-metodos-arredondamento.jpg" alt="" data-align="center">
