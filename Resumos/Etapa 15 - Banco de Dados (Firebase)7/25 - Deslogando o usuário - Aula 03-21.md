<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Deslogando o usuário - Aula 03-21

### Resumo

Para deslogar (fazer logout) do usuário no Firebase, você pode usar o método `signOut()` fornecido pelo serviço de autenticação do Firebase. Aqui está um exemplo de como fazer isso:

```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';
import { getAuth, signOut as firebaseSignOut } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';

// Configuração do Firebase (mesmo código da configuração)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para fazer logout usando async/await
async function signOut() {
  try {
    await firebaseSignOut(auth);
    console.log('Usuário deslogado com sucesso.');
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }
}

// Chame a função de logout
signOut();
```

Neste exemplo, a função `signOut` é definida como assíncrona e utiliza o `await` ao chamar `firebaseSignOut(auth)`, permitindo que você lide com o resultado da operação de logout de forma mais concisa e legível. Certifique-se de substituir os campos `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc., pelas informações do seu projeto Firebase.

# Referencia

[Autenticar usando o Google com JavaScript](https://firebase.google.com/docs/auth/web/google-signin?hl=pt&authuser=0#next_steps)
