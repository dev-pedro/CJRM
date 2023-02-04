<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Comparações com igualdade estrita - Aula 04-03

### Resumo

Os comparadores de igualdade '==' e não igualdade '!=', ao serem usados ambos executam a conversão de tipos antes da comparação dos valores, exemplos:

```javascript
const age = 44
//igual a
console.log(age == 44)//true
consloe.log(age == '44')//true
//diferente de 
console.log(age == 44)//false
consloe.log(age == '44')//false
```

Nos exemplos acima o javascript converte os dados para number antes de compara-los por isso podemos ver no console os resultados ao lado, como no exemplo.

##### Comparação Estrita (Strict Comparison)

A comparação estrita (strict comparison) é uma comparação que verifica se dois valores são iguais e se são do mesmo tipo. Em JavaScript, a comparação estrita é feita usando o operador `===` e `!==`, exemplo:

```javascript
const age = 44
//igual a
console.log(age === 44)//true
consloe.log(age === '44')//false
//diferente de 
console.log(age !== 44)//false
consloe.log(age !== '44')//true
```

A forma de executar comparações mais segura e eficaz é usando a *comparação estrita* porque isso vai fazer com que seja comparado os dados e os tipos dos dados como se pode ver nos exemplos acima.
