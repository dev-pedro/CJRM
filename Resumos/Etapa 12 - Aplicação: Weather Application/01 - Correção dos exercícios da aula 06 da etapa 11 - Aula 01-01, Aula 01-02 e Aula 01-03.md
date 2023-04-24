<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Correção dos exercícios da aula 06 da etapa 11 - Aula 01-01 / Aula 01-02 / Aula 01-03

### Resumo

### Código Usado Neste Exercício

HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./style.css" />
    <title>Testando a API do GIPHY</title>
  </head>
  <body>
    <h1>Testando a API do GIPHY</h1>

    <main>
      <form>
        <label for="gif">Gif</label>
        <input type="search" name="search" autofocus />

        <button type="submit">Buscar</button>
      </form>

      <div></div>
    </main>

    <script src="./app.js"></script>
  </body>
</html>

```

CSS:

```css
html {
  font-size: 20px;
  line-height: 1.6;
  font-family: Roboto, sans-serif;
}

img {
  width: 25%;
  max-width: 25%;
  margin-left: 8px;
  
}
```

Javascript:

```javascript
/*
  Neste exercício, vamos praticar um pouco do que vimos até aqui, através da 
  API do GIPHY, que é um website de GIFs (https://giphy.com/).

  - Seu desafio é implementar uma funcionalidade de busca dos GIFs. Quando o 
    usuário digitar o termo de busca no input e pressionar enter, um GIF deve 
    ser exibido na tela. Como neste exemplo: https://youtu.be/RHe-uCJGCeA
  - Observe que o GIF mais recente é inserido acima dos GIFs anteriores;
  - Para fazer requests para a API do GIPHY, você precisará de uma API key. 
    Para obtê-la, siga os seguintes passos:
    - Acesse https://developers.giphy.com/dashboard/ e faça o login;
    - No Dashboard, clique em "Create an App", clique em "API Selected" e em 
      "Next Step";
    - Dê um nome e descrição para o app e crie-o;
    - Clique no código da API key para copiá-la;
  - O submit do form deve ser feito para o endpoint abaixo. Atente-se para os 2
    [PLACEHOLDERS] que devem ser substituídos:
    - https://api.giphy.com/v1/gifs/search?api_key=[SUA_CHAVE_DA_API_AQUI]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - https://api.giphy.com/v1/gifs/search?api_key=[0tUkKl666idvqPzrrBkfNk100VpoP9oM]&limit=1&q=[VALOR_INSERIDO_NO_INPUT]
    - Se quiser testar outras possibilidades, os endpoints da API estão 
      listados na documentação: https://developers.giphy.com/docs/api/endpoint#search
  - Ignore os avisos no console. Para limpá-lo, pressione "ctrl + L".
*/

const form = document.querySelector('form')
const GIFSContainer = document.querySelector('div')

const apiKey = '0tUkKl666idvqPzrrBkfNk100VpoP9oM'
const getGIPHYApiUrl = (gifName, quantity = 1) =>
  `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=${quantity}&q=${gifName}`

const generateGIFImg = GIFData => {
  const img = document.createElement('img')
  GIFData.forEach(gif => {
    img.setAttribute('src', gif.images.downsized.url)
    img.setAttribute('alt', gif.title)
  })
  return img
}

const fetchGIF = async inputValue => {
  try {
    const GIPHYApiUrl = getGIPHYApiUrl(inputValue)
    const response = await fetch(GIPHYApiUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados!')
    }

    return response.json()
  } catch (error) {
    alert(`Erro: ${error.message}`)
  }
}

const insertGifdIntoDOM = async inputValue => {
  const GIFData = await fetchGIF(inputValue)

  if (GIFData) {
    const img = generateGIFImg(GIFData.data)
    GIFSContainer.insertAdjacentElement('afterbegin', img)
    form.reset()
  }
}

form.addEventListener('submit', event => {
  event.preventDefault()
  const inputValue = event.target.search.value

  insertGifdIntoDOM(inputValue)
})
```
