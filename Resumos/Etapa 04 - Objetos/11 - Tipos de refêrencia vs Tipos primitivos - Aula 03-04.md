<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Tipos de refêrencia vs Tipos primitivos - Aula 03-04

### Resumo

Em JavaScript, existem dois tipos principais de valores: tipos de referência e tipos primitivos.

Os tipos primitivos são os tipos de dados mais básicos e simples em JavaScript. Eles são armazenados por valor e incluem:

1. `number` - números, tanto inteiros quanto de ponto flutuante
2. `string` - cadeias de caracteres, como texto
3. `boolean` - valores verdadeiros ou falsos
4. `null` - valor especial que representa a ausência de valor intencional
5. `undefined` - valor especial que representa a ausência de valor não intencional
6. `symbol` - valor único que pode ser usado como chave de objeto

Os tipos de referência, por outro lado, são mais complexos e são armazenados por referência. Eles incluem:

1. `object` - objetos, que são coleções de pares de chave-valor
2. `array` - arrays, que são objetos especiais usados para armazenar coleções ordenadas de valores
3. `function` - funções, que são objetos especiais que podem ser chamados com um conjunto de argumentos para executar uma ação.

Quando um valor de tipo primitivo é atribuído a uma variável, o valor real é copiado para a variável. Por outro lado, quando um valor de tipo de referência é atribuído a uma variável, a variável recebe uma referência à localização na memória onde o objeto é armazenado.

É importante entender a diferença entre tipos primitivos e tipos de referência, porque isso pode afetar como você manipula e passa valores entre funções. Por exemplo, quando você passa um valor de tipo primitivo para uma função, a função recebe uma cópia desse valor, enquanto quando você passa um objeto por referência, a função recebe uma referência ao objeto original e pode modificar o objeto original diretamente.

#### Stack - Tipos Primitivos

Em JavaScript, os tipos primitivos são armazenados na stack. A stack é uma região de memória temporária que é gerenciada automaticamente pelo motor JavaScript.

Quando uma variável é declarada e inicializada com um valor primitivo, um bloco de memória é alocado na stack para armazenar o valor da variável. O tamanho desse bloco de memória é fixo e depende do tipo de dado primitivo. Por exemplo, um número é geralmente armazenado em 8 bytes de memória, enquanto uma string pode variar de tamanho.

Ao contrário dos tipos de referência, os tipos primitivos são armazenados diretamente na variável que se refere a eles, em vez de serem armazenados em outro lugar da memória e referenciados por um ponteiro. Isso significa que, quando você copia ou passa uma variável que contém um tipo primitivo, uma cópia do valor real é passada, não uma referência à memória.

Exemplos de tipos primitivos em JavaScript incluem números, strings, booleanos, null e undefined.

#### Heap - Tipos de Referencia

Em JavaScript, os tipos de referência são armazenados no heap. O heap é uma região de memória dinâmica que é gerenciada pelo motor JavaScript.

Quando você cria um objeto em JavaScript, o motor JavaScript aloca um bloco de memória no heap para armazenar o objeto e um ponteiro para esse bloco de memória é armazenado na variável que se refere ao objeto. Isso significa que, quando você cria uma variável que se refere a um objeto, a variável realmente contém um ponteiro para o objeto no heap, em vez de conter o objeto em si.

Ao contrário dos tipos primitivos, os tipos de referência podem ser de tamanho variável. Isso ocorre porque os objetos podem ter propriedades que variam em tamanho e número, o que significa que o tamanho total do objeto pode variar de objeto para objeto.

Exemplos de tipos de referência em JavaScript incluem objetos, arrays, funções e outros tipos de dados que não são primitivos. Quando você copia ou passa uma variável que contém um tipo de referência, você está passando uma referência ao objeto no heap, em vez de uma cópia do objeto em si. Isso significa que, se você alterar o objeto por meio de uma referência, a alteração será refletida em todas as referências a esse objeto.
