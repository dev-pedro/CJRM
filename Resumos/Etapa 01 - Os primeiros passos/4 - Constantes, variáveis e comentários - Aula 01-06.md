<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Constantes, variáveis e comentários - Aula 01-06

### Resumo

##### Variável - let

Em JavaScript, o "let" é uma palavra-chave usada para declarar variáveis. Ele é semelhante ao "var", mas possui algumas diferenças importantes.

Uma das principais diferenças é que as variáveis declaradas com "let" são limitadas ao escopo do bloco onde elas foram declaradas. Isso significa que elas só podem ser acessadas dentro do bloco onde foram declaradas, e não estão disponíveis fora desse bloco. Por exemplo:

```javascript
if (true) {
  let x = 5;
}
console.log(x); // Erro de referência: x não está definido
```

Outra diferença é que as variáveis declaradas com "let" não são inicializadas com um valor padrão (como undefined) quando elas são declaradas. Elas precisam ser inicializadas explicitamente antes de serem usadas.

```javascript
let y;
console.log(y); // undefined
```

Como o var, o let também sofre o problema do hoisting, ou seja, as variáveis são levadas para o topo do escopo, mas não são inicializadas.

```javascript
console.log(z); // Erro de referência: z não está definido
let z = 3;
```

Em resumo, o let é mais seguro e permite um melhor controle do escopo das variáveis, além de não inicializar automaticamente as variáveis, como ocorre com o var.

# 

##### Variável - Const

Em JavaScript, uma constante é uma variável cujo valor não pode ser alterado após sua inicialização. Ela é declarada usando a palavra-chave "const" seguida pelo nome da constante e atribuindo-lhe um valor. Por exemplo:

```javascript
const poists = 100
console.log(points) // será exibido no console o valor 100
```

Uma vez que a constante é inicializada, não é possível atribuir-lhe um novo valor. Tentar fazê-lo resultará em um erro.

```javascript
points = 200 // um erro será mostrado no console
console.log(points)
```

É importante notar que as constantes só são imutáveis quando se referem a valores primitivos, se for um objeto, suas propriedades podem ser modificadas.

```javascript
const objeto = {age:1};
objeto.age = 44; // isso é permitido e não gera erro
```

Além disso, é importante mencionar que as constantes são hoisted (levantadas) para o topo do escopo, mas não são inicializadas até a sua declaração.

# 

##### Variáveis - var

Em JavaScript, o "var" é uma palavra-chave usada para declarar variáveis. Ele foi introduzido no início da linguagem e é ainda amplamente usado.

Ao contrário do "let" e "const", as variáveis declaradas com "var" não possuem escopo de bloco. Elas são visíveis em todo o escopo onde foram declaradas, incluindo dentro de funções. Por exemplo:

```javascript
if (true) {
  var x = 5;
}
console.log(x); // será exibido no console o valor 5
```

Além disso, as variáveis declaradas com "var" são inicializadas com o valor "undefined" quando elas são declaradas, mesmo que você não lhe atribua um valor.

```javascript
var y;
console.log(y); // undefined
```

Outra característica do "var" é que ele sofre o problema do hoisting, ou seja, as variaveis são levadas para o topo do escopo, mas não são inicializadas.

```javascript
console.log(z); // undefined
var z = 3;
```

Em resumo, o var é uma forma antiga de declarar variáveis mais especificamente antes da versão ES6, e hoje em dia é recomendado usar let ou const, pois eles possuem melhor controle de escopo e não inicializam automaticamente as variáveis.

# 

###### Declaração de variáveis

- Não deve haver duas palavras separadas
  
  ```javascript
  let my age = 44 // forma errada de declarar a variável
  let age = 44 // forma correta de declarar a variável
  ```

- Para usar duas palavras deve seguir a convenção camelCase
  
  ```javascript
  let MyAge = 44 // forma errada de declarar a variável
  const BolaAzul = blue // forma errada de declarar a variável
  
  let myAge = 44 // forma correta de declarar a variável
  const bolaAzul = blue // forma correta de declarar a variável
  ```

- Nomes de variáveis só podem conter: letras, números, underscore ou cifrão e no nome não pode começar com números.

Deve se dar nomes claros e objetivos para suas variáveis que revelam sua intenção para que outros desenvolvedores vejam elas e saibam o que elas fazem.

# 

##### Comentários

Comentários de uma linha: Esses comentários começam com "//" e terminam no final da linha. Tudo o que vier depois do "//" será ignorado pelo interpretador. Por exemplo:

```javascript
// Este é um comentário de uma linha
```

Comentários de múltiplas linhas: Esses comentários começam com /* e terminam com */. Tudo o que vier entre esses dois marcadores será ignorado pelo interpretador. Por exemplo:

```javascript
/*
Este é um comentário de múltiplas linhas.
Ele pode ocupar várias linhas e é útil
para explicar trechos de código mais complexos
*/
```

Os comentários são importantes para documentar o código e ajudar outros desenvolvedores a entender o que está acontecendo. Além disso, eles ajudam você a se lembrar do que fez e por quê, quando voltar ao código depois de algum tempo.

# 

##### Palavras Reservadas (Reserved Word)

As palavras reservadas do JavaScript são:

- break
- case
- catch
- class
- const
- continue
- debugger
- default
- delete
- do
- else
- export
- extends
- finally
- for
- function
- if
- import
- in
- instanceof
- new
- return
- super
- switch
- this
- throw
- try
- typeof
- var
- void
- while
- with
- yield

Essas palavras não podem ser usadas como nomes de variáveis, funções ou classes. Elas têm um significado específico na linguagem e são usadas para controlar o fluxo de execução do código.

# 

*Quando se usa features mais recentes os browsers mais antigos não rodam as aplicações por isso para o treinamento deve-se usar o Google Chrome.*
