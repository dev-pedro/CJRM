<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Exercícios da aula 02

### Resumo

#### dataset e atributos data

O atributo "data" permite que você associe informações personalizadas a um elemento HTML, adicionando um prefixo "data-" ao nome do atributo. Por exemplo, se você quiser adicionar informações personalizadas sobre um produto em uma página de e-commerce, pode adicionar o atributo "data-product-name" a uma tag HTML e definir o valor como o nome do produto. Isso permite que você use essas informações em JavaScript ou CSS para personalizar a experiência do usuário.

Já o atributo "dataset" é usado para acessar e manipular esses dados personalizados em JavaScript. Ele permite que você obtenha ou defina os valores dos atributos "data-" em um elemento HTML usando um objeto JavaScript. Por exemplo, se você tiver um elemento HTML com o atributo "data-product-name", pode acessar o valor desse atributo usando a propriedade "dataset.productName" em JavaScript.

Como desenvolvedor web, é importante estar ciente desses atributos e como eles podem ser usados para melhorar a experiência do usuário e personalizar o conteúdo em seu site ou aplicativo web.

Um exemplo simples de como usar os atributos "data-" e "dataset" em HTML e JavaScript:

HTML:

```html
<div id="produto" data-nome="Camiseta" data-preco="R$ 29,99">
  Esta é uma camiseta legal!
</div>
```

Javascript:

```javascript
// Acessando os valores dos atributos "data-" com dataset:
const produto = document.getElementById("produto");
const nome = produto.dataset.nome; // "Camiseta"
const preco = produto.dataset.preco; // "R$ 29,99"

// Alterando os valores dos atributos "data-" com dataset:
produto.dataset.nome = "Camiseta de Algodão";
produto.dataset.preco = "R$ 39,99";
```

Neste exemplo, criamos uma div com um ID "produto" e dois atributos "data-" que armazenam informações personalizadas sobre um produto (nome e preço). Em seguida, usamos JavaScript para acessar e manipular esses atributos usando a propriedade "dataset". Na primeira parte do código, usamos o "dataset" para obter os valores dos atributos "data-" e armazená-los nas variáveis "nome" e "preco". Na segunda parte do código, usamos o "dataset" para alterar os valores dos atributos "data-".

#### Mudar o texto dentro da div ataves do dataset?

O atributo "dataset" é usado para armazenar e acessar informações personalizadas em elementos HTML, mas ele não é diretamente responsável por alterar o conteúdo dentro de um elemento. Para alterar o conteúdo de um elemento HTML, você pode usar o método "textContent" em JavaScript.

No exemplo anterior, o conteúdo dentro da div é definido como "Esta é uma camiseta legal!" e não está relacionado aos atributos "data-nome" ou "data-preco". No entanto, você pode usar o valor desses atributos para atualizar o conteúdo dentro da div.

Por exemplo, se você quiser atualizar o texto dentro da div com o nome e o preço do produto, pode fazer o seguinte em JavaScript:

```javascript
const produto = document.getElementById("produto");
const nome = produto.dataset.nome; // "Camiseta"
const preco = produto.dataset.preco; // "R$ 29,99"

produto.textContent = `${nome} - ${preco}`; // Atualiza o conteúdo da div com o nome e preço do produto
```

Neste exemplo, usamos o método "getElementById" para selecionar o elemento HTML com o ID "produto" e, em seguida, usamos o "dataset" para obter os valores dos atributos "data-nome" e "data-preco". Em seguida, usamos o template string para criar uma string que combina o nome e o preço do produto e, finalmente, atualizamos o conteúdo dentro da div usando o método "textContent".

#### Código usados no exercício

```javascript
/*
  01

  - Exiba no console um boolean indicando se o caractere ':' existe na string 
    abaixo.
*/

const message = 'Próxima etapa: 10'
console.log(message.includes(':'))

/*
  02

  - Exiba no console um boolean indicando se o item '635' existe no array 
    abaixo.
*/

const numbers = [979, 2673, 41, 77, 276, 554, 399, 385, 65, 726, 635, 833, 462]
console.log(numbers.includes(635))


/*
  A partir daqui, vamos treinar nossas skills de refatoração.

  Antes de iniciar o refactoring abaixo, por precaução, versione (ou faça uma 
  cópia do) seu todo-list atual para que seja possível mais tarde voltar ao 
  estado em que ele está agora, se necessário.
*/

/*
  03

  - Refatore a implementação da remoção do to-do (li) da tela;
  - Tente implementar essa remoção sem "navegar pelo DOM". Ou seja, sem usar 
    propriedades como a parentElement.
    
    Por que? 

    Se futuramente a marcação HTML da aplicação mudar, se o parentElement mudar, 
    o código que foi implementado não funcionará.
    
    Dica: pesquise por dataset e atributos data.
*/

/*
  04

  Algumas sugestões de refactoring
  
  - Isole em funções de responsabilidade única:
    - O código que adiciona os to-dos;
    - O código que filtra e adiciona as classes CSS nos to-dos.
*/
```
