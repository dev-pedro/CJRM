<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Factory functions e composição de objetos - Aula 03-09

### Resumo

Em JavaScript, um factory function é uma função que retorna um objeto novo. Essa abordagem é útil quando você deseja criar vários objetos com uma estrutura semelhante, mas com diferentes valores de propriedades. O factory function permite encapsular a lógica de criação do objeto e fornecer uma interface simples para criar instâncias.

Aqui está um exemplo básico de uma factory function em JavaScript:

```javascript
function criarPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade,
    saudacao: function() {
      console.log(`Olá, meu nome é ${this,nome} e tenho ${this.idade} anos.);
    }
  };
}

var pessoa1 = criarPessoa("João", 25);
var pessoa2 = criarPessoa("Maria", 30);

pessoa1.saudacao(); // Saída: Olá, meu nome é João e tenho 25 anos.
pessoa2.saudacao(); // Saída: Olá, meu nome é Maria e tenho 30 anos.
```

Nesse exemplo, a função `criarPessoa` é uma factory function que retorna um objeto com propriedades `nome`, `idade` e um método `saudacao` que imprime uma mensagem na console.

A composição de objetos ocorre quando um objeto contém outros objetos como suas propriedades. Essa abordagem permite criar estruturas mais complexas e modulares.

Aqui está um exemplo que demonstra a composição de objetos usando factory functions:

```javascript
function criarEndereco(rua, cidade, estado) {
  return {
    rua: rua,
    cidade: cidade,
    estado: estado
  };
}

function criarPessoa(nome, idade, endereco) {
  return {
    nome: nome,
    idade: idade,
    endereco: endereco,
    saudacao: function() {
      console.log("Olá, meu nome é " + this.nome + " e moro em " + this.endereco.cidade + ", " + this.endereco.estado + ".");
    }
  };
}

var endereco1 = criarEndereco("Rua A", "São Paulo", "SP");
var pessoa1 = criarPessoa("João", 25, endereco1);

pessoa1.saudacao(); // Saída: Olá, meu nome é João e moro em São Paulo, SP.
```

Nesse exemplo, a função `criarEndereco` é uma factory function que retorna um objeto que representa um endereço. A função `criarPessoa` é outra factory function que retorna um objeto com propriedades `nome`, `idade`, `endereco` (que é outro objeto retornado por `criarEndereco`) e o método `saudacao`. Dessa forma, é possível compor objetos e criar estruturas mais complexas.

Essa abordagem de factory functions e composição de objetos é uma técnica comum em JavaScript para criar código modular, reutilizável e com baixo acoplamento.

### Clousere e Escopo Léxico

Closure (clausura) é um conceito importante em JavaScript que está relacionado ao escopo léxico. O escopo léxico é a maneira como o interpretador JavaScript resolve referências a variáveis ​​em tempo de execução, com base na estrutura do código fonte, independentemente de como ou onde a função é chamada.

Uma closure ocorre quando uma função interna (função aninhada) tem acesso às variáveis ​​da função externa, mesmo depois que a função externa é concluída. Isso é possível porque a função interna mantém uma referência ao escopo em que ela foi criada, incluindo todas as variáveis ​​disponíveis nesse escopo.

Aqui está um exemplo que demonstra uma closure em JavaScript:

```javascript
function externa() {
  var mensagem = "Olá";

  function interna() {
    console.log(mensagem);
  }

  return interna;
}

var funcaoClosure = externa();
funcaoClosure(); // Saída: Olá
```

Nesse exemplo, a função externa `externa` cria uma variável `mensagem` e define uma função interna `interna` que imprime essa mensagem. A função externa retorna a função interna sem executá-la. Em seguida, atribuímos a função de retorno a uma variável `funcaoClosure` e a chamamos posteriormente. Mesmo que a função externa já tenha sido concluída, a função interna ainda tem acesso à variável `mensagem` por meio da closure. Assim, quando chamamos `funcaoClosure()`, a mensagem é exibida.

A closure é útil para criar funções que encapsulam dados privados e preservam o acesso a esses dados mesmo após a conclusão da função externa. Isso permite criar um comportamento similar a objetos com propriedades privadas em JavaScript.

No entanto, é importante ter cuidado ao usar closures, pois elas podem levar ao consumo excessivo de memória se as referências aos escopos externos não forem liberadas corretamente.

***

### Informações adicionais

Performance percebida:

[Front In Sampa - Fernanda Bernardo: Perceived Performance](https://youtu.be/VqpnP4UewzU)
