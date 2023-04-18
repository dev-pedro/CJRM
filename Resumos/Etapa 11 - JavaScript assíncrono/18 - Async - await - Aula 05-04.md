<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Async/await - Aula 05-04

### Resumo

Async/await é uma forma mais moderna de lidar com código assíncrono em JavaScript. Ele é baseado em Promises, uma forma de lidar com chamadas assíncronas no JavaScript.

O async é uma palavra-chave usada para criar funções assíncronas em JavaScript. Quando uma função é marcada como async, ela retorna uma Promise, mesmo que não tenha sido explicitamente definida. Dentro de uma função async, podemos usar a palavra-chave await para esperar o resultado de uma Promise antes de continuar com o restante do código.

Vamos ver um exemplo. Digamos que temos uma função que faz uma chamada assíncrona a um serviço de API, e retorna uma Promise. Usando o async/await, podemos escrever nosso código da seguinte forma:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}
```

Neste exemplo, estamos criando uma função fetchData() que é assíncrona. Dentro da função, estamos usando o await para esperar o resultado da chamada fetch() que retorna uma Promise. Em seguida, estamos usando o método json() da resposta para converter os dados em JSON e armazenando-os em uma variável chamada data.

Se ocorrer um erro durante a chamada fetch(), o bloco catch() será executado e o erro poderá ser tratado. Note que, embora a chamada fetch() retorne uma Promise, o uso do await torna o código mais simples e legível.

O uso do async/await é uma forma mais moderna e clara de lidar com código assíncrono em JavaScript, tornando o código mais fácil de ler e entender. Além disso, ele permite tratar erros de forma mais eficiente e pode melhorar a legibilidade e manutenção do código em geral.

### Código Usado Nesta Aula

```javascript
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()

  return users
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

logUsers()
```

Este código é um exemplo de como usar a API Fetch e async/await para obter uma lista de usuários de um servidor e, em seguida, exibi-los no console.

O código começa com a definição de uma função assíncrona getUsers(), que faz uma chamada assíncrona à API Fetch para buscar uma lista de usuários em formato JSON a partir da URL https://jsonplaceholder.typicode.com/users. A resposta é então convertida em JSON usando o método json() da resposta.

Depois disso, a lista de usuários é retornada da função getUsers().

Em seguida, há outra função assíncrona chamada logUsers(). Esta função também usa a palavra-chave await para aguardar a resposta da função getUsers() antes de exibir a lista de usuários no console usando o console.log().

Por fim, a função logUsers() é chamada para executar todo o processo, que envolve a busca dos usuários e a exibição deles no console.

Resumindo, este código faz o seguinte:

1. Define uma função assíncrona getUsers() que faz uma chamada à API Fetch para buscar uma lista de usuários em formato JSON.
2. Define uma função assíncrona logUsers() que usa a função getUsers() para obter a lista de usuários e, em seguida, exibi-los no console usando o console.log().
3. Chama a função logUsers() para executar todo o processo de busca e exibição de usuários no console.
