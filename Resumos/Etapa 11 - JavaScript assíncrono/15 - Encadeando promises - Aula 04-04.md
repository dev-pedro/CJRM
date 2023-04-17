<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Encadeando promises - Aula 04-04

### Resumo

### Conteúdo Extra Aula

Encadear Promises é uma técnica muito comum em JavaScript para executar várias operações assíncronas em sequência. Isso permite que uma Promise comece após a conclusão de outra Promise e pode ser útil para manter o código organizado e fácil de entender.

Para encadear Promises, podemos usar o método `.then()` para conectar uma Promise à outra. Quando a primeira Promise é resolvida com sucesso, o valor resultante é passado como argumento para a próxima Promise através do método `.then()`. Se uma das Promises for rejeitada, a cadeia de Promises será interrompida e o método `.catch()` será acionado.

Abaixo está um exemplo de como encadear Promises em JavaScript:

```java
const minhaPromise1 = new Promise((resolve, reject) => {
  // operação assíncrona
  setTimeout(() => {
    resolve('primeiro resultado');
  }, 2000);
});

const minhaPromise2 = (resultado) => {
  console.log(resultado);
  return new Promise((resolve, reject) => {
    // outra operação assíncrona
    setTimeout(() => {
      resolve('segundo resultado');
    }, 2000);
  });
};

const minhaPromise3 = (resultado) => {
  console.log(resultado);
  return new Promise((resolve, reject) => {
    // mais uma operação assíncrona
    setTimeout(() => {
      resolve('terceiro resultado');
    }, 2000);
  });
};

minhaPromise1
  .then(minhaPromise2)
  .then(minhaPromise3)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });
```

Neste exemplo, três Promises são encadeadas usando o método `.then()`. Cada uma delas representa uma operação assíncrona diferente que deve ser realizada em sequência. Quando a primeira Promise é resolvida, o método `.then()` é usado para executar a próxima Promise, e assim por diante. O resultado final é exibido na console após a conclusão de todas as Promises encadeadas. Se ocorrer um erro em qualquer uma das Promises, o método `.catch()` será acionado.

### Código Usado Nesta Aula

```javascript
const getPokemon = url =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      const isRequestOk = request.readyState === 4 && request.status === 200
      const isRequestNotOk = request.readyState === 4

      if (isRequestOk) {
        const data = JSON.parse(request.responseText)
        resolve(data)
      }

      if (isRequestNotOk) {
        reject('Algo deu errado')
      }
    })

    request.open('GET', url)
    request.send()
  })

getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bublbasaur => {
    console.log(bublbasaur.name, bublbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander.name, charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(squirtle => console.log(squirtle.name, squirtle))
  .catch(erro => {
    console.log(erro)
  })
```
