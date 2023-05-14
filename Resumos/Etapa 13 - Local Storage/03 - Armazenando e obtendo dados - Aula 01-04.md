<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Armazenando e obtendo dados - Aula 01-04

### Resumo

O localStorage é uma forma de armazenamento de dados em pares chave-valor no navegador da web. Ele permite que os desenvolvedores salvem e acessem informações localmente no computador do usuário, mesmo depois que o navegador é fechado ou a página é atualizada.

O localStorage é um objeto global do JavaScript, e pode ser acessado por meio do objeto "window". Ele é semelhante aos cookies, mas tem uma capacidade maior de armazenamento e não é enviado com as solicitações HTTP, o que o torna mais seguro.

Para armazenar um valor no localStorage, basta chamar a propriedade "setItem" do objeto localStorage, passando uma chave e um valor como argumentos. Por exemplo, para armazenar um valor chamado "nome" com o valor "João" no localStorage, podemos fazer o seguinte:

```javascript
localStorage.setItem('nome', 'Pedro');
```

Para acessar um valor armazenado no localStorage, podemos chamar a propriedade "getItem" do objeto localStorage, passando a chave como argumento. Por exemplo, para acessar o valor "Pedro" que armazenamos acima, podemos fazer o seguinte:

```javascript
const nome = localStorage.getItem('nome');
console.log(nome); // Imprime "Pedro"
```
