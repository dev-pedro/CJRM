<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Conversão de tipos e 3 avisos - Aula 04-04

### Resumo

##### Conversão de tipos

Em alguns casos é útil e necessário a conversão de alguns dados por exemplo, podemos ter uma string com o valor '100' e  por algum motivo se quisermos atribuir a essa string + 1 veja abaixo:

```javascript
let score = '100'

console.log(score + 1)//1001 - concatenação
score = Number(score)//converte score para number

console.log(score + 1)//101
```

Para verificar o tipo de dado em uma variável podemos usar o operador typeof.

```javascript
let score = '100'
console.log(score, typeof score)//100 string

score = Number(score)//converte score para number

console.log(score, typeof score)//100 number
```

Ao tentar converter uma string em número o javascript define como NaN(Not a Number) veja:

```javascript
const crazuConversion = Number('Maça')//NaN Not a Number

const convertedNumber = String(97)//97 se torna uma string

const booleanConversion = Boolean(10)//true
```

Uma observação na conversão de booleanos é que a função `Boolean()` em JavaScript converte os seguintes valores para `false`:

- `0` (zero)
- `-0` (zero negativo)
- `null`
- `undefined`
- `NaN` (Not a Number)
- `'' ""` (string vazia)

Todos os outros valores são convertidos para `true` pela função `Boolean()`.

Exemplos:

```javascript
console.log(Boolean(0)); // retorna false
console.log(Boolean(-0)); // retorna false
console.log(Boolean(null)); // retorna false
console.log(Boolean(undefined)); // retorna false
console.log(Boolean(NaN)); // retorna false
console.log(Boolean('')); // retorna false

console.log(Boolean('hello')); // retorna true
console.log(Boolean({})); // retorna true
console.log(Boolean([])); // retorna true
```

Conversões explicitas são quando quando nós fazemos as comparações dos dados, conversões implícita quando javascript verifica os dados por baixo dos panos como foi visto na aula passada. 
