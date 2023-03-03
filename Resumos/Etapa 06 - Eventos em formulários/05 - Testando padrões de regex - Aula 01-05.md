<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Testando padrões de regex - Aula 01-05

### Resumo

#### Método search()

O método `search()` é uma função de string em JavaScript que é usada para procurar uma expressão regular em uma string e retornar a posição do primeiro caractere correspondente na string. Se a expressão regular não for encontrada, o método `search()` retornará o valor -1.

A sintaxe básica do método `search()` é a seguinte:

```javascript
string.search(regexp)
```

Onde `string` é a string na qual deseja-se procurar e `regexp` é a expressão regular a ser encontrada.

Por exemplo, considere o seguinte código:

```javascript
const str = "Hello World";
const pos = str.search(/World/);
console.log(pos); // Saída: 6
```

Nesse exemplo, a expressão regular "/World/" é procurada na string "Hello World" usando o método `search()`. Como a expressão regular é encontrada na posição 6 da string, o método `search()` retorna o valor 6.

Também é possível usar o método `search()` com uma string em vez de uma expressão regular. Nesse caso, a string será convertida em uma expressão regular antes da pesquisa ser realizada. Por exemplo:

```javascript
const str = "Hello World";
const pos = str.search("World");
console.log(pos); // Saída: 6
```

Nesse exemplo, a string "World" é usada em vez de uma expressão regular. A string é automaticamente convertida em uma expressão regular antes de realizar a pesquisa.

Também é possível usar uma expressão regular mais complexa com o método `search()`. Por exemplo:

```javascript
const str = "The quick brown fox JUMPS over the lazy dog";
const pos = str.search(/[A-Z]{5}/);
console.log(pos); // Saída: 20
```

Nesse exemplo, a expressão regular "/[A-Z]{5}/" é procurada na string "The quick brown fox jumps over the lazy dog" usando o método `search()`. Essa expressão regular procura por cinco letras maiúsculas consecutivas na string. Como as letras "J", "U", "M", "P" e "S" atendem a esse critério e estão na posição 20 da string (começando em zero), o método `search()` retorna o valor 20.

#### Método test()

O método `test()` é um método de objeto em JavaScript que é usado para testar se uma string corresponde a uma expressão regular. Ele retorna um valor booleano: `true` se a string corresponder à expressão regular e `false` se não corresponder.

A sintaxe básica do método `test()` é a seguinte:

```javascript
regexp.test(string)
```

Onde `regexp` é a expressão regular a ser testada e `string` é a string na qual deseja-se procurar.

Por exemplo, considere o seguinte código:

```javascript
const regexp = /World/;
const str1 = "Hello World";
const str2 = "Hello Universe";
console.log(regexp.test(str1)); // Saída: true
console.log(regexp.test(str2)); // Saída: false
```

Nesse exemplo, a expressão regular "/World/" é usada com o método `test()` para testar se a string "Hello World" corresponde a essa expressão regular. Como a string corresponde à expressão regular, o método `test()` retorna `true`.

No segundo caso, a string "Hello Universe" não corresponde à expressão regular "/World/", portanto, o método `test()` retorna `false`.

Também é possível usar o método `test()` com uma expressão regular inline. Por exemplo:

```javascript
const str = "The quick brown fox JUMPS over the lazy dog";

const regexp1 = /[A-Z]{5}/;
console.log(regexp1.test(str)); // Saída: true

const regexp2 = /[0-9]+/;
console.log(regexp2.test(str)); // Saída: false
```

Nesse exemplo, duas expressões regulares são usadas com o método `test()` para testar se a string "The quick brown fox JUMPS over the lazy dog" corresponde a elas. A primeira expressão regular "/[A-Z]{5}/" procura por cinco letras maiúsculas consecutivas na string e retorna `true`. A segunda expressão regular "/[0-9]+/" procura por um ou mais dígitos na string e retorna `false`, já que não há dígitos na string.

****

#### Códigos usados nesta aula

HTML:

```javascript
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>O evento submit</title>
  </head>
  <body>
    <h1>O evento submit</h1>

    <form class="sigup-form">
      <!--O valor de um input também pode ser 
        recuperado alterando o 'id' para 'name'
        id="username" -> name="username"-->
      <input type="text" id="username" placeholder="username" autofocus />
      <button>Eviar</button>
    </form>

    <script src="./app.js"></script>
  </body>
</html>
```

CSS:

```css
body {
    background: #eee;
}

h1 {
    text-align: center;
}

form {
    max-width: 200px;
    margin: 40px auto;
    background: white;
    padding: 10px;
}

input, button {
    display: block;
    margin: 10px auto;
    padding: 4px;
}
```

Javascript:

```javascript
const form = document.querySelector('.sigup-form')
//const userName = document.querySelector('#username')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    /*obtendo os dados através da const userName declarada pelo id
    descomente a linha 2 e o console abaixo e atribua 'id=username no input html'*/
    //console.log(userName.value)
    //obtendo o valor do através da referencia do input através do form 
    console.log(form.username.value)
    //obtendo o valor do input através do target do evento
    console.log(event.target.username.value)
})

const username = 'pedrohenrique'
const pattern = /^[a-z]{6,}$/
// const isAMatch = pattern.test(username)

// if(isAMatch){
//     console.log('O teste da regex passou =)')
// }else{
//     console.log('O teste da regex não passou =(')
// }

const result = username.search(pattern)

console.log(result)
```
