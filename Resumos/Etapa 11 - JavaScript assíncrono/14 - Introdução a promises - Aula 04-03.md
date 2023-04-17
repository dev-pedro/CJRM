<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Introdução a promises - Aula 04-03

### Resumo

Promises são um recurso importante do JavaScript que permitem a execução de operações assíncronas. Em vez de bloquear a execução do código enquanto uma operação é realizada, as Promises permitem que outras operações sejam executadas enquanto a operação assíncrona é processada em segundo plano.

Uma Promise representa um valor que pode não estar disponível ainda, mas que será eventualmente resolvido ou rejeitado. Quando uma Promise é resolvida, o valor resultante é passado para o manipulador de sucesso da Promise. Se a Promise é rejeitada, o valor resultante é passado para o manipulador de erro.

Existem três estados possíveis para uma Promise:

- Pending: estado inicial da Promise, quando ela ainda não foi resolvida ou rejeitada;
- Fulfilled: estado da Promise quando ela é resolvida com sucesso;
- Rejected: estado da Promise quando ela é rejeitada.

A seguir, um exemplo simples de como criar e usar uma Promise em JavaScript:

```javascript
// Criando uma Promise
const minhaPromise = new Promise((resolve, reject) => {
  // executar uma operação assíncrona
  setTimeout(() => {
    // se a operação for bem sucedida, resolva a Promise com um valor
    resolve('Operação bem sucedida!');
    
    // caso contrário, rejeite a Promise com uma mensagem de erro
    // reject('A operação falhou!');
  }, 2000);
});

// Usando a Promise
minhaPromise
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });
```

Neste exemplo, uma Promise é criada com uma operação assíncrona que será resolvida com sucesso após 2 segundos. Em seguida, a Promise é usada com o método `.then()` para tratar o valor resultante da Promise e o método `.catch()` para lidar com erros, caso a Promise seja rejeitada.

#### Quando o Método `reject` da `promise` é invocado?

O método `reject()` é usado para rejeitar uma Promise e indicar que ocorreu um erro durante a operação assíncrona. Esse método é executado quando há uma falha ou exceção durante o processamento da operação assíncrona.

Quando o método `reject()` é chamado, ele pode receber um parâmetro que representa a razão da rejeição da Promise. Essa razão é geralmente uma mensagem de erro ou um objeto que descreve o erro em detalhes.

Ao rejeitar uma Promise, o método `.catch()` pode ser usado para capturar o erro e realizar uma ação apropriada para lidar com ele. Por exemplo, podemos exibir uma mensagem de erro para o usuário ou realizar uma operação alternativa.

Abaixo está um exemplo simples que ilustra como usar o método `reject()`:

```javascript
const minhaPromise = new Promise((resolve, reject) => {
  // simulando uma operação assíncrona que falha
  setTimeout(() => {
    const erro = new Error('Ops, algo deu errado!');
    reject(erro);
  }, 2000);
});

minhaPromise
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro.message);
  });
```

Neste exemplo, a Promise é rejeitada após um tempo de 2 segundos e um objeto de erro é passado para o método `reject()`. Em seguida, o método `.catch()` é usado para capturar o erro e exibir sua mensagem na console.

### Código Usado Nessa Aula

```javascript
const getPokemon = url =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4

      if (isRequestOk) {
        const pokemonData = JSON.parse(request.responseText)
        resolve(pokemonData)
      }

      if (isRequestNotOk) {
        reject('Algo deu errado')
      }
    })

    request.open('GET', url)
    request.send()
  })

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(pokemonData => {
    console.log(pokemonData.name, pokemonData)
  })
  .catch(erro => {
    console.log(erro)
  })
```
