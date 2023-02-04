<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Strings - Aula 02-03

### Resumo

##### Strings

Strings podem ser letras, números ou qualquer outro carácter, elas sempre são armazenadas dentro de aspas simples ou duplas, dica:

    -- usar aspas simples sempre que declarar suas strings, você não vai precisar apertar a tecla shift no teclado e seu código vai ficar menos carregado visualmente.

##### Concatenação

Para juntar duas strings ou mais usa-se o sinal de '+' ex:

```javascript
const firstName = 'Pedro'
const lastName = 'Santos'
const fullName = firstName + lastName
console.log(fullName) // será exibido no console 'PedroSantos'
                      //(sem as aspas)
/*
O nome seŕa exibido sem espaço entre os nomes porque
não foi acrecentado uma string vazia entre os nomes.
Para corrigir isso basta adicionar uma string vazia como no 
exemplo abaixo
*/
const fullName = firstName + ' ' + lastName
console.log(fullName) // será exibido no console 'Pedro Henrique' 
                      //(sem as aspas)
```

##### Localizar um Carácter

Para exibir um carácter específico dentro de uma string utiliza-se [] logo após a 'const' e dentro dos colchetes coloca o numero da posição desejada por exemplo:

```javascript
const firstName = 'Rosimeire'
console.log(firstName[0]) // mostra no console 'R' (sem as aspas)
```

##### Métodos se Strings

Existem diversos métodos para se manipular 'strings' um deles é o 'length' , este método é uma pr``opriedade que retorna o comprimento da string.

```javascript
const name = 'Alice'
console.log(name.length) // será exibido no console 5
```

*ATENÇÃO: Espaços em branco são contados também.*

Existe uma diferença técnica entre métodos e funções:

    -- uma função é um pedaço de código que executa uma ação específica.

    -- um método é uma função que está associada a um objeto ou tipo de dado em particular.

Em essência as duas palavras tem o mesmo significado método/função, um exemplo de método é o 'toUpperCase()'.

Esse método faz com que todos os caracteres de uma string fiquem maiúsculos.

```javascript
const name = 'Pedro'
console.log(name.toUpperCase()) // exibe no console 'PEDRO' (sem as aspas)
```

Outro método é o 'to.LowerCase()' esse método faz com que todos os carácteres da string fiquem em minúsculos.

```javascript
const firstName = 'Antônio'
console.log(firstName.toLowerCase()) // exibe no console 'antônio' 
                                     //(sem as aspas)
```

Para diferenciar um método de uma propriedade é só observar sua invocação, exemplo:

```javascript
const userName = 'pedro'
userName.length //propriedade de comprimento da string
userName.toUpperCase() //método que retorna outra string maiúscula
```

##### .IndexOff()

O método 'indexOff()' encontra o index (posição) do carácter que você especificar dentro dos parênteses, se estiver passando uma string dentro dos parenteses não esquecer de colocar os caracteres envolvidos em aspas.

```javascript
const email = 'email@gmail.com'
console.log(email.indexOff('@') //será exibido no console 5
```

Obs:

    -- o que se está passando dentro dos parenteses é um argumento e não parâmetros, argumento é diferente de parâmetros.

    -- qualquer carácter dentro que estiver envolvido dentro de aspas será considerado uma string, mesmo que ele seja um número.

Os parâmetros são variáveis declaradas dentro de uma função, enquanto os argumentos são os valores passados para essas variáveis quando a função é chamada. Por exemplo, em uma função "soma(a, b)" os parâmetros são "a" e "b" e os argumentos seriam os valores passados na chamada da função, como "soma(2, 3)" os argumentos seriam 2 e 3.
