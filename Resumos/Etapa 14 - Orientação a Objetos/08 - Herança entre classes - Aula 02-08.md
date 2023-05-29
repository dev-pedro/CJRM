<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Herança entre classes - Aula 02-08

### Resumo

### Conteúdo Extra Aula

Em JavaScript, é possível usar a herança entre classes para criar uma relação de "classe pai" e "classe filha", onde a classe filha herda propriedades e métodos da classe pai. Isso permite reutilizar e estender a funcionalidade das classes existentes. Para implementar a herança, você pode usar a palavra-chave `extends`. Vamos ver um exemplo:

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log("O animal emite um som.");
  }
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome); // Chama o construtor da classe pai
    this.raca = raca;
  }

  emitirSom() {
    console.log("O cachorro late."); // Sobrescreve o método da classe pai
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}, Raça: ${this.raca}`);
  }
}

const meuCachorro = new Cachorro("Max", "Labrador");
meuCachorro.emitirSom(); // Saída: O cachorro late.
meuCachorro.exibirInfo(); // Saída: Nome: Max, Raça: Labrador
```

Neste exemplo, temos uma classe base chamada `Animal`, que possui um construtor e um método `emitirSom()`. Em seguida, temos a classe `Cachorro`, que estende a classe `Animal` usando a palavra-chave `extends`. Isso indica que `Cachorro` é uma subclasse de `Animal` e herda suas propriedades e métodos.

No construtor de `Cachorro`, usamos a palavra-chave `super` para chamar o construtor da classe pai e passar o parâmetro `nome`. Em seguida, adicionamos uma propriedade `raca` específica da classe `Cachorro`.

Além disso, sobrescrevemos o método `emitirSom()` na classe `Cachorro` para fornecer uma implementação específica para o latido do cachorro.

Finalmente, criamos uma instância da classe `Cachorro` chamada `meuCachorro` e chamamos os métodos `emitirSom()` e `exibirInfo()`.

Com a herança, a classe `Cachorro` pode reutilizar a funcionalidade da classe `Animal` e também adicionar suas próprias propriedades e métodos específicos.

A herança é uma técnica poderosa na programação orientada a objetos, permitindo a criação de hierarquias de classes e a extensão de comportamento de forma organizada e eficiente.
