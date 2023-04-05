<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Conhecendo a date-fns - Aula 02-03

### Resumo

### date-fns (library)

`date-fns` é uma biblioteca JavaScript de código aberto que fornece funções para manipulação e formatação de datas. Ele é usado para trabalhar com datas em JavaScript de forma fácil, intuitiva e eficiente.

Algumas das funcionalidades do `date-fns` incluem:

- Manipulação de datas, como adicionar ou subtrair dias, meses ou anos;
- Comparação de datas;
- Formatação de datas em diferentes formatos;
- Análise de datas em diferentes formatos;
- Cálculo de diferenças de tempo entre duas datas;
- Localização de datas em diferentes fusos horários.

Por exemplo, para adicionar um mês a uma determinada data usando o `date-fns`, você pode fazer o seguinte:

```javascript
const minhaData = new Date();
const dataAdicionada = dateFns.addMonths(minhaData, 1);

console.log(dataAdicionada);
```

Nesse exemplo, importamos a função `addMonths` do `date-fns` para adicionar um mês à data atual e, em seguida, imprimimos a data adicionada no console.

O `date-fns` é uma biblioteca muito útil para trabalhar com datas em JavaScript e é amplamente utilizado em muitos projetos de front-end e back-end. Ele também é bem documentado e possui uma grande comunidade de desenvolvedores ativos, o que torna fácil encontrar ajuda e recursos para usá-lo.

### isAfter() - date-fns

Aqui está um exemplo de uso da função `isAfter` do `date-fns`:

```javascript
const minhaData = new Date('2023-04-04');
const outraData = new Date('2023-04-03');

const resultado = dateFns.isAfter(minhaData, outraData);
console.log(resultado); // Output: true
```

Nesse exemplo, estamos usando a função `isAfter` do `date-fns` para verificar se a `minhaData` é depois da `outraData`. A função retorna `true` porque `minhaData` é de fato depois da `outraData`.

Observe que as datas são passadas como objetos `Date` e que a ordem das datas na função `isAfter` é importante - a primeira data deve ser a data posterior e a segunda data deve ser a data anterior.

Essa função é útil para verificar se uma data é posterior a outra data em algum contexto, por exemplo, para verificar se uma data de entrega é posterior à data atual em um aplicativo de comércio eletrônico.

### format() - date-fns

aqui está um exemplo de uso da função `format` do `date-fns`:

```javascript
const minhaData = new Date('2023-04-04');
const resultado = dateFns.format(minhaData, 'dd/MM/yyyy');

console.log(resultado); // Output: "04/04/2023"
```

Nesse exemplo, estamos usando a função `format` do `date-fns` para formatar a `minhaData` em um formato específico. A função retorna uma string formatada de acordo com o segundo argumento passado para ela. No caso, estamos formatando a data para o formato "dd/MM/yyyy", que representa o dia, mês e ano separados por barras.

Observe que a data é passada como um objeto `Date` e que o segundo argumento é uma string que define o formato desejado. O `date-fns` fornece muitos formatos predefinidos para datas, mas você também pode definir seu próprio formato personalizado.

Essa função é útil para formatar datas de acordo com as necessidades do seu aplicativo, por exemplo, para exibir datas em um formato específico em uma interface do usuário.

Um exemplo de uso da função `format` do `date-fns` com três argumentos:

```javascript
const minhaData = new Date('2023-04-04');
const options = { locale: ptBR }
const resultado = dateFns.format(minhaData, 'dd/MM/yyyy, hh:mm:ss a', options);

console.log(resultado); // Output: "04/04/2023, 12:00:00 AM"
```

Nesse exemplo, estamos usando a função `format` do `date-fns` com três argumentos. Além da data e do formato da string, estamos passando um objeto de opções `const options` para definir o idioma da localização.

O segundo argumento é uma string que define o formato desejado, incluindo informações sobre a data, hora e meridiano. O terceiro argumento é um objeto de opções que inclui o idioma da localização. Nesse caso, estamos definindo o idioma para "pt-BR" para exibir a data e hora no formato em português brasileiro.

Observe que o formato da string inclui um `a` minúsculo no final para exibir o meridiano, que será `AM` ou `PM` dependendo da hora.

Essa função é útil para formatar datas e horas em diferentes formatos e localizações de acordo com as necessidades do seu aplicativo.

### distanceInWords - date-fns

Aqui está um exemplo de uso da função `distanceInWords` do `date-fns`:

```javascript
const past = new Date('2023-04-01 16:00:00');
const present = new Date('2023-04-01 18:00:00');
const options = { addSuffix: true }
const resultado = dateFns.distanceInWords(present, past, options);
console.log(resultado); // Output: "about 2 hours ago"
```

Nesse exemplo, estamos usando a função `distanceInWords` do `date-fns` para calcular a diferença em palavras entre duas datas - a `dataInicial` e a `dataFinal`. A função retorna uma string que representa a diferença entre as duas datas.

Observe que as datas são passadas como objetos `Date` e que o terceiro argumento é um objeto de opções `const options` que inclui a opção `addSuffix: true`. Essa opção adiciona um sufixo "atrás" ou "frente" à string de saída, dependendo se a `dataFinal` é anterior ou posterior à `dataInicial`.

Essa função é útil para mostrar a diferença entre datas de forma amigável ao usuário em uma interface do usuário. Por exemplo, pode ser usado para exibir a data e hora em palavras para uma publicação em um blog, como "há 3 dias" ou "há 1 hora".

#### Referencias

[date-fns - format](https://date-fns.org/v1.9.0/docs/format)

[date-fns](https://date-fns.org/)
