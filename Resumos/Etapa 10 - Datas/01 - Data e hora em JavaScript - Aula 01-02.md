<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Data e hora em JavaScript - Aula 01-02

### Resumo

[Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

Em JavaScript, é possível obter a data e hora atual do sistema usando o objeto `Date()`, aqui está um exemplo simples que mostra como obter a data e hora atuais:

```javascript
const agora = new Date();
console.log(agora);
```

Este código irá imprimir a data e hora atuais no console.

Para formatar a data e hora em um formato específico, você pode usar os métodos fornecidos pelo objeto `Date()`. Por exemplo, para exibir a data e hora no formato `dd/mm/yyyy hh:mm:ss`, você pode usar o seguinte código:

```javascript
const agora = new Date();

const dia = agora.getDate().toString().padStart(2, '0');
const mes = (agora.getMonth() + 1).toString().padStart(2, '0');
const ano = agora.getFullYear();
const hora = agora.getHours().toString().padStart(2, '0');
const minutos = agora.getMinutes().toString().padStart(2, '0');
const segundos = agora.getSeconds().toString().padStart(2, '0');

console.log(`${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`);
```

Este código irá imprimir a data e hora no formato `dd/mm/yyyy hh:mm:ss`.

### A lei de pareto nos metodos Date()

A Lei de Pareto também pode ser aplicada aos métodos do objeto `Date()` em JavaScript. É provável que a maioria dos desenvolvedores use apenas uma pequena porcentagem desses métodos na maioria dos casos.

De acordo com a Lei de Pareto, podemos dizer que cerca de 20% dos métodos do objeto `Date()` são responsáveis por 80% dos casos em que os métodos são usados. Esses métodos são os mais comuns e mais úteis na maioria das situações, e incluem:

1. `getFullYear()`: retorna o ano completo (quatro dígitos) de uma data
2. `getMonth()`: retorna o mês de uma data (0 - Janeiro, 1 - Fevereiro, etc.)
3. `getDate()`: retorna o dia do mês de uma data (1 - 31)
4. `getDay()`: retorna o dia da semana de uma data (0 - Domingo, 1 - Segunda, etc.)
5. `getHours()`: retorna a hora de uma data (0 - 23)
6. `getMinutes()`: retorna os minutos de uma data (0 - 59)
7. `getSeconds()`: retorna os segundos de uma data (0 - 59)
8. `getTime()`: retorna o número de milissegundos desde 1º de janeiro de 1970

Embora haja muitos outros métodos do objeto `Date()` disponíveis, eles são geralmente usados com menos frequência do que os métodos mais comuns. No entanto, é importante lembrar que a seleção adequada de métodos pode ter um grande impacto na eficiência e precisão do seu código JavaScript. É importante conhecer bem os diferentes métodos do objeto `Date()` disponíveis e escolher o mais adequado para cada caso específico.

#### Curiosidade: Timestamp - getTime()

O método `getTime()` em JavaScript retorna o número de milissegundos desde 1º de janeiro de 1970 00:00:00 UTC até a data em que é chamado. Essa data específica é usada como ponto de partida para o cálculo do tempo decorrido.

Essa data de referência é conhecida como "Época Unix" e é amplamente utilizada em sistemas operacionais baseados em Unix, bem como em linguagens de programação como JavaScript, Python e muitas outras. A escolha desta data se deu por razões históricas e práticas, em parte devido ao fato de que a maioria dos sistemas operacionais Unix foi criada a partir da década de 1970.

Além disso, a escolha da data de 1º de janeiro de 1970 como ponto de referência para o cálculo do tempo decorrido também tem vantagens práticas, pois permite que os valores de tempo sejam representados em um número de 32 bits com um intervalo de tempo de mais de 68 anos. Isso é útil para muitas aplicações que precisam lidar com tempo em seus cálculos, como sistemas operacionais, bancos de dados, aplicativos da web, entre outros.

#### Códigos usados na aula

Javascript:

```javascript
const present = new Date()

console.log(present)

console.log('getFullYear: ', present.getFullYear())
console.log('getMonth: ', present.getMonth())
console.log('getDate: ', present.getDate())
console.log('getDay: ', present.getDay())
console.log('getHours: ', present.getHours())
console.log('getMinutes: ', present.getMinutes())
console.log('getSeconds: ', present.getSeconds())

console.log('gettimestamp: ', present.getTime())

console.log('toDateString: ', present.toDateString())


/* saída no console nos testes
Date Wed Mar 29 2023 10:27:37 GMT-0300 (Horário Padrão de Brasília)
app.js:3:9
getFullYear:  2023 app.js:5:9
getMonth:  2 app.js:6:9
getDate:  29 app.js:7:9
getDay:  3 app.js:8:9
getHours:  10 app.js:9:9
getMinutes:  27 app.js:10:9
getSeconds:  37 app.js:11:9
gettimestamp:  1680096457638 app.js:13:9
toDateString:  Wed Mar 29 2023
*/
```

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datas</title>
</head>
<body>

    <script src="/app.js"></script>
</body>
</html>
```
