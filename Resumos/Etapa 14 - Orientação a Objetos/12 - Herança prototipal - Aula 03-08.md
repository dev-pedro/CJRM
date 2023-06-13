<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Herança Prototipal - Aula 03-08

### Resumo

### Herança Prototipal em Javascript

A herança prototipal é um conceito de herança em JavaScript, onde os objetos podem herdar propriedades e métodos diretamente de outros objetos, conhecidos como protótipos.

Em JavaScript, cada objeto possui um protótipo interno que é usado para procurar propriedades e métodos quando eles não são encontrados no próprio objeto. Essa cadeia de protótipos é chamada de "cadeia de protótipos" ou "prototype chain".

Quando você tenta acessar uma propriedade ou método de um objeto, o mecanismo de herança prototipal verifica se essa propriedade ou método existe no próprio objeto. Se não existir, ele verifica o protótipo do objeto e continua subindo na cadeia de protótipos até encontrar a propriedade ou método desejado ou até chegar ao topo da cadeia (que é o objeto `Object.prototype`).

Aqui está um exemplo de herança usando funções construtoras em JavaScript:

```javascript
// Função construtora Pai
function Pai(nome) {
  this.nome = nome;
}

Pai.prototype.dizerOla = function() {
  console.log('Olá, meu nome é ' + this.nome);
};

// Função construtora Filho
function Filho(nome, idade) {
  Pai.call(this, nome); // Chama o construtor do Pai e define o nome do Filho
  this.idade = idade;
}

// Herda o protótipo do Pai
Filho.prototype = Object.create(Pai.prototype);
Filho.prototype.constructor = Filho;

Filho.prototype.dizerIdade = function() {
  console.log('Eu tenho ' + this.idade + ' anos.');
};

// Cria uma instância do Filho
var filho = new Filho('João', 10);

filho.dizerOla(); // Saída: Olá, meu nome é João
filho.dizerIdade(); // Saída: Eu tenho 10 anos.
```

Neste exemplo, temos duas funções construtoras: `Pai` e `Filho`. A função `Pai` define uma propriedade `nome` e um método `dizerOla` que imprime uma mensagem com o nome do pai.

A função `Filho` é definida para herdar do `Pai`. Isso é feito chamando o construtor do `Pai` dentro do construtor do `Filho` usando `Pai.call(this, nome)`. Assim, o nome do filho é passado para o construtor do `Pai` para definir a propriedade `nome` do `Filho`.

Em seguida, estabelecemos a herança do protótipo do `Pai` para o `Filho` usando `Object.create(Pai.prototype)`. Isso cria um novo objeto que tem o protótipo do `Pai` e, em seguida, definimos esse objeto como o protótipo do `Filho` usando `Filho.prototype = ...`. Além disso, garantimos que o `constructor` do `Filho` aponte para o próprio `Filho`.

Por fim, adicionamos um método `dizerIdade` ao protótipo do `Filho`, que imprime a idade do filho.

Ao criar uma instância do `Filho` usando `var filho = new Filho('João', 10)`, podemos chamar tanto os métodos herdados do `Pai` quanto os métodos específicos do `Filho`. A chamada `filho.dizerOla()` imprime a mensagem de saudação com o nome "João", e `filho.dizerIdade()` imprime a idade do filho.

### Quando Usar Classes ou Funções Construtoras ?

**Você vai usar classes ou funções construtoras quando você precisar criar objetos específicos que compartilham métodos, usar classes nesses casos irá ajudar a economizar memória e classes são mais simples que funções construtoras. Você usar classes quando for fazer herança, estiver desenvolvendo uma `lib`(biblioteca) em que os objetos precisam conter métodos compartilhados e quando precisar economizar memória(quantidade quase insignificativa).**

A escolha entre usar classes ou funções construtoras em JavaScript depende do seu estilo de programação e das necessidades do seu projeto. Ambas as abordagens oferecem maneiras de criar objetos e definir suas propriedades e comportamentos.

As classes são uma adição mais recente à linguagem JavaScript, introduzida no ECMAScript 2015 (ES6). Elas fornecem uma sintaxe mais concisa e orientada a objetos para criar objetos e definir métodos. As classes também suportam a utilização de palavras-chave como `extends` para estabelecer herança e `super` para chamar o construtor da classe pai.

Por outro lado, as funções construtoras são um conceito mais antigo em JavaScript, mas ainda amplamente utilizadas. Elas são essencialmente funções comuns que são usadas como construtores de objetos. Você pode usar a palavra-chave `new` para criar instâncias dessas funções construtoras. Normalmente, você define propriedades e métodos do objeto dentro da função construtora usando o `this`.

Aqui estão alguns pontos a considerar ao escolher entre classes e funções construtoras:

1. Sintaxe: Se você preferir uma sintaxe mais próxima de outras linguagens de programação orientadas a objetos, as classes podem ser mais adequadas. Elas fornecem uma sintaxe mais limpa e expressiva para criar objetos e definir métodos.

2. Herança: Se você precisa de herança, tanto classes quanto funções construtoras podem ser usadas. As classes têm suporte integrado para herança por meio da palavra-chave `extends`, enquanto nas funções construtoras você precisa configurar a herança manualmente usando o `prototype`.

3. Compatibilidade: Classes são uma adição mais recente ao JavaScript, então se você precisa suportar navegadores ou ambientes mais antigos que não têm suporte completo ao ES6, as funções construtoras podem ser uma escolha mais segura.

4. Estilo de programação: Se você está acostumado a trabalhar com funções construtoras e se sente confortável com o padrão de protótipos, pode preferir continuar usando esse estilo de programação. Por outro lado, se você está familiarizado com classes em outras linguagens e gosta de sua abordagem mais declarativa, pode preferir usar classes em JavaScript.

Em última análise, a escolha entre classes e funções construtoras depende de suas preferências pessoais e dos requisitos do seu projeto. Ambas as abordagens podem ser eficazes para criar objetos e definir comportamentos em JavaScript.

### Performance Percebida

O termo "performance percebida" refere-se à experiência subjetiva de desempenho de um aplicativo, sistema ou site por parte dos usuários. É a medida de como uma aplicação é percebida em termos de velocidade, capacidade de resposta e fluidez durante a interação com os usuários.

A performance percebida é influenciada por vários fatores, incluindo o tempo de resposta das ações do usuário, a velocidade de carregamento de páginas e conteúdos, a fluidez das animações e transições, entre outros.

Embora a performance técnica de um aplicativo ou sistema seja importante, a performance percebida se concentra na experiência subjetiva do usuário. Mesmo que um aplicativo seja tecnicamente rápido em termos de tempo de resposta, se o usuário perceber uma lentidão ou falta de fluidez durante a interação, sua percepção de performance pode ser negativa.

Por exemplo, um site que carrega rapidamente, mas tem animações lentas ou transições bruscas pode criar uma sensação de falta de responsividade, resultando em uma performance percebida negativa. Da mesma forma, um aplicativo que responde rapidamente a algumas ações do usuário, mas tem um atraso significativo em outras ações importantes, pode causar frustração e afetar a performance percebida.

Portanto, é importante considerar a performance percebida ao projetar e desenvolver aplicativos e sistemas, garantindo uma experiência fluida e responsiva para os usuários. Isso envolve otimizar o desempenho técnico, bem como fornecer feedback visual adequado e garantir que as interações sejam suaves e sem interrupções, para que os usuários tenham a percepção de que o sistema está funcionando de maneira rápida e eficiente.
