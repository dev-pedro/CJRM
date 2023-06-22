<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Trabalhando com JSON (JavaScript Object Notation) - Aula 03-04

### Resumo

### Códigos Usados Nesta Aula

```javascript
const getTodos = callback => {
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

  request.open('GET', './todos.json')
  request.send()
}

console.log(1)
console.log(2)

getTodos((error, data) => {
  console.log('callback executado')

  if (error) {
    console.log(error)
    return
  }

  console.log(data)
})

console.log(3)
console.log(4)
```

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

JSON:

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

### Conteúdo Extra Aula

JSON, ou JavaScript Object Notation, é um formato de intercâmbio de dados leve e fácil de ler e escrever para máquinas e seres humanos. Ele é amplamente utilizado em aplicações web como forma de enviar e receber dados.

Para trabalhar com JSON em JavaScript, você pode utilizar os métodos nativos `JSON.parse()` e `JSON.stringify()`. O `JSON.parse()` é utilizado para converter uma string JSON em um objeto JavaScript, enquanto o `JSON.stringify()` é utilizado para converter um objeto JavaScript em uma string JSON.

Por exemplo, vamos supor que você tem uma string JSON como esta:

```json
{
  "nome": "João",
  "idade": 30,
  "endereco": {
    "rua": "Rua A",
    "numero": 123
  },
  "telefones": [
    "1111-1111",
    "2222-2222"
  ]
}
```

Para converter essa string em um objeto JavaScript, você pode fazer o seguinte:

```javascript
const jsonString = '{ "nome": "João", "idade": 30, "endereco": { "rua": "Rua A", "numero": 123 }, "telefones": [ "1111-1111", "2222-2222" ] }';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject); // { nome: "João", idade: 30, endereco: { rua: "Rua A", numero: 123 }, telefones: [ "1111-1111", "2222-2222" ] }
```

Da mesma forma, para converter um objeto JavaScript em uma string JSON, você pode fazer o seguinte:

```javascript
const jsonObject = {
  nome: "João",
  idade: 30,
  endereco: {
    rua: "Rua A",
    numero: 123
  },
  telefones: [
    "1111-1111",
    "2222-2222"
  ]
};

const jsonString = JSON.stringify(jsonObject);

console.log(jsonString); // '{ "nome": "João", "idade": 30, "endereco": { "rua": "Rua A", "numero": 123 }, "telefones": [ "1111-1111", "2222-2222" ] }'
```

Esses métodos são úteis para trabalhar com APIs que retornam dados em formato JSON, por exemplo. Eles permitem que você converta os dados recebidos em objetos JavaScript que podem ser facilmente manipulados e exibidos em sua aplicação.
