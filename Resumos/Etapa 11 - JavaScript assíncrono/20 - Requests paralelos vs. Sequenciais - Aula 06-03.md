<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Requests paralelos vs. Sequenciais - Aula 06-03

### Resumo

Em JavaScript, podemos fazer requisições de duas formas: sequencial ou paralela. A escolha entre as duas depende do objetivo que você está tentando alcançar.

Sequencial:

Quando as requisições são feitas de forma sequencial, elas são executadas uma após a outra. Isso significa que a próxima requisição só é iniciada após a finalização da anterior. Isso pode ser útil em situações em que você precisa de uma resposta de uma requisição antes de passar para a próxima. No entanto, esse método pode ser lento se houver muitas requisições.

Por exemplo, imagine que você precise obter dados de uma API e usar esses dados em uma outra requisição para a mesma API. Nesse caso, você precisaria fazer a primeira requisição, esperar pela resposta, processar os dados e, em seguida, fazer a segunda requisição.

Paralela:

Ao contrário da sequencial, as requisições paralelas são feitas simultaneamente, sem esperar a resposta de uma requisição para iniciar outra. Isso pode ser útil quando você precisa fazer várias requisições e não precisa esperar a resposta de uma para fazer a próxima.

No entanto, as requisições paralelas podem consumir muitos recursos do servidor e tornar a resposta lenta ou até mesmo interromper o serviço. Portanto, é importante considerar o número de requisições paralelas que você está fazendo e se isso pode impactar negativamente no desempenho do servidor.

Conclusão:

A escolha entre requisições sequenciais ou paralelas depende do objetivo que você está tentando alcançar. Se você precisa da resposta de uma requisição antes de iniciar outra, então a abordagem sequencial pode ser a melhor opção. Por outro lado, se você precisa fazer várias requisições e não precisa esperar a resposta de uma para iniciar a próxima, a abordagem paralela pode ser mais adequada. Em ambos os casos, é importante considerar o número de requisições e o impacto que isso pode ter no desempenho do servidor.



### Código Usado Nesta Aula

Javascript:

#### Exemplo de Request Sequencial:

```javascript
//Exemplo de request sequencial
const getPokemons = async () => {
  const bulbasaur = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = await fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = await fetch('https://pokeapi.co/api/v2/pokemon/7')

  console.log(await bulbasaur.json())
  console.log(await charmander.json())
  console.log(await squirtle.json())
}
```

O código acima define uma função assíncrona chamada `getPokemons`, que usa a API PokeAPI para obter informações sobre três pokémons diferentes: Bulbasaur, Charmander e Squirtle.

A função usa a palavra-chave `await` para aguardar a resolução de cada uma das três chamadas assíncronas à função `fetch`, que retorna uma promise contendo a resposta HTTP da URL fornecida.

Depois que cada uma das três chamadas assíncronas à `fetch` é resolvida, a função usa novamente a palavra-chave `await` para obter o conteúdo JSON da resposta para cada uma das três chamadas. Os dados são então impressos no console por meio da função `console.log`.

Dessa forma, o código obtém informações sobre os três primeiros pokémons da PokeAPI e os imprime no console.

#### Exemplo de Request Paralelo:

```javascript
//Exemplo de request paralelo
  const getPokemons = async () => {
    const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
    const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
    const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

    const results = await Promise.all([bulbasaur, charmander, squirtle])

    results.forEach(async response => console.log(await response.json()))
  }

  getPokemons()
```

O código acima define uma função assíncrona chamada `getPokemons` que usa a API PokeAPI para obter informações sobre três pokémons diferentes: Bulbasaur, Charmander e Squirtle.

A função usa a função `fetch` para fazer chamadas assíncronas para as três URLs que contêm informações sobre os pokémons, e armazena as três promises retornadas pelas chamadas `fetch` em variáveis separadas.

Em seguida, a função usa a função `Promise.all` para esperar que todas as três promises sejam resolvidas antes de continuar. Quando todas as três promises são resolvidas, o resultado é armazenado em um array chamado `results`.

Finalmente, a função itera sobre cada uma das respostas armazenadas em `results`, usando o método `forEach`, e usa a palavra-chave `await` para aguardar a resolução da promise retornada pela chamada `json()` em cada uma das respostas. Os dados são então impressos no console por meio da função `console.log`.

Dessa forma, o código obtém informações sobre os três primeiros pokémons da PokeAPI e os imprime no console, mas faz as três chamadas de forma assíncrona em paralelo, em vez de sequencialmente como no exemplo anterior.
