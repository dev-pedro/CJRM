<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Template strings - Aula 02-06

### Resumo

##### Quando usar strings com aspas ou template strings

Geralmente quando você não vai interpolar variáveis na string ou usar aspas ou quebrar a linha não tem necessidade de usar template strings.

Agora se a string que você vai usar precisa conter dados de variáveis ou aspas ou um HTML, a template string é recomendável.

# 

As "template strings" são uma forma mais conveniente de concatenar strings em JavaScript. Elas são identificadas por acentos crase (`) ao invés de aspas simples ou duplas. As template strings permitem a interpolação de expressões dentro da string, ou seja, inserir o valor de variáveis ou o resultado de expressões diretamente dentro da string. Por exemplo:

```javascript
const name = "Pedro";
console.log(`Olá, meu nome é ${name}`); // Olá, meu nome é Pedro


const postTitle = 'É bolacha ou ou biscoito ?'
const postAuthor = 'Pedro Henrique'
const postComments = 15
//usando concatenação
const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments +  ' comentários.'


//usando templates strings
const postMessage = `O post ${postTitle}, do ${postAuthor}, tem ${postComments} comentários.`

//usando template HTML
const html = `
    <h2>${postTitle}</h2>
    <p>${postAuthor}</p>
    <span>${postComments}</span>
`
console.log(html)
```

##### Template HTML

O termo "template HTML" se refere a uma estrutura pré-definida de HTML que pode ser reutilizada para exibir conteúdo dinâmico em diferentes partes de uma aplicação web. Os templates HTML geralmente incluem marcações de substituição que são substituídas por dados reais quando a página é renderizada. Isso permite que os desenvolvedores criem uma estrutura básica do HTML e a reutilizem para exibir diferentes conjuntos de dados.

Por exemplo, um template HTML como no código acima.
