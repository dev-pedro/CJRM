<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Timestamps e comparações - Aula 01-03

### Resumo

#### Curiosidade: Timestamp - getTime()

O método `getTime()` em JavaScript retorna o número de milissegundos desde 1º de janeiro de 1970 00:00:00 UTC até a data em que é chamado. Essa data específica é usada como ponto de partida para o cálculo do tempo decorrido.

Essa data de referência é conhecida como "Época Unix" e é amplamente utilizada em sistemas operacionais baseados em Unix, bem como em linguagens de programação como JavaScript, Python e muitas outras. A escolha desta data se deu por razões históricas e práticas, em parte devido ao fato de que a maioria dos sistemas operacionais Unix foi criada a partir da década de 1970.

Além disso, a escolha da data de 1º de janeiro de 1970 como ponto de referência para o cálculo do tempo decorrido também tem vantagens práticas, pois permite que os valores de tempo sejam representados em um número de 32 bits com um intervalo de tempo de mais de 68 anos. Isso é útil para muitas aplicações que precisam lidar com tempo em seus cálculos, como sistemas operacionais, bancos de dados, aplicativos da web, entre outros.

#### Alguns exemplos:

Como trabalhar com timestamps e fazer comparações em JavaScript:

1. Como obter o timestamp atual:

```javascript
const timestampAtual = Date.now();
```

2. Como criar um objeto Date a partir de um timestamp:

```javascript
const timestamp = 1648800000000;
const data = new Date(timestamp);
```

3. Como comparar dois timestamps para ver qual é mais recente:

```javascript
const timestamp1 = 1648800000000;
const timestamp2 = 1648900000000;

if (timestamp1 < timestamp2) {
  console.log("timestamp2 é mais recente");
} else if (timestamp1 > timestamp2) {
  console.log("timestamp1 é mais recente");
} else {
  console.log("Os timestamps são iguais");
}
```

4. Como verificar se um timestamp está dentro de um intervalo de tempo:

```javascript
const timestamp = 1648800000000;
const inicioIntervalo = 1648700000000;
const fimIntervalo = 1648900000000;

if (timestamp >= inicioIntervalo && timestamp <= fimIntervalo) {
  console.log("O timestamp está dentro do intervalo");
} else {
  console.log("O timestamp está fora do intervalo");
}
```

5. Como converter um timestamp em uma data formatada:

```javascript
const timestamp = 1648800000000;
const data = new Date(timestamp);
const dataFormatada = data.toLocaleDateString();

console.log(dataFormatada);
```

#### Códigos usados nessa aula

Javascript:

```javascript
const bornDay = new Date('Jun 29 1978 10:45:00')
const present = new Date()

const difference = present.getTime() - bornDay.getTime()
console.log(difference)

const seconds = Math.round(difference / 1000)
//total de segundos desde da data armazenada na const 'bornDay
console.log({seconds})

//total de minutos desde da data armazenada na const 'bornDay
const minutes = Math.round(seconds / 60)
console.log({minutes})

//total de horas desde da data armazenada na const 'bornDay
const hours = Math.round(minutes / 60)
console.log({hours})

//total de dias desde da data armazenada na const 'bornDay
const days = Math.round(hours / 60)
console.log({days})

console.log(`Pedro, desde de o dia em que você nasceu se passaram ${days} dias!`)

const timeStamp = bornDay

console.log(new Date(timeStamp))

/*Sáida no console
1412285488418
Object { seconds: 1412285488 }
Object { minutes: 23538091 }
Object { hours: 392302 }
Object { days: 6538 }
Pedro, desde de o dia em que você nasceu se passaram 6538 dias!
Date Thu Jun 29 1978 10:45:00 GMT-0300 (Horário Padrão de Brasília)
*/
```
