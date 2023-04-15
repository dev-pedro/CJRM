<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Callback Hell (Pyramid of Doom) - Aula 03-05

### Resumo

### Código Usados Nesta Aula

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fazendo requests HTTP - Aula 02-03</title>
</head>
<body>
    
    <script src="app.js"></script>
</body>
</html>
```

Javascript:

```javascript
const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }

    if (isRequestNotOk) {
      callback('Não foi possível receber os dados da API', null)
    }
  })

  request.open('GET', url)
  request.send()
}

console.log(1)
console.log(2)

getTodos('./json/todos.json', (error, data) => {
  console.log('callback executado')
  console.log(data)
  getTodos('./json/todos-01.json', (error, data) => {
    console.log(data)
    getTodos('./json/todos-02.json', (error, data) => {
      console.log(data)
    })
  })
})

console.log(3)
console.log(4)

```

JSON `./json/todos.json`

```json
[
    {
        "myKey": "My key value",
        "myKey2": 7
    },
    {
        "myKey": "Other value",
        "myKey2": true
    },
    {
        "myKey": "Another value",
        "myKey2": null
    }
]
```

JSON `./json/todos-01.json`

```json
[
    {
        "myKey": "Pedro",
        "myKey2": 7
    },
    {
        "myKey": "Rose",
        "myKey2": true
    },
    {
        "myKey": "Another value",
        "myKey2": null
    }
]
```

JSON `./json/todos-02.json`

```json
[
    {
        "myKey": "júlia",
        "myKey2": 7
    },
    {
        "myKey": "Sara",
        "myKey2": true
    },
    {
        "myKey": "Alice",
        "myKey2": null
    }
]
```

### Conteúdo Extra Aula

Callback Hell, também conhecido como Pyramid of Doom, é um problema comum que pode ocorrer em código JavaScript quando várias chamadas de função assíncronas são aninhadas umas dentro das outras em callbacks.

Esse problema ocorre quando o código JavaScript começa a ficar profundamente aninhado dentro de callbacks, dificultando a legibilidade e manutenção do código. Quando isso acontece, o código pode se tornar muito difícil de entender e gerenciar.

Por exemplo, imagine que você queira fazer uma série de chamadas assíncronas para buscar dados de um servidor e, em seguida, manipulá-los. Você pode acabar com algo assim:

```javascript
getData1(function(data1) {
  getData2(function(data2) {
    getData3(function(data3) {
      // ...
    });
  });
});
```

Neste exemplo, a função `getData1` é chamada com um callback que, por sua vez, chama a função `getData2` com outro callback, que por sua vez, chama a função `getData3` com outro callback. Se você precisar adicionar mais chamadas assíncronas, esse aninhamento de callbacks pode se tornar ainda pior.

Para evitar o Callback Hell, você pode utilizar algumas técnicas como o uso de Promises, async/await ou bibliotecas como o Async.js.

Usando Promises, o exemplo acima poderia ser reescrito assim:

```javascript
getData1()
  .then(function(data1) {
    return getData2();
  })
  .then(function(data2) {
    return getData3();
  })
  .then(function(data3) {
    // ...
  });

```

Usando async/await, o exemplo poderia ser reescrito assim:

```javascript
async function getData() {
  const data1 = await getData1();
  const data2 = await getData2();
  const data3 = await getData3();
  // ...
}

getData();
```

Essas técnicas tornam o código mais legível e fácil de entender, reduzindo a profundidade dos callbacks e simplificando a lógica assíncrona.
