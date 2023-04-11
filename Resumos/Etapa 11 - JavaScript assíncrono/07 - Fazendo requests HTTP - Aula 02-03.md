<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Fazendo requests HTTP - Aula 02-03

### Resumo

### Usando new XMLHttpRequest()

O objeto `XMLHttpRequest` é uma API antiga para fazer requests HTTP em JavaScript. Embora não seja mais tão comum quanto a API Fetch ou a biblioteca axios, ainda é possível usá-lo para fazer requests HTTP em JavaScript. Aqui está um exemplo básico:

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error('Erro ao fazer request: ' + xhr.status);
  }
};
xhr.send();

```

Este exemplo faz uma requisição GET para a URL `https://jsonplaceholder.typicode.com/posts/1`. Quando a resposta é recebida, a função `onload` é chamada. Dentro dessa função, verificamos se o status da resposta é 200 (OK) e, em seguida, convertemos a resposta em JSON e a exibimos no console. Se o status não for 200, exibimos um erro.

O método `open()` é usado para configurar o request e o método `send()` é usado para enviá-lo. Você também pode usar o método `setRequestHeader()` para configurar headers adicionais para a sua requisição.

Embora seja possível usar o objeto `XMLHttpRequest`, as opções mais modernas, como a API Fetch e a biblioteca axios, oferecem uma interface mais fácil de usar e geralmente são mais robustas.

### Códigos usados na aula

HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fazendo requests HTTP - Aula 02-03</title>
</head>
<body>
    
    <script src="app.js"></script>
</body>
</html>
```

Javascript:

```javascript
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4){
        console.log(request.responseText)
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
```

****

### Conteúdo extra-aula

Para fazer requests HTTP em JavaScript, você pode usar a API Fetch ou a biblioteca axios. Vou fornecer exemplos para ambas as opções:

#### Usando a API Fetch

A API Fetch é uma interface moderna para fazer requests HTTP em JavaScript. Você pode usar o método `fetch()` para fazer uma requisição HTTP e obter a resposta.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

Este exemplo faz uma requisição GET para a URL `https://jsonplaceholder.typicode.com/posts/1` e, em seguida, converte a resposta em JSON. O resultado é exibido no console.

#### Usando a biblioteca axios

A biblioteca axios é uma biblioteca popular para fazer requests HTTP em JavaScript. Ela oferece uma interface simples e intuitiva.

```javascript
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```

Este exemplo usa o método `axios.get()` para fazer uma requisição GET para a URL `https://jsonplaceholder.typicode.com/posts/1`. O resultado é exibido no console.

Note que no exemplo acima, a resposta é acessada através da propriedade `data` do objeto `response`.

Ambas as opções são boas escolhas para fazer requests HTTP em JavaScript, mas a escolha final depende das necessidades do seu projeto e da sua preferência pessoal.
