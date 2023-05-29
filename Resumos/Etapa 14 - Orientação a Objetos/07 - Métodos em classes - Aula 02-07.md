<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Métodos em classes - Aula 02-07

### Resumo

### Conteúdo Extra Aula

Em classes JavaScript, os métodos são funções definidas dentro da classe e são usados para definir o comportamento dos objetos dessa classe. Existem diferentes tipos de métodos em uma classe, como métodos de instância, métodos estáticos e métodos de acesso. Vamos discutir cada um deles:

1. **Métodos de Instância:**

Os métodos de instância são aqueles que são chamados em instâncias específicas da classe. Eles têm acesso às propriedades do objeto usando a palavra-chave `this`. Esses métodos são definidos dentro da classe, mas são acessados através das instâncias da classe.

Exemplo:

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  saudacao() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("João", 25);
pessoa1.saudacao(); // Saída: Olá, meu nome é João e eu tenho 25 anos.
```

Nesse exemplo, o método `saudacao()` é um método de instância que imprime uma mensagem com base nas propriedades `nome` e `idade` do objeto.

2. **Métodos Estáticos:**

Os métodos estáticos são métodos que pertencem à classe em si, não às instâncias da classe. Eles são chamados diretamente na classe, sem a necessidade de criar uma instância. Esses métodos são úteis quando você precisa de um comportamento específico relacionado à classe, mas não depende de instâncias individuais.

Exemplo:

```javascript
class Utilitarios {
  static soma(a, b) {
    return a + b;
  }
}

console.log(Utilitarios.soma(2, 3)); // Saída: 5
```

Nesse exemplo, o método estático `soma()` pertence à classe `Utilitarios` e pode ser chamado diretamente na classe, sem a necessidade de criar uma instância.

3. **Métodos de Acesso (Getters e Setters):**

Os métodos de acesso, também conhecidos como getters e setters, são métodos especiais usados para obter e definir o valor de uma propriedade de um objeto. Eles fornecem controle sobre a leitura e a atribuição de valores a propriedades.

Exemplo:

```javascript
class Retangulo {
  constructor(largura, altura) {
    this._largura = largura;
    this._altura = altura;
  }

  get area() {
    return this._largura * this._altura;
  }

  set largura(valor) {
    if (valor > 0) {
      this._largura = valor;
    }
  }
}

const retangulo = new Retangulo(5, 3);
console.log(retangulo.area); // Saída: 15

retangulo.largura = 10;
console.log(retangulo.area); // Saída: 30
```

4. **Métodos de Protótipo:**

Os métodos de protótipo são adicionados ao protótipo da classe e são compartilhados por todas as instâncias da classe. Eles são definidos fora do corpo da classe usando a sintaxe `NomeDaClasse.prototype.nomeDoMetodo = function() { ... }`.

Exemplo:

```javascript
class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }
}

Carro.prototype.exibirInformacoes = function() {
  console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
};

const carro1 = new Carro("Ford", "Mustang");
carro1.exibirInformacoes(); // Saída: Marca: Ford, Modelo: Mustang
```

Nesse exemplo, o método `exibirInformacoes()` é adicionado ao protótipo da classe `Carro` e está disponível para todas as instâncias da classe.

5. **Métodos Assíncronos:**

Os métodos assíncronos são aqueles que retornam uma promessa (`Promise`) e são usados para lidar com operações assíncronas, como chamadas de API ou operações de E/S.

Exemplo:

```javascript
class Usuario {
  constructor(id) {
    this.id = id;
  }

  async obterDetalhes() {
    try {
      const resposta = await fetch(`https://api.exemplo.com/usuarios/${this.id}`);
      const dados = await resposta.json();
      return dados;
    } catch (erro) {
      console.error("Erro ao obter detalhes do usuário:", erro);
    }
  }
}

const usuario = new Usuario(123);
usuario.obterDetalhes().then(dados => {
  console.log(dados);
});
```

Nesse exemplo, o método `obterDetalhes()` é um método assíncrono que usa a função `fetch` para fazer uma chamada à API e obter os detalhes do usuário com base no ID fornecido.

Esses são alguns dos tipos de métodos que podem ser usados em classes JavaScript. Cada tipo de método possui sua própria finalidade e uso específico, permitindo a criação de classes flexíveis e com comportamentos personalizados.
