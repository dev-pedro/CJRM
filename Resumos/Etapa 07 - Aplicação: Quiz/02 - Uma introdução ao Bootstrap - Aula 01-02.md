<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Uma introdução ao Bootstrap - Aula 01-02

### Resumo

[Bootstrap - site](https://getbootstrap.com/)

Bootstrap é um framework front-end de código aberto que permite a criação rápida de sites e aplicativos responsivos. Ele foi desenvolvido pela equipe do Twitter e lançado em 2011.

O objetivo principal do Bootstrap é simplificar o processo de design e desenvolvimento de interfaces web, oferecendo um conjunto de ferramentas e componentes predefinidos, como botões, formulários, tabelas, alertas, entre outros. Esses componentes são projetados para serem compatíveis entre si, permitindo que os desenvolvedores criem rapidamente páginas web que sejam visualmente atraentes e funcionem bem em diferentes tamanhos de tela.

O Bootstrap é baseado em HTML, CSS e JavaScript, e pode ser personalizado por meio de variáveis, mixins e plugins. Ele também inclui um sistema de grid responsivo que ajuda a organizar o layout de uma página e ajustá-lo automaticamente de acordo com o tamanho da tela do dispositivo.

Como é um framework popular, existem muitos recursos disponíveis para ajudar os desenvolvedores a usar o Bootstrap, como documentação detalhada, tutoriais e exemplos de código. O Bootstrap é usado por muitos desenvolvedores e empresas em todo o mundo, e é uma ferramenta valiosa para criar sites e aplicativos responsivos e esteticamente atraentes.

#### Exemplo de uso

Um exemplo simples de como usar o Bootstrap em um site HTML.

Imagine que você queira criar uma página de login responsiva com um formulário. Você pode usar o Bootstrap para tornar o processo de design e desenvolvimento muito mais fácil.

1. Primeiro, você precisará incluir o Bootstrap em sua página HTML. Você pode fazer isso adicionando o seguinte código no cabeçalho do seu arquivo HTML:

```html
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
```

Este código importa o arquivo CSS do Bootstrap e torna seus estilos disponíveis em sua página.

2. Em seguida, você pode adicionar um formulário de login usando os componentes do Bootstrap. Por exemplo, você pode adicionar o seguinte código no corpo do seu arquivo HTML:

```html
<body>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</body>
```

Este código cria um formulário com dois campos de entrada (um para o endereço de e-mail e outro para a senha) e um botão de envio. Ele também usa as classes do Bootstrap para aplicar estilos ao formulário e aos campos de entrada.

3. Finalmente, você pode adicionar algum JavaScript para fazer o formulário funcionar. Por exemplo, você pode adicionar o seguinte código após o código HTML do formulário:

```html
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
```

Este código importa as bibliotecas JavaScript necessárias do Bootstrap (jQuery, Popper e Bootstrap) e as torna disponíveis em sua página.

Pronto! Agora você tem um formulário de login responsivo e estilizado com o Bootstrap em sua página HTML. É claro que existem muitas outras coisas que você pode fazer com o Bootstrap, como criar layouts complexos, navegações, entre outras, mas este exemplo deve dar uma boa ideia de como ele funciona.
