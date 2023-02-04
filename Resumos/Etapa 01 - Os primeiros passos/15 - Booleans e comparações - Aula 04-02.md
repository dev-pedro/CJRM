<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Booleans e comparações - Aula 04-02

### Resumo

Booleanos em JavaScript são valores que representam verdadeiro ou falso. Eles são usados para representar resultados de comparações lógicas e decisões em código. Os valores booleanos em JavaScript são "true" e "false".

Quando usar?

Quando você precisar verificar alguma condição no seu código.

##### Operadores lógicos booleanos

Os operadores lógicos booleanos em JavaScript incluem:

1. `&&` (E lógico): retorna verdadeiro se ambas as expressões do lado esquerdo e direito são verdadeiras.

2. `||` (OU lógico): retorna verdadeiro se uma das expressões do lado esquerdo ou direito é verdadeira.

3. `!` (Não lógico): inverte o valor booleano de uma expressão, tornando verdadeiro falso e falso verdadeiro.

4. `==` (Igualdade): retorna verdadeiro se o valor de duas expressões forem iguais.

5. `!=` (Diferença): retorna verdadeiro se o valor de duas expressões não forem iguais.

6. `===` (Identidade): retorna verdadeiro se o valor e o tipo das duas expressões forem iguais.

7. `!==` (Não identidade): retorna verdadeiro se o valor ou o tipo das duas expressões não forem iguais.
   
   8. `>` (Maior que): retorna verdadeiro se a expressão do lado esquerdo for maior que a expressão do lado direito.

8. `<` (Menor que): retorna verdadeiro se a expressão do lado esquerdo for menor que a expressão do lado direito.

9. `>=` (Maior ou igual a): retorna verdadeiro se a expressão do lado esquerdo for maior ou igual a expressão do lado direito.

10. `<=` (Menor ou igual a): retorna verdadeiro se a expressão do lado esquerdo for menor ou igual a expressão do lado direito.

Estes operadores são usados em combinação com outras expressões para controlar o fluxo de programa e tomar decisões baseadas em condições verdadeiras ou falsas.

Exemplos:

```javascript
const age = 44
console.log(age == 44)//true
console.log(age == 34)//false
console.log(age != 34)//true (age não é igual a 34? express)
```

No terceiro console.log() acima a expressão retorna true porque foi utilizado um verificador de igualdade de negação '!=' (diferente ou não igual).

##### Métodos que retornam booleanos

Em JavaScript, há muitos métodos que retornam valores booleanos. Alguns exemplos incluem:

1. `Array.includes()`: retorna verdadeiro se o elemento especificado estiver presente no array.
2. `String.startsWith()`: retorna verdadeiro se a string começar com a sequência de caracteres especificada.
3. `String.endsWith()`: retorna verdadeiro se a string terminar com a sequência de caracteres especificada.
4. `String.includes()`: retorna verdadeiro se a string incluir a sequência de caracteres especificada.
5. `Number.isNaN()`: retorna verdadeiro se o valor for NaN (Not-A-Number).
6. `Number.isFinite()`: retorna verdadeiro se o valor for um número finito.
7. `Object.is()`: retorna verdadeiro se os valores das expressões forem iguais.

Estes métodos são úteis para verificar se determinadas condições são verdadeiras ou falsas e tomar decisões baseadas nessas verificações.

Exemplos:

```javascript
let helloWorld = "Hello, world!";
let helo = helloWorld.includes("world");
console.log(helo); // retorna true

let num = 42;
let result = Number.isFinite(num);
console.log(result); // retorna true

let arrNumbers = [1, 2, 3, 4, 5];
let has3 = arrNumbers.includes(3);
console.log(has3); // retorna true

let emailList = ["user1@example.com", "user2@example.com", "user3@example.com"];
let email = "user2@example.com";
let result = emailList.includes(email);
console.log(result); // retorna true
```

O método .include() pode ser usado tanto em string como em arrays.

Ao comparar caracteres no javascript ele segue uma hierarquia onde, letras minusculas são maiores que as letras maiúsculas e todos os caracteres são verificados em ordem alfabética.

Exemplo:

```javascript
console.log('a' > 'A')//true
console.log('a' == 'A')//false
console.log('b' > 'a')//true
console.log('B' > 'a')//false
```
