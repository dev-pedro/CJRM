<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Try/catch em requests e erros personalizados - Aula 06-05

### Resumo

### Código Usados Nesta Aula

Javascript:

```javascript
const getUsers = async () => {
  try {
    const response = await fetch('./json/users.json')

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados do usuário!')
    }

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

logUsers()
```

O código acima usa try/catch para lidar com erros que podem ocorrer durante uma requisição para buscar dados de um arquivo JSON e apresentá-los no console.

Aqui está uma explicação passo a passo do tratamento de erro neste código:

1. Primeiro, a função "getUsers" é definida como uma função assíncrona. Isso significa que ela retornará uma Promise, que será resolvida com os dados de usuário quando a operação de busca for concluída.

2. Dentro da função "getUsers", usamos o bloco try/catch para lidar com erros que podem ocorrer durante a busca dos dados do usuário. Na linha 3, estamos fazendo uma requisição usando o método fetch(), que retorna uma Promise que é resolvida com a resposta da requisição.

3. Na linha 5, estamos verificando se a resposta da requisição foi bem-sucedida, usando a propriedade "ok". Se a resposta não for bem-sucedida, lançamos uma exceção usando a palavra-chave "throw" e uma mensagem de erro personalizada.

4. Se a resposta for bem-sucedida, usamos o método json() para extrair os dados do usuário da resposta e retorná-los como uma Promise resolvida.

5. Se ocorrer algum erro durante a busca dos dados do usuário, o bloco catch será executado e o erro será capturado na variável "error". Neste exemplo, estamos apenas imprimindo o erro no console na linha 11.

6. Depois, definimos a função "logUsers", que chama a função "getUsers" e espera que ela retorne os dados do usuário. Quando a Promise for resolvida, os dados do usuário serão atribuídos à variável "users".

7. Finalmente, estamos chamando a função "logUsers" na linha 13 para buscar e apresentar os dados do usuário no console.

Em resumo, esse código usa try/catch para lidar com erros que podem ocorrer durante a busca dos dados do usuário e usa uma mensagem de erro personalizada para informar o usuário caso algo dê errado.

Em relação a requisições HTTP, é comum usar try/catch para lidar com erros, uma vez que essas operações podem falhar por uma variedade de motivos, como falta de conexão com a Internet, problemas no servidor ou erros de digitação no código.

#### Conteúdo Extra Aula

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados do usuário ${userId}: ${response.statusText}`);
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error(`Erro ao buscar dados do usuário ${userId}: ${error.message}`);
    throw new Error(`Erro ao buscar dados do usuário ${userId}`);
  }
} 
```

Explicando passo a passo:

1. A função "fetchUserData" é definida como uma função assíncrona que recebe um parâmetro "userId".

2. Dentro da função, usamos o bloco try/catch para lidar com erros que podem ocorrer durante a busca dos dados do usuário. Na linha 3, estamos fazendo uma requisição usando o método fetch(), que retorna uma Promise que é resolvida com a resposta da requisição.

3. Na linha 4, verificamos se a resposta da requisição foi bem-sucedida, usando a propriedade "ok". Se a resposta não for bem-sucedida, lançamos uma exceção usando a palavra-chave "throw" e uma mensagem de erro personalizada.

4. Se a resposta for bem-sucedida, usamos o método json() para extrair os dados do usuário da resposta e retorná-los como uma Promise resolvida.

5. Se ocorrer algum erro durante a busca dos dados do usuário, o bloco catch será executado e o erro será capturado na variável "error". Neste exemplo, estamos apenas imprimindo o erro no console na linha 10.

6. Depois, estamos lançando uma nova exceção com uma mensagem personalizada, que será capturada por qualquer código que chame a função "fetchUserData".

7. Finalmente, a função retorna os dados do usuário como uma Promise resolvida.

Resumindo, esse código usa try/catch para lidar com erros que podem ocorrer durante a busca dos dados do usuário usando a API Fetch do JavaScript. Ele usa uma mensagem de erro personalizada para informar o usuário caso algo dê errado e retorna os dados do usuário se a busca for bem-sucedida.
