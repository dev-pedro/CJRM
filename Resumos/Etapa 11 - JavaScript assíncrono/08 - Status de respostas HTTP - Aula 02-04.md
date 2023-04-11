<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Status de respostas HTTP - Aula 02-04

### Resumo

Os códigos de status HTTP são uma parte importante do protocolo HTTP (Hypertext Transfer Protocol) que define como os servidores e clientes se comunicam pela internet. Cada resposta HTTP é retornada com um código de status que indica o status da requisição. Os códigos de status HTTP são divididos em cinco classes, conforme descrito abaixo:

- **1xx (Informação)**: a requisição foi recebida e o servidor continua processando-a.
- **2xx (Sucesso)**: a requisição foi bem-sucedida e o servidor retornou uma resposta.
- **3xx (Redirecionamento)**: a requisição precisa ser redirecionada para outro recurso para ser completada.
- **4xx (Erro do cliente)**: a requisição contém informações inválidas ou incompletas e o servidor não pode atender à solicitação.
- **5xx (Erro do servidor)**: o servidor encontrou um erro ao processar a requisição.

A seguir estão alguns exemplos de códigos de status HTTP comuns:

- **200 OK**: a requisição foi bem-sucedida e o servidor retornou a resposta solicitada.
- **201 Created**: a requisição foi bem-sucedida e um novo recurso foi criado no servidor.
- **204 No Content**: a requisição foi bem-sucedida, mas o servidor não retornou nenhum conteúdo.
- **301 Moved Permanently**: a URL solicitada foi permanentemente movida para uma nova localização.
- **400 Bad Request**: a requisição contém informações inválidas ou incompletas.
- **401 Unauthorized**: o servidor requer autenticação do usuário antes que a requisição possa ser concluída.
- **403 Forbidden**: o servidor entendeu a requisição, mas se recusa a atendê-la.
- **404 Not Found**: o servidor não pôde encontrar o recurso solicitado.
- **500 Internal Server Error**: o servidor encontrou um erro interno ao processar a requisição.

Ao fazer requests HTTP em JavaScript, é importante verificar o código de status da resposta para determinar se a requisição foi bem-sucedida ou não. Isso pode ser feito verificando a propriedade `status` da resposta. Por exemplo, se `response.status` for igual a `200`, a requisição foi bem-sucedida.

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
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()
```

#### Referencia

[HTTP response status codes - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
