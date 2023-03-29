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

# 

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
