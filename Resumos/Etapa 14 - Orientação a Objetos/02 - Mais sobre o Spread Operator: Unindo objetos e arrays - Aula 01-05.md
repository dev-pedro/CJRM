<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Mais sobre o Spread Operator: Unindo objetos e arrays - Aula 01-05

### Resumo

O operador de spread é uma funcionalidade introduzida no JavaScript ES6 que permite descompactar elementos de um array ou propriedades de um objeto e combiná-los em outro array ou objeto. Ele facilita a cópia e a união de arrays e objetos de maneira simples e concisa.

Vamos começar com exemplos de uso do operador de spread para unir arrays. Suponha que você tenha dois arrays:

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
```

Você pode usar o operador de spread para unir os dois arrays em um terceiro array da seguinte maneira:

```javascript
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

O operador de spread descompacta os elementos de `array1` e `array2` e os combina em `combinedArray`. Dessa forma, você obtém um novo array contendo todos os elementos dos arrays originais.

O operador de spread também pode ser usado para criar cópias de arrays. Por exemplo:

```javascript
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
```

Nesse caso, o operador de spread descompacta os elementos de `originalArray` e os coloca em `copiedArray`, criando assim uma cópia do array original.

Além de arrays, o operador de spread também pode ser aplicado a objetos. Suponha que você tenha dois objetos:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
```

O operador de spread descompacta as propriedades de `obj1` e `obj2` e as combina em `combinedObj`, formando assim um novo objeto contendo todas as propriedades dos objetos originais.

Vale ressaltar que, em caso de propriedades com o mesmo nome, a propriedade do último objeto sobrescreverá a propriedade correspondente dos objetos anteriores.

Em resumo, o operador de spread é uma ótima ferramenta para unir arrays e objetos de maneira simples e eficiente. Ele permite a criação de cópias e a união de elementos em uma única estrutura, facilitando o trabalho com dados complexos no JavaScript.

### Object.assing()

O método `Object.assign()` é uma função embutida do JavaScript que permite copiar propriedades de um ou mais objetos de origem para um objeto de destino. Ele combina as propriedades de objetos múltiplos em um único objeto de destino e retorna esse objeto. O `Object.assign()` é útil quando você deseja criar uma cópia superficial de um objeto ou combinar propriedades de vários objetos em um único objeto.

Aqui está a sintaxe básica do método `Object.assign()`:

```javascript
Object.assign(destino, origem1, origem2, ..., origemN);
```

- `destino`: O objeto de destino onde as propriedades serão copiadas.
- `origem1`, `origem2`, ..., `origemN`: Os objetos de origem a partir dos quais as propriedades serão copiadas.

Vamos ver alguns exemplos para entender melhor o `Object.assign()`:

Exemplo 1: Cópia de propriedades em um novo objeto:

```javascript
const objetoOrigem = { a: 1, b: 2 };
const objetoDestino = Object.assign({}, objetoOrigem);

console.log(objetoDestino); // Output: { a: 1, b: 2 }
```

Nesse exemplo, criamos um novo objeto vazio `{}` como o objeto de destino e copiamos as propriedades do `objetoOrigem` para ele usando o `Object.assign()`. Dessa forma, criamos uma cópia superficial do objeto de origem.

Exemplo 2: Combinação de propriedades de vários objetos:

```javascript
const objetoOrigem1 = { a: 1, b: 2 };
const objetoOrigem2 = { c: 3, d: 4 };
const objetoDestino = Object.assign({}, objetoOrigem1, objetoOrigem2);

console.log(objetoDestino); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

Nesse exemplo, usamos o `Object.assign()` para combinar as propriedades de `objetoOrigem1` e `objetoOrigem2` em um único objeto `objetoDestino`. O objeto de destino começa como um objeto vazio `{}`, e as propriedades de ambos os objetos de origem são copiadas para ele.

Vale ressaltar que, se houver propriedades com o mesmo nome, a última propriedade definida substituirá as anteriores.

O `Object.assign()` também pode ser usado para adicionar ou atualizar propriedades em um objeto existente:

```javascript
const objetoDestino = { a: 1 };
const objetoOrigem = { b: 2, c: 3 };

Object.assign(objetoDestino, objetoOrigem);

console.log(objetoDestino); // Output: { a: 1, b: 2, c: 3 }
```

Nesse exemplo, as propriedades de `objetoOrigem` são adicionadas ao `objetoDestino`. Se alguma propriedade existir no objeto de destino e no objeto de origem com o mesmo nome, a propriedade do objeto de origem sobrescreverá a propriedade do objeto de destino.

Em resumo, o método `Object.assign()` é uma maneira conveniente de copiar propriedades de um ou mais objetos em um objeto de destino ou combinar propriedades de vários objetos em um único objeto. Ele permite criar cópias superficiais de objetos e realizar operações de mesclagem de propriedades de maneira simples. É importante mencionar que o `Object.assign()` realiza uma cópia superficial, o que significa que as propriedades do objeto de origem são copiadas para o objeto de destino diretamente. Se uma propriedade for um objeto complexo, a referência desse objeto será copiada, em vez de criar uma nova cópia profunda do objeto.

Além disso, é necessário observar que o `Object.assign()` não lida com propriedades não enumeráveis e símbolos. Apenas as propriedades enumeráveis e seus valores são copiados.

Uma prática comum é usar o `Object.assign()` em conjunto com objetos literais para criar um novo objeto com propriedades combinadas ou atualizadas:

```javascript
const objetoBase = { a: 1, b: 2 };
const objetoAtualizado = { ...objetoBase, b: 3, c: 4 };

console.log(objetoAtualizado); // Output: { a: 1, b: 3, c: 4 }
```

Nesse exemplo, o objeto `objetoAtualizado` é criado usando o operador de spread (`...`) para descompactar as propriedades de `objetoBase` e, em seguida, as propriedades `b` e `c` são adicionadas/atualizadas no novo objeto. Essa técnica oferece uma alternativa concisa ao `Object.assign()` quando se trata de atualizar ou mesclar propriedades em um novo objeto.

Em resumo, o `Object.assign()` é um método útil para copiar propriedades de objetos de origem para um objeto de destino ou combinar propriedades de vários objetos em um único objeto. Ele é especialmente útil quando usado em conjunto com objetos literais e permite a criação de cópias superficiais de objetos e a atualização/mesclagem de propriedades de maneira eficiente.
