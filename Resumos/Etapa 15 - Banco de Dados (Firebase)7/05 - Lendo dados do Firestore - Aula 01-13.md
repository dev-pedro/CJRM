<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Lendo dados do Firestore - Aula 01-13

### Resumo

Para ler dados do Firestore, você precisa utilizar uma biblioteca ou SDK compatível com a linguagem de programação que está utilizando. Existem SDKs oficiais do Firestore disponíveis para várias linguagens, incluindo JavaScript, Python, Java, Go e muitas outras.

O código abaixo em JavaScript utiliza a biblioteca `firebase/firestore` e os métodos `collection` e `getDocs` para ler dados no Firestore. Vou explicar passo a passo o que está acontecendo no código:

1. Importação das dependências:

```javascript
import { collection, getDocs } from "firebase/firestore";
```

Este trecho de código importa as funções `collection` e `getDocs` do módulo "firebase/firestore". Essas funções serão utilizadas posteriormente para acessar e ler os dados no Firestore.

2. Leitura dos documentos da coleção "games":

```javascript
getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    // ...
  })
  .catch(console.log);
```

Aqui é realizada a leitura dos documentos da coleção "games" no Firestore. O método `collection(db, 'games')` cria uma referência para a coleção "games" no banco de dados `db`. Em seguida, o método `getDocs` é chamado para obter os documentos dessa coleção. Essa função retorna uma promessa (`Promise`) que é tratada por `then` para manipular o `querySnapshot` resultante.

3. Manipulação dos dados dos documentos:

```javascript
const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
  const { title, createdAt, developedBy } = doc.data();
  acc += `<li class="my-4">
    <h5>${title}</h5>
    
    <ul>
      <li>Desenvolvido por ${developedBy}</li>
      <li>Adicionado no banco em ${createdAt.toDate()}</li>
    </ul>
  </li>`;
  return acc;
}, '');
```

Neste trecho de código, é feita a iteração sobre os documentos retornados pelo `querySnapshot`. Para cada documento, as propriedades `title`, `createdAt` e `developedBy` são extraídas usando a função `doc.data()`. Em seguida, essas informações são usadas para criar uma string HTML que representa cada jogo. Essa string é acumulada na variável `gamesLis` usando o método `reduce`. O resultado final será uma lista de itens `<li>` contendo as informações de cada jogo.

4. Atualização do elemento HTML com a lista de jogos:

```javascript
const lis = document.querySelector('[data-js="games-list"]');
lis.innerHTML = gamesLis;
```

Por fim, o código seleciona o elemento HTML que possui o atributo `data-js` igual a "games-list" usando `document.querySelector`. Em seguida, ele atualiza o conteúdo desse elemento com a lista de jogos criada anteriormente, atribuindo a string `gamesLis` à propriedade `innerHTML` do elemento.

Caso ocorra algum erro durante o processo, ele será capturado pelo `catch` e a mensagem de erro será exibida no console.

Esse código em JavaScript lê os documentos da coleção "games" no Firestore e exibe as informações desses jogos em uma lista HTML.

### Códigos Usados na Aula

HTML:

```html
<!DOCTYPE html>
<html lang="pt_BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Banco de Dados - Firebase</title>
</head>
<body>
    <div class="container text-white my-5">
        <h2>Games</h2>
    
        <ul data-js="games-list">
          
        </ul>
    
        <form>
          <label for="game">Adicionar game</label>
    
          <div class="input-group">
            <input class="form-control bg-transparent text-white" type="text" name="game" placeholder="Ex: Ghost of Tsushima" required autofocus>
            <input class="btn btn-primary" type="submit" value="Adicionar">
          </div>
        </form>
      </div>
    <script type="module" src="app.js"></script>
</body>
</html>
```

CSS:

```css
body {
    background-color: #212529;
  }
```

Javascript:

```javascript
...
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

console.log(db)

getDocs(collection(db, 'games'))
  .then(querySnapshot => {
    const gamesLis = querySnapshot.docs.reduce((acc, doc) => {
      const { title, createdAt, developedBy } = doc.data()
      acc += `<li class="my-4">
      <h5>${title}</h5>
      
      <ul>
        <li>Desenvolvido por ${developedBy}</li>
        <li>Adicionado no banco em ${createdAt.toDate()}</li>
      </ul>
    </li>`
      return acc
    }, '')

    const lis = document.querySelector('[data-js="games-list"]')
    lis.innerHTML = gamesLis
  })
  .catch(console.log())

```
