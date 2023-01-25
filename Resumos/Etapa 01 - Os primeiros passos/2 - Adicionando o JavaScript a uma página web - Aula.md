<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Adicionando o JavaScript a uma página web - Aula 01-04

### Resumo

Para adicionar JavaScript em uma página HTML, você pode incluir o código JavaScript dentro de uma tag <script> no cabeçalho ou no corpo da página. A maneira mais comum é colocá-lo no final do corpo da página, antes da tag </body>. Exemplo:

```html
<html>
  <head>
    <title>Minha página</title>
  </head>
  <body>
    <!-- conteúdo HTML aqui -->
    <script>
      // código JavaScript aqui
    </script>
  </body>
</html>
```

Você também pode colocar o código JavaScript em um arquivo externo e incluí-lo na página usando a tag <script> com o atributo "src" apontando para o arquivo JavaScript. Exemplo:

```html
<html>
  <head>
    <title>Minha página</title>
  </head>
  <body>
    <!-- conteúdo HTML aqui -->
    <script src="meu_codigo.js"></script>
  </body>
</html>
```

##### Atenção

Você pode colocar conteudo javacript dentro da tag head, porem o recomendado é que você coloque ele dentro e no final da tag body.
