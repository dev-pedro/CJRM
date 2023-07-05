<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Introdução ao Firebase - Aula 01-10

### Resumo

### Firebase do Google

O Firebase é uma plataforma desenvolvida pelo Google que fornece uma variedade de ferramentas e serviços para desenvolvimento de aplicativos móveis e web. Ele oferece uma ampla gama de recursos que ajudam os desenvolvedores a criar aplicativos de alta qualidade com facilidade.

O Firebase é conhecido por sua facilidade de uso e flexibilidade, permitindo que os desenvolvedores se concentrem na criação de recursos e funcionalidades de aplicativos, em vez de se preocuparem com a infraestrutura e a configuração de servidores.

O Firebase oferece um banco de dados NoSQL chamado Firebase Realtime Database. Ele é um banco de dados em tempo real baseado em documentos JSON estruturados como árvores. O Firebase Realtime Database permite armazenar e sincronizar dados em tempo real entre clientes e servidores, tornando-o adequado para aplicativos que requerem atualizações em tempo real, como bate-papo em tempo real, colaboração em tempo real e notificações em tempo real.

Aqui estão alguns dos principais recursos e serviços oferecidos pelo Firebase:

1. Banco de Dados em Tempo Real: O Firebase Realtime Database é um banco de dados hospedado na nuvem que permite armazenar e sincronizar dados em tempo real. Ele usa o modelo de dados JSON e é acessível tanto por aplicativos móveis quanto por aplicativos web.

2. Autenticação de Usuários: O Firebase Authentication fornece recursos completos de autenticação de usuários, incluindo login com e-mail/senha, login social (por exemplo, usando contas do Google, Facebook, Twitter) e autenticação com provedores de identidade populares, como o Apple Sign-In.

3. Armazenamento em Nuvem: O Firebase Storage permite armazenar e compartilhar arquivos em nuvem de forma fácil e eficiente. É útil para armazenar imagens, vídeos, documentos e outros tipos de arquivos usados em aplicativos.

4. Mensagens e Notificações: O Firebase Cloud Messaging (FCM) permite o envio de mensagens e notificações para usuários em dispositivos móveis e navegadores da web. É uma maneira eficaz de engajar os usuários e manter a comunicação com eles.

5. Hospedagem de Sites: O Firebase Hosting oferece hospedagem estática para sites e aplicativos da web. É possível implantar e hospedar sites estáticos diretamente do Firebase, sem a necessidade de um servidor web separado.

6. Análise de Desempenho: O Firebase Performance Monitoring permite acompanhar o desempenho dos aplicativos em tempo real, identificando problemas de latência, monitorando métricas de desempenho e obtendo informações valiosas sobre a experiência do usuário.

7. Testes e Qualidade: O Firebase Test Lab permite testar aplicativos em uma ampla variedade de dispositivos e configurações diferentes, ajudando a garantir a qualidade e a estabilidade dos aplicativos.

Esses são apenas alguns dos serviços oferecidos pelo Firebase. A plataforma continua evoluindo, e novos recursos e melhorias são adicionados regularmente para ajudar os desenvolvedores a criar aplicativos melhores e mais eficientes.

### Banco de Dados SQL x NoSQL

Bancos de dados SQL (Structured Query Language) e NoSQL (Not Only SQL) são dois tipos diferentes de bancos de dados que têm abordagens distintas para o armazenamento e recuperação de dados.

Banco de Dados SQL:

- Estrutura: Os bancos de dados SQL são baseados em um modelo relacional, no qual os dados são organizados em tabelas com linhas e colunas. Cada tabela possui um esquema predefinido que define a estrutura dos dados e os relacionamentos entre as tabelas.
- Consultas: Os bancos de dados SQL usam a linguagem SQL para realizar consultas e manipulações dos dados. O SQL fornece uma sintaxe padronizada para recuperar, inserir, atualizar e excluir dados.
- Transações: Os bancos de dados SQL são conhecidos por seu suporte a transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade). Isso garante que as operações sejam atomicamente executadas e mantém a integridade dos dados em situações de falha.
- Escalabilidade: Os bancos de dados SQL são geralmente escaláveis verticalmente, o que significa que eles podem ser atualizados adicionando mais recursos (por exemplo, RAM, CPU) ao servidor. No entanto, a escalabilidade horizontal pode ser desafiadora.
- Esquema rígido: Os bancos de dados SQL têm um esquema rígido, o que significa que a estrutura dos dados deve ser definida antecipadamente e seguir um modelo predefinido.

Banco de Dados NoSQL:

- Estrutura: Os bancos de dados NoSQL adotam modelos não relacionais e não possuem uma estrutura fixa. Eles podem ser baseados em documentos, grafos, pares chave-valor ou colunas amplamente distribuídas.
- Flexibilidade: Os bancos de dados NoSQL oferecem flexibilidade em termos de esquema dos dados. Os registros individuais não precisam seguir o mesmo formato, permitindo que os dados sejam adicionados, modificados e removidos sem um esquema predefinido.
- Escalabilidade: Os bancos de dados NoSQL são projetados para escalabilidade horizontal, o que significa que podem lidar com grandes volumes de dados distribuídos em vários servidores. Eles são adequados para cenários de aplicativos que precisam dimensionar horizontalmente para atender ao crescimento da carga de trabalho.
- Consultas: As consultas em bancos de dados NoSQL podem variar de acordo com o modelo de dados adotado. Alguns bancos de dados NoSQL suportam consultas flexíveis usando uma linguagem própria, enquanto outros têm recursos mais limitados.
- Desempenho: Os bancos de dados NoSQL são projetados para fornecer alto desempenho e escalabilidade, especialmente em cenários de leitura/gravação intensiva.
- Ausência de transações ACID: Muitos bancos de dados NoSQL não oferecem suporte completo a transações ACID. Em vez disso, eles podem fornecer consistência eventual, que é uma garantia de que os dados serão eventualmente consistentes, mas não necessariamente imediatamente.

A escolha entre um banco de dados SQL e NoSQL depende das necessidades e requisitos específicos do projeto. Os bancos de dados SQL são mais adequados para casos em que a estrutura dos dados é bem definida, a consistência transacional é crucial e a escalabilidade vertical.

# Links

[Firebase](https://firebase.google.com)


