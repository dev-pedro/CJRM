<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Pesquisa da 2ª aula da etapa 12

### Resumo

### Ordem de importação dos arquivos .js na tag <script> do HTML

A ordem de importação dos arquivos .js na tag `<script>` do HTML é importante porque o código JavaScript é executado na ordem em que é encontrado no documento. Quando o navegador encontra uma tag `<script>` com um arquivo JavaScript externo, ele baixa e executa o código desse arquivo imediatamente.

Se você tiver vários arquivos JavaScript que dependem um do outro, é importante carregá-los na ordem correta. Por exemplo, se você tiver um arquivo `utils.js` com algumas funções úteis e um arquivo `main.js` que as usa, precisará carregar `utils.js` antes de `main.js` para que as funções estejam disponíveis quando `main.js` for executado.

Aqui está um exemplo de como importar vários arquivos JavaScript na ordem correta:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Exemplo de importação de arquivos JavaScript</title>
  </head>
  <body>
    <script src="utils.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

Neste exemplo, `utils.js` é carregado primeiro e depois `main.js`. Isso garante que as funções em `utils.js` estejam disponíveis quando `main.js` for executado.

Em resumo, é importante prestar atenção à ordem de importação dos arquivos .js na tag `<script>` do HTML, especialmente se você tiver arquivos JavaScript que dependem uns dos outros. Certifique-se de carregar os arquivos na ordem correta para garantir que as dependências estejam disponíveis quando você precisar delas.

### Destructuring em arrays

A destructuring em arrays é uma técnica em JavaScript que permite que você atribua valores de um array a variáveis ​​individuais de maneira conveniente e concisa. Isso é útil quando você precisa extrair valores de um array e usá-los em outro lugar em seu código.

Aqui está um exemplo de como usar destructuring em arrays:

```javascript
const numbers = [1, 2, 3, 4];

const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4]
```

Neste exemplo, estamos destruturando o array `numbers` em três variáveis: `first`, `second` e `rest`. Observe que usamos a sintaxe de spread operator (`...rest`) para coletar todos os valores restantes em um array separado.

Também podemos ignorar valores de um array usando o operador de atribuição não utilizado `_`, como neste exemplo:

```javascript
const [a, , c, _] = [1, 2, 3, 4];

console.log(a); // 1
console.log(c); // 3
```

Neste exemplo, estamos ignorando o valor `2` do array e o valor `4` é atribuído a uma variável não utilizada `_`.

Em resumo, a destructuring em arrays é uma técnica útil que permite que você atribua valores de um array a variáveis ​​individuais de maneira concisa e conveniente. Você pode usar a sintaxe de spread operator para coletar todos os valores restantes em um array separado ou ignorar valores usando o operador de atribuição não utilizado `_`.

### Destructuring aninhado em objetos

A destructuring aninhada em objetos é uma técnica em JavaScript que permite que você atribua valores de objetos aninhados a variáveis ​​individuais de maneira conveniente e concisa. Isso é útil quando você precisa extrair valores de objetos aninhados e usá-los em outro lugar em seu código.

Aqui está um exemplo de como usar destructuring aninhado em objetos:

```javascript
const person = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

const { name, age, address: { street, city, state } } = person;

console.log(name); // 'John Doe'
console.log(age); // 30
console.log(street); // '123 Main St'
console.log(city); // 'Anytown'
console.log(state); // 'CA'
```

Neste exemplo, estamos destruturando o objeto `person` em variáveis: `name`, `age`, `street`, `city` e `state`. Observe que estamos usando a sintaxe de atribuição com nome (`address: { street, city, state }`) para extrair os valores do objeto aninhado `address`.

Também podemos usar valores padrão em destructuring aninhado em objetos, como neste exemplo:

```javascript
const person = {
  name: 'John Doe',
  age: 30
};

const { name, age, address: { street = '123 Main St', city = 'Anytown', state = 'CA' } = {} } = person;

console.log(name); // 'John Doe'
console.log(age); // 30
console.log(street); // '123 Main St'
console.log(city); // 'Anytown'
console.log(state); // 'CA'
```

Neste exemplo, estamos usando valores padrão para `street`, `city` e `state` em caso de ausência de valores do objeto aninhado `address`.

Em resumo, a destructuring aninhada em objetos é uma técnica útil que permite que você atribua valores de objetos aninhados a variáveis ​​individuais de maneira concisa e conveniente. Você pode usar a sintaxe de atribuição com nome para extrair valores de objetos aninhados e usar valores padrão em caso de ausência de valores.

### Destructuring aninhado em arrays

A destructuring aninhada em arrays é uma técnica em JavaScript que permite que você atribua valores de arrays aninhados a variáveis ​​individuais de maneira conveniente e concisa. Isso é útil quando você precisa extrair valores de arrays aninhados e usá-los em outro lugar em seu código.

Aqui está um exemplo de como usar destructuring aninhado em arrays:

```javascript
const numbers = [1, 2, [3, 4]];

const [first, second, [third, fourth]] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4
```

Neste exemplo, estamos destruturando o array `numbers` em quatro variáveis: `first`, `second`, `third` e `fourth`. Observe que usamos a sintaxe de destructuring aninhada para extrair os valores do array aninhado `[3, 4]`.

Também podemos usar valores padrão em destructuring aninhado em arrays, como neste exemplo:

```javascript
const numbers = [1, 2];

const [first, second, [third = 3, fourth = 4] = []] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 3
console.log(fourth); // 4
```

Neste exemplo, estamos usando valores padrão para `third` e `fourth` em caso de ausência de valores do array aninhado.

Em resumo, a destructuring aninhada em arrays é uma técnica útil que permite que você atribua valores de arrays aninhados a variáveis ​​individuais de maneira concisa e conveniente. Você pode usar a sintaxe de destructuring aninhada para extrair valores de arrays aninhados e usar valores padrão em caso de ausência de valores.

### Identificar quando usar computed property names em javascript

Computed property names em JavaScript permitem que você use expressões para criar dinamicamente as chaves de propriedade de um objeto. Você pode usar computed property names quando precisa definir a chave de propriedade de um objeto dinamicamente, com base em alguma lógica ou valor em tempo de execução. Por exemplo, se você tem um objeto e quer definir uma propriedade cujo nome é determinado por uma variável, você pode usar computed property names para fazer isso:

```javascript
const propKey = 'foo';
const obj = {
  [propKey]: 'bar',
};

console.log(obj.foo); // 'bar'
```

Neste exemplo, `propKey` é uma variável que contém a chave de propriedade que queremos usar para o objeto `obj`. Em vez de definir a propriedade diretamente usando a sintaxe de ponto (`obj.propKey = 'bar'`), usamos computed property names envolvendo a chave de propriedade com colchetes (`[propKey]`). Dessa forma, o valor da variável `propKey` é avaliado e usado como a chave de propriedade para o objeto `obj`.

Em resumo, use computed property names em JavaScript sempre que precisar definir uma chave de propriedade dinamicamente, com base em uma variável ou alguma lógica em tempo de execução.

### Identificar quando usar um valor default em uma const dentro de uma expressão de destructuring

Você pode usar um valor default em uma const dentro de uma expressão de destructuring em JavaScript quando deseja garantir que uma variável tenha um valor padrão caso a chave correspondente no objeto ou matriz seja `undefined`. Isso pode ser útil em casos em que você está trabalhando com objetos ou matrizes que podem não conter todas as propriedades que você está tentando acessar.

Aqui está um exemplo de como usar um valor default em uma const dentro de uma expressão de destructuring:

```javascript
const person = {
  name: 'John Doe',
  age: 30
};

const { name, age, gender = 'unknown' } = person;

console.log(name); // 'John Doe'
console.log(age); // 30
console.log(gender); // 'unknown'
```

Neste exemplo, estamos destruturando a const `person` em três variáveis: `name`, `age` e `gender`. Observe que `gender` tem um valor padrão definido como `'unknown'`. Isso significa que, se a propriedade `gender` não estiver presente no objeto `person`, a const `gender` terá o valor `'unknown'`.

Em resumo, use um valor default em uma const dentro de uma expressão de destructuring quando deseja garantir que uma variável tenha um valor padrão caso a chave correspondente no objeto ou matriz seja `undefined`.

### Diferença entre caminho relativo e absoluto para encontrar um arquivo dentro do diretório do projeto

Em computação, caminhos relativos e absolutos são duas maneiras de especificar o local de um arquivo ou diretório no sistema de arquivos.

Um caminho relativo especifica o caminho de um arquivo ou diretório em relação ao diretório atual do projeto. Por exemplo, se o diretório atual é `/home/user/projects/myproject` e o arquivo que você deseja acessar está localizado em `src/index.js`, você pode especificar o caminho relativo como `src/index.js`. O caminho relativo começa com um nome de arquivo ou diretório sem barra (/) e é interpretado em relação ao diretório atual.

Já um caminho absoluto especifica o caminho completo de um arquivo ou diretório a partir da raiz do sistema de arquivos. Por exemplo, o caminho absoluto do arquivo `index.html` na pasta `public` pode ser `/home/user/projects/myproject/public/index.html`. O caminho absoluto começa com uma barra (/) e é interpretado a partir da raiz do sistema de arquivos.

A principal diferença entre caminhos relativos e absolutos é a forma como eles são interpretados. Os caminhos relativos são mais flexíveis e portáteis, pois podem ser usados em diferentes sistemas de arquivos sem modificação. No entanto, eles são limitados ao diretório atual do projeto e podem ser confusos se o diretório mudar. Por outro lado, os caminhos absolutos são mais precisos e específicos, mas podem ser difíceis de manter se o diretório raiz ou a estrutura do projeto mudar.

Em resumo, a diferença entre caminho relativo e absoluto é que o caminho relativo é interpretado em relação ao diretório atual do projeto, enquanto o caminho absoluto é interpretado a partir da raiz do sistema de arquivos. Cada um tem suas vantagens e desvantagens, e é importante escolher o caminho correto com base na situação e nos requisitos do projeto.

Em um projeto web, as pastas da aplicação geralmente são usadas para organizar os arquivos do código fonte e do conteúdo da aplicação, como imagens, arquivos de estilo, modelos, etc. A seguir, estão algumas das pastas comuns que você pode encontrar em um projeto web típico:

- `src`: É a pasta de origem do código fonte da aplicação. É aqui que você deve colocar todos os arquivos de código da sua aplicação, como JavaScript, CSS, HTML e outros arquivos de origem. Essa pasta é geralmente organizada em subpastas para diferentes partes da aplicação, como componentes, páginas e utilitários.

- `public`: É a pasta onde você deve colocar todos os arquivos estáticos, como imagens, arquivos de estilo, arquivos de fonte e outros arquivos que são servidos diretamente pelo servidor web. Esses arquivos são acessíveis diretamente pelo navegador, sem passar por um servidor ou aplicativo.

- `assets`: É uma pasta que contém arquivos que podem ser servidos por um servidor, mas também podem ser usados em seu código. Esses arquivos geralmente incluem imagens, arquivos de estilo, arquivos de fonte, etc. Essa pasta é geralmente organizada em subpastas para diferentes tipos de ativos.

- `views` ou `templates`: É a pasta que contém os modelos de página ou visualizações usados ​​para renderizar as páginas da aplicação. Essa pasta geralmente contém arquivos HTML ou outro tipo de modelo.

- `config`: É a pasta que contém arquivos de configuração para a aplicação. Isso inclui arquivos de configuração do servidor, como arquivos `.env`, arquivos de configuração de banco de dados e outros arquivos de configuração relacionados à infraestrutura.

Essas são apenas algumas das pastas que você pode encontrar em um projeto web. É importante lembrar que a organização de pastas pode variar dependendo do tipo de aplicação, framework ou linguagem de programação que você está usando.

Vamos supor que temos um projeto web simples com a seguinte estrutura de pastas:

```javascript
meu-projeto/
├── index.html
├── js/
│   ├── script.js
│   └── utils/
│       └── helper.js
└── img/
    └── logo.png

```

A seguir, vamos dar exemplos de caminhos relativos e absolutos para acessar alguns arquivos dentro do projeto:

- Para acessar o arquivo `script.js` a partir de `index.html` usando um caminho relativo, podemos usar o seguinte caminho: `js/script.js`. Isso porque `index.html` e `js` estão no mesmo diretório raiz e `script.js` está dentro da pasta `js`. Esse caminho é relativo ao diretório atual.

- Para acessar o arquivo `helper.js` a partir de `script.js` usando um caminho relativo, podemos usar o seguinte caminho: `./utils/helper.js`. Isso porque `script.js` e `helper.js` estão na mesma pasta `utils`. O `./` indica que estamos nos referindo ao diretório atual e, em seguida, adicionamos o caminho para o arquivo `helper.js`. Esse caminho é relativo ao diretório atual.

- Para acessar o arquivo `logo.png` a partir de `index.html` usando um caminho relativo, podemos usar o seguinte caminho: `img/logo.png`. Isso porque `index.html` e `img` estão no mesmo diretório raiz e `logo.png` está dentro da pasta `img`. Esse caminho é relativo ao diretório atual.

- Para acessar o arquivo `helper.js` a partir de `index.html` usando um caminho absoluto, podemos usar o seguinte caminho: `/js/utils/helper.js`. Isso porque `helper.js` está dentro da pasta `utils` dentro da pasta `js` na raiz do projeto. Usar um caminho absoluto significa que estamos especificando o caminho completo do arquivo a partir da raiz do sistema de arquivos. Esse caminho é absoluto.

- Para acessar o arquivo `logo.png` a partir de `script.js` usando um caminho absoluto, podemos usar o seguinte caminho: `/img/logo.png`. Isso porque `logo.png` está dentro da pasta `img` na raiz do projeto. Usar um caminho absoluto significa que estamos especificando o caminho completo do arquivo a partir da raiz do sistema de arquivos. Esse caminho é absoluto.

Esses são apenas alguns exemplos de como usar caminhos relativos e absolutos em um projeto web. É importante lembrar que a escolha do caminho correto depende da localização do arquivo em relação ao arquivo que o está referenciando e das necessidades específicas do projeto.

### Identificar quando uma função está com excesso de responsabilidade

Uma função com excesso de responsabilidade, também conhecida como função "gorda", geralmente realiza muitas tarefas diferentes e acaba se tornando difícil de entender e manter. Isso pode levar a problemas como código repetido, dificuldade em testar a função e aumento do acoplamento com outras partes do código.

Aqui estão alguns sinais de que uma função pode estar com excesso de responsabilidade:

1. Tamanho excessivo: Se uma função tem um tamanho muito grande, pode ser um sinal de que está realizando muitas tarefas diferentes. Isso pode dificultar a leitura e a manutenção do código.

2. Vários níveis de identação: Se uma função tem muitos níveis de identação (ou seja, muitos blocos aninhados), pode ser um sinal de que está tentando fazer muitas coisas diferentes.

3. Realização de tarefas não relacionadas: Se uma função está realizando tarefas que não estão diretamente relacionadas ao seu propósito principal, isso pode indicar que está com excesso de responsabilidade.

4. Presença de comentários explicativos: Se uma função precisa de muitos comentários explicativos para ser entendida, isso pode indicar que está fazendo muitas coisas diferentes.

5. Falta de coesão: Se uma função não tem uma única responsabilidade clara, isso pode indicar que está tentando fazer muito ao mesmo tempo.

Para evitar funções com excesso de responsabilidade, é importante seguir o princípio da responsabilidade única, que afirma que cada função deve ter uma única responsabilidade clara. Se uma função está realizando muitas tarefas diferentes, pode ser necessário dividi-la em funções menores e mais específicas, cada uma com sua própria responsabilidade. Isso tornará o código mais fácil de entender, manter e testar.

### Escolher bons nomes para constantes, variáveis, propriedades de objetos, etc

Escolher bons nomes para constantes, variáveis, propriedades de objetos e outros elementos do código é uma parte importante da escrita de código legível e fácil de entender. Aqui estão algumas dicas para escolher bons nomes:

1. Seja descritivo: O nome deve indicar claramente o propósito ou conteúdo do elemento. Evite nomes genéricos como "data", "valor", "objeto", etc. Use nomes que expliquem o que o elemento faz ou contém.

2. Use nomes de fácil leitura: Use nomes que sejam fáceis de ler e entender. Evite nomes muito longos ou complicados. Use letras maiúsculas e minúsculas para separar palavras, como em "nomeDoObjeto" em vez de "nomedoobjeto".

3. Seja consistente: Use nomes consistentes em todo o seu código. Isso torna mais fácil para outros desenvolvedores entenderem seu código e evita confusão.

4. Evite abreviações desnecessárias: Embora algumas abreviações possam ser úteis, como "url" para "endereço da web", evite abreviações que não sejam amplamente conhecidas ou que possam ser confusas.

5. Evite usar nomes reservados da linguagem: Não use nomes que já são reservados pela linguagem que você está usando. Isso pode causar erros e tornar o código mais difícil de entender.

6. Pense sobre o escopo: Escolha nomes que reflitam o escopo do elemento. Por exemplo, uma variável usada apenas em uma função pode ter um nome diferente daquela usada em todo o arquivo.

7. Seja preciso: Escolha nomes que sejam precisos e específicos para o tipo de dado que a variável ou constante armazena. Por exemplo, use "nomeCompleto" em vez de "nome", se a variável contém o nome completo de uma pessoa.
8. Use convenções de nomenclatura: Muitas linguagens de programação têm convenções de nomenclatura específicas. Por exemplo, em JavaScript, é comum usar camelCase para nomes de variáveis e propriedades de objeto. Consulte a documentação da linguagem ou framework que está sendo usado para entender as convenções de nomenclatura e usá-las de forma consistente.
   
   Ao escolher bons nomes, lembre-se de que o objetivo é tornar o código mais legível e fácil de entender para outras pessoas que possam precisar ler ou trabalhar no código no futuro. É importante dedicar tempo para pensar em nomes descritivos e precisos, para garantir que o código seja claro e fácil de entender.
