<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O que são requests HTTP - Aula 01-04

### Resumo

Requests HTTP (HyperText Transfer Protocol) são solicitações feitas por um cliente para um servidor, utilizando o protocolo HTTP para a transferência de informações pela rede.

Essas solicitações são utilizadas para obter recursos, como arquivos HTML, imagens, arquivos CSS e JavaScript, a partir de um servidor, ou para enviar dados para o servidor, como um formulário preenchido por um usuário.

As requests HTTP são compostas por um cabeçalho (header) e um corpo (body). O cabeçalho contém informações sobre a solicitação, como o tipo de solicitação (GET, POST, PUT, DELETE, etc.), a URL do recurso solicitado e os tipos de dados aceitos pelo cliente. O corpo pode conter dados adicionais, como dados de formulários enviados pelo usuário.

Existem diferentes tipos de requests HTTP, sendo as principais:

- GET: solicita um recurso específico, geralmente utilizado para obter informações de um servidor;
- POST: envia dados do cliente para o servidor, geralmente utilizado para enviar dados de formulários;
- PUT: atualiza um recurso específico no servidor, geralmente utilizado para atualizar um arquivo ou registro de banco de dados;
- DELETE: exclui um recurso específico no servidor, geralmente utilizado para excluir um arquivo ou registro de banco de dados.

Os requests HTTP são essenciais para a comunicação entre clientes e servidores na internet e são amplamente utilizados em aplicações web e serviços online.

### O que é uma API

API (Application Programming Interface) é um conjunto de padrões e protocolos que definem como um software deve se comunicar com outro software. Em outras palavras, é uma interface que permite a comunicação entre diferentes aplicações ou sistemas.

As APIs podem ser utilizadas para diversos fins, como:

- Integração entre sistemas: permitindo que diferentes sistemas se comuniquem e compartilhem informações;
- Desenvolvimento de aplicações: permitindo que desenvolvedores criem novas aplicações que utilizem recursos ou dados de outros sistemas;
- Automatização de tarefas: permitindo que tarefas rotineiras sejam automatizadas e executadas de forma mais eficiente.

As APIs podem ser disponibilizadas em diferentes formatos, como web services, bibliotecas de código, SDKs (Software Development Kits), entre outros. Também existem diferentes tipos de APIs, como as APIs RESTful (Representational State Transfer), que utilizam o protocolo HTTP para a comunicação entre sistemas, e as APIs SOAP (Simple Object Access Protocol), que utilizam o protocolo XML para a comunicação.

As APIs são fundamentais para a integração de sistemas e para o desenvolvimento de aplicações modernas, permitindo que diferentes tecnologias e plataformas possam trabalhar juntas de forma mais eficiente e escalável.

### Endpoint

Um endpoint é um ponto de extremidade em uma API, que representa um recurso específico e que pode ser acessado por meio de uma solicitação HTTP. Em outras palavras, um endpoint é a URL específica utilizada para acessar um determinado recurso na API.

Por exemplo, em uma API de e-commerce, podemos ter endpoints para acessar informações sobre produtos, pedidos, clientes, etc. Cada endpoint teria uma URL específica e seria acessado por meio de uma solicitação HTTP, utilizando os métodos GET, POST, PUT ou DELETE, dependendo da ação desejada.

A URL de um endpoint pode conter parâmetros que permitem filtrar, ordenar ou paginar os resultados, além de autenticação e autorização para proteger o acesso aos recursos. Por exemplo, um endpoint para listar os pedidos de um determinado cliente poderia ter a seguinte URL:

```bash
https://api.ecommerce.com/clientes/123/pedidos?status=pendente&limite=10&pagina=2
```

Neste exemplo, temos a URL base da API (`https://api.ecommerce.com`), seguida do endpoint para listar os pedidos do cliente com ID 123 (`/clientes/123/pedidos`). Os parâmetros `status=pendente`, `limite=10` e `pagina=2` permitem filtrar os resultados por status, limitar o número de resultados retornados e paginar os resultados, respectivamente.

Os endpoints são essenciais para o funcionamento de uma API, permitindo que os clientes possam acessar os recursos e realizar operações específicas de forma padronizada e segura.

### O  formato JSON

JSON (JavaScript Object Notation) é um formato leve de intercâmbio de dados. É fácil de ler e escrever para humanos e máquinas, e é um formato padrão para a troca de dados entre aplicações web.

JSON é basicamente um formato de texto que descreve dados estruturados em um formato que lembra a sintaxe de objetos JavaScript. Ele é frequentemente utilizado em aplicações web para enviar dados de um servidor para um cliente, e vice-versa, como uma forma de intercâmbio de dados.

Por exemplo, um objeto JSON pode ter a seguinte estrutura:

```javascript
{
  "nome": "João",
  "idade": 30,
  "email": "joao@gmail.com",
  "telefones": [
    {
      "tipo": "residencial",
      "numero": "123456789"
    },
    {
      "tipo": "celular",
      "numero": "987654321"
    }
  ]
}

```

Este objeto representa informações sobre um usuário, incluindo nome, idade, e-mail e uma lista de telefones, cada um com um tipo e um número. Note que a sintaxe do JSON é muito semelhante à sintaxe de objetos em JavaScript, com a diferença de que as chaves devem ser colocadas entre aspas duplas.

O uso do JSON é bastante difundido em aplicações web, especialmente em APIs RESTful, que utilizam o JSON como formato padrão para a troca de dados entre o servidor e o cliente. Ele também é frequentemente utilizado em bancos de dados NoSQL, como o MongoDB, que armazenam documentos em formato JSON.

### Referencias

[JSONPlaceholder](https://jsonplaceholder.typicode.com/)

#### Testes

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
```

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```
