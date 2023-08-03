<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# O problema em usar innerHTML - Aula 03-09

### Resumo

O uso da propriedade `innerHTML` em JavaScript pode ser problemático e trazer algumas preocupações de segurança, especialmente quando o conteúdo a ser inserido contém dados não confiáveis ou fornecidos por usuários. Aqui estão algumas das principais preocupações ao usar `innerHTML`:

1. **Injeção de código malicioso (XSS)**: Se o conteúdo inserido por meio do `innerHTML` não for devidamente validado ou escapado, pode permitir a injeção de código malicioso, conhecido como ataques de Cross-Site Scripting (XSS). Isso ocorre quando um invasor injeta scripts não confiáveis no conteúdo e, quando esse conteúdo é exibido no navegador de outros usuários, os scripts são executados no contexto da página, permitindo o roubo de informações, cookies de sessão e outras ações maliciosas.

2. **Desempenho**: A utilização do `innerHTML` para manipular o conteúdo da página pode ser menos eficiente em termos de desempenho, especialmente quando comparada a abordagens mais modernas, como o uso do DOM (Document Object Model) para criar, modificar e manipular elementos.

3. **Perda de eventos e dados**: Ao substituir o conteúdo usando `innerHTML`, os elementos e os dados anteriormente associados a eles podem ser perdidos. Isso inclui eventos que estavam anexados aos elementos antes da substituição do conteúdo.

Para evitar os problemas mencionados acima, é recomendado adotar abordagens mais seguras e eficientes ao manipular o conteúdo HTML. Algumas alternativas são:

- **Manipulação do DOM**: Utilize as funções e métodos do DOM para criar, modificar e manipular elementos HTML de forma programática. Isso permite mais controle sobre o conteúdo e evita a execução de código não confiável.

- **textContent**: Em vez de usar `innerHTML`, você pode usar a propriedade `textContent` para definir o texto interno de um elemento. Essa abordagem não interpreta HTML e é mais segura quando você precisa apenas definir texto simples.

- **Sanitização**: Se você precisar permitir alguma entrada HTML de usuários, é importante implementar um processo de sanitização para filtrar qualquer conteúdo malicioso antes de inseri-lo na página.

- **Bibliotecas seguras**: Se você precisa lidar com entradas HTML complexas, considere o uso de bibliotecas de terceiros projetadas para lidar com a sanitização e manipulação segura de HTML.

Lembre-se sempre de tratar dados não confiáveis com cautela e priorizar a segurança ao manipular o conteúdo HTML em sua aplicação.

### Cross-Site Scripting

Cross-Site Scripting, comumente abreviado como XSS, é uma vulnerabilidade de segurança encontrada em aplicações web. Essa vulnerabilidade ocorre quando um aplicativo web permite que dados não confiáveis ​​sejam inseridos e exibidos no navegador de outros usuários. Isso permite que um atacante injete scripts maliciosos (código) no conteúdo da página, que é então executado no contexto do usuário que visualiza a página, permitindo assim que o atacante realize várias ações maliciosas.

Existem três tipos principais de ataques de Cross-Site Scripting:

1. **Reflected XSS**: Neste tipo de ataque, os dados não confiáveis ​​são enviados ao servidor através de um link ou formulário. O servidor então reflete esses dados não tratados de volta na resposta, que é exibida para o usuário que clicou no link ou enviou o formulário. O script malicioso é, portanto, executado no navegador do usuário, permitindo ao atacante roubar cookies de sessão, informações de login ou realizar outras ações maliciosas em nome do usuário.

2. **Stored XSS**: Neste caso, os dados não confiáveis ​​são armazenados no servidor e são exibidos para os usuários posteriormente, sempre que acessam uma determinada página ou visualizam certos conteúdos. O atacante pode inserir o script malicioso em campos de entrada, como caixas de comentários ou campos de perfil. Quando outros usuários visualizam essas páginas, o script é executado em seus navegadores, causando os mesmos problemas que no Reflected XSS.

3. **DOM-based XSS**: Esse tipo de XSS ocorre quando o código do script é executado diretamente no lado do cliente (navegador) e não envia dados ao servidor. O atacante explora vulnerabilidades no código JavaScript da aplicação para injetar e executar o script malicioso no DOM (Document Object Model) da página, causando alterações indesejadas ou roubando informações do usuário.

Para proteger as aplicações web contra ataques de Cross-Site Scripting, é essencial implementar práticas de segurança, como a validação e sanitização rigorosa dos dados de entrada, o uso de técnicas de escape de caracteres ao exibir dados na página e a adoção de políticas de segurança, como a Política de Segurança de Conteúdo (CSP - Content Security Policy). Além disso, é importante manter a aplicação atualizada e fazer auditorias regulares de segurança para identificar e corrigir possíveis vulnerabilidades.
