<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O que é o DOM - Document Object Model - Aula 01-06

### Resumo

O DOM (Document Object Model) é uma interface de programação para documentos HTML e XML. Ele representa a estrutura do documento como um conjunto de objetos em uma árvore hierárquica, onde cada elemento do documento (como tags, texto, imagens, formulários, etc.) é representado por um nó na árvore.

O DOM é usado por navegadores da web para renderizar páginas web e por linguagens de programação do lado do cliente, como JavaScript, para interagir com a página. Através do DOM, os desenvolvedores podem acessar, manipular e modificar os elementos de uma página web, adicionando, removendo e alterando elementos, atributos e conteúdo.

O DOM é uma especificação padrão da W3C (World Wide Web Consortium) e é suportado pela maioria dos navegadores modernos. Ele é fundamental para a criação de aplicações web dinâmicas e interativas.

Abaixo está um simplificado de como o DOM representa a estrutura de uma página HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Título da Página</title>
  </head>
  <body>
    <h1>Exemplo de Página</h1>
    <p>Este é um exemplo de página HTML.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>
```

Essa imagem mostra a representação gráfica do DOM para uma página HTML simples.

1. **Document Object Model (DOM)**: O DOM é a representação em memória da estrutura hierárquica de um documento HTML. Ele é criado pelo navegador quando a página é carregada e pode ser manipulado por meio de scripts do lado do cliente, como JavaScript.

2. : Isso define o tipo de documento HTML que está sendo usado. No exemplo da imagem, é a versão mais recente do HTML.

3. **html**: Este é o elemento raiz do DOM, que contém todos os outros elementos da página.

4. **head**: Este é o elemento filho de `html` que contém informações sobre a página, como o título.

5. **title**: Este é o elemento filho de `head` que contém o título da página, que é exibido na guia do navegador.

6. **body**: Este é o elemento filho de `html` que contém todo o conteúdo visível da página.

7. **h1**: Este é um elemento de cabeçalho que contém um título ou um cabeçalho de seção.

8. **p**: Este é um elemento de parágrafo que contém texto normal.

9. **ul**: Este é um elemento de lista não ordenada que contém itens de lista.

10. **li**: Este é um elemento de item de lista que contém um item de lista.

A imagem mostra como esses elementos estão aninhados uns dentro dos outros em uma estrutura hierárquica de árvore, onde cada elemento é um nó e pode ter um ou mais nós filhos. Cada elemento também pode ter atributos adicionais, como classes ou identificadores, que podem ser usados para selecionar e manipular esses elementos usando JavaScript.

#### Abaixo um exemplo gráfico básico da estrutura do DOM

<img title="" src="../Etapa%2005%20-%20O%20Document%20Object%20Model%20-%20DOM/DOM.png" alt="" data-align="center">
