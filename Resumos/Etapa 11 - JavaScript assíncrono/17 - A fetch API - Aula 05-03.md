<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# A fetch API - Aula 05-03

### Resumo

O fetch é uma API do JavaScript que permite fazer requisições HTTP assíncronas para buscar recursos em servidores da web. Ele é um método mais moderno e poderoso do que o antigo XMLHttpRequest, permitindo que o desenvolvedor possa tratar as respostas de forma mais clara e com mais flexibilidade.

O fetch é uma função global que retorna uma Promise, e seu uso é simples. Aqui está um exemplo de como usá-lo para fazer uma requisição GET para a API do GitHub:

```javascript
fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

Neste exemplo, estamos buscando a lista de usuários do GitHub. A função fetch recebe como parâmetro a URL do servidor que desejamos fazer a requisição. A Promise retornada pela função fetch retorna um objeto Response, que pode ser tratado com os métodos then() e catch().

O método then() é usado para tratar a resposta da requisição. Neste exemplo, estamos tratando a resposta com o método json(), que converte a resposta em um objeto JSON. Em seguida, estamos imprimindo o resultado no console. O método catch() é usado para tratar erros na requisição.

### Os Passos para uma requisição com o fetch()

O fetch é uma API do JavaScript que permite fazer requisições HTTP assíncronas para buscar recursos em servidores da web. Os passos para utilizar o fetch são os seguintes:

1. Criar uma instância do objeto fetch e passar a URL do recurso que você deseja buscar como argumento. Isso retorna uma Promise.

```javascript
fetch('https://api.example.com/data')
```

2. Tratar a resposta da Promise usando os métodos then() e catch(). O método then() é usado para tratar a resposta da requisição, e o método catch() é usado para tratar erros na requisição.

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    // Tratar a resposta
  })
  .catch(error => {
    // Tratar o erro
  })
```

3. Converter a resposta em um formato utilizável, como JSON ou texto. Para isso, podemos usar métodos como json() ou text().

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Tratar os dados em formato JSON
  })
  .catch(error => {
    // Tratar o erro
  })
```

4. Tratar possíveis erros na requisição usando o método catch(). Por exemplo, se a URL do recurso estiver incorreta ou se o servidor estiver inativo, o método catch() será executado e o erro poderá ser tratado.

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Tratar os dados em formato JSON
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
  })
```

5. Enviar dados para o servidor usando o método POST. Para isso, devemos passar um objeto de opções como segundo argumento da função fetch, que contém as opções da requisição, como o método HTTP usado (POST neste caso), o cabeçalho com o tipo de conteúdo e o corpo da requisição.

```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 })
})
  .then(response => {
    // Tratar a resposta
  })
  .catch(error => {
    // Tratar o erro
  })
```

Esses são os passos básicos para utilizar o fetch em JavaScript. É importante lembrar que o fetch é assíncrono e retorna uma Promise, o que significa que devemos tratar a resposta e os erros de forma adequada usando os métodos then() e catch().

### Código Usado Nesta Aula

Javascript:

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log('Response', response)
    return response.json()
  })
  .then(users => console.log(users))
  .catch(error => console.log(error))
```
