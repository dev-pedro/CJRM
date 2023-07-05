<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Conectando o Front-end ao Firebase - Aula 01-12

### Resumo

Para conectar o front-end ao Firebase usando JavaScript, você precisará seguir alguns passos:

1. Crie um projeto no Firebase: Vá para o console do Firebase ([https://console.firebase.google.com/](https://console.firebase.google.com/)) e crie um novo projeto. Dê um nome ao projeto e siga as etapas para configurá-lo.

2. Adicione o SDK do Firebase ao seu projeto: No console do Firebase, vá para as configurações do projeto e role até a seção "Seus aplicativos". Clique em "Adicionar app" e selecione a opção da web (</>). Forneça um nome para o aplicativo da web e registre-o.

3. Obtenha as configurações do SDK: Após registrar o aplicativo da web, você verá um código com a configuração do SDK. Copie as informações contidas em `firebaseConfig`.

4. Adicione o Firebase SDK ao seu projeto: No seu arquivo HTML, adicione o seguinte código para importar o SDK do Firebase: 

### Códigos Usados

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
    
        <ul>
          <li>Animal Crossing: New Horizons</li>
          <li>Final Fantasy VII Remake</li>
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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "testing-firebase-e7968.firebaseapp.com",
  projectId: "testing-firebase-e7968",
  storageBucket: "testing-firebase-e7968.appspot.com",
  messagingSenderId: "555490413778",
  appId: "SUA_ID_APP",
  measurementId: "G-K2F9FZS609"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

console.log(db)
```

### Links

[Adicionar o Firebase ao projeto JavaScript](https://firebase.google.com/docs/web/setup?authuser=0&hl=pt)

[Documentação do Firebase](https://firebase.google.com/docs)
