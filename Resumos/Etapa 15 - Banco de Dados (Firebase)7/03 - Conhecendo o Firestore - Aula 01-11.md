<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Conhecendo o Firestore - Aula 01-11

### Resumo

### Firestore

O Firestore é um banco de dados NoSQL (não relacional) desenvolvido pelo Google como parte do Firebase, uma plataforma de desenvolvimento de aplicativos. O Firestore é projetado para armazenar e sincronizar dados em tempo real para aplicativos da web, móveis e servidor.

Aqui estão algumas características e conceitos-chave do Firestore:

1. Estrutura de dados: O Firestore organiza os dados em coleções, que são grupos de documentos. Cada documento é uma unidade de armazenamento para os dados e é composto por pares de chave-valor. As chaves são strings e os valores podem ser de vários tipos, como strings, números, objetos, arrays, booleanos, entre outros.

2. Escalabilidade: O Firestore é escalável horizontalmente, o que significa que pode lidar com grandes volumes de dados e tráfego de leitura/gravação simultâneos. Ele distribui automaticamente os dados em vários servidores para garantir o desempenho e a disponibilidade.

3. Consultas: O Firestore suporta consultas poderosas para recuperar dados com base em critérios específicos. Você pode consultar documentos com base em valores de campo, classificar resultados, combinar várias condições e usar operadores lógicos, entre outras funcionalidades.

4. Real-time: Uma das principais vantagens do Firestore é o suporte a sincronização em tempo real. Isso significa que, se os dados são alterados em um dispositivo, as alterações são automaticamente propagadas para todos os dispositivos conectados em tempo real, permitindo uma experiência em tempo real para os usuários.

5. Segurança: O Firestore oferece recursos de segurança para proteger seus dados. Você pode definir regras de segurança para determinar quem pode acessar e modificar os dados, com base em autenticação de usuário e outros critérios.

6. Integrações: O Firestore é parte do Firebase, uma plataforma completa que inclui muitos outros serviços para o desenvolvimento de aplicativos, como autenticação de usuário, armazenamento de arquivos, análise de dados, notificações push e muito mais. Ele também possui bibliotecas de cliente para várias plataformas, como Android, iOS, Web e Node.js, tornando mais fácil integrá-lo em diferentes tipos de aplicativos.

Essas são apenas algumas informações básicas sobre o Firestore. Existem muitos recursos adicionais e detalhes a serem explorados, dependendo das necessidades específicas do seu projeto. Espero que isso tenha lhe dado uma introdução útil ao Firestore!

### Colletions (Coleções)

No Firestore, uma coleção é um agrupamento lógico de documentos. É onde você armazena seus dados e os organiza de acordo com um determinado critério ou contexto.

Uma coleção pode conter qualquer número de documentos, e cada documento é identificado por um ID exclusivo dentro da coleção. Os documentos dentro de uma coleção não precisam ter a mesma estrutura; cada documento pode ter seus próprios campos e valores.

As coleções são criadas de forma hierárquica. Por exemplo, imagine um aplicativo de lista de tarefas, onde você pode ter várias listas de tarefas. Nesse caso, você pode criar uma coleção chamada "listas_de_tarefas" e dentro dessa coleção criar documentos individuais para cada lista de tarefas. Cada documento representará uma lista de tarefas específica e pode conter campos como "nome", "descrição", "data de criação", etc.

Dentro de um documento, você pode ter subcoleções adicionais para organizar os dados ainda mais. Por exemplo, dentro de um documento de lista de tarefas, você pode ter uma subcoleção chamada "tarefas_concluídas" para armazenar as tarefas que já foram concluídas.

A estrutura hierárquica de coleções e documentos no Firestore permite que você organize seus dados de forma lógica e flexível, adequando-se às necessidades específicas do seu aplicativo.

Aqui está um exemplo de como a estrutura de coleções e documentos pode se parecer no Firestore:

```mongodb
- Coleção: listas_de_tarefas
  - Documento: lista1
    - Campo: nome: "Lista de compras"
    - Campo: descrição: "Itens para comprar no supermercado"
    - Campo: data_criacao: "2023-07-05"

  - Documento: lista2
    - Campo: nome: "Lista de afazeres"
    - Campo: descrição: "Tarefas a serem realizadas hoje"
    - Campo: data_criacao: "2023-07-04"
    - Subcoleção: tarefas_concluídas
      - Documento: tarefa1
        - Campo: nome: "Limpar o quarto"
        - Campo: data_conclusao: "2023-07-04"
      - Documento: tarefa2
        - Campo: nome: "Preparar o jantar"
        - Campo: data_conclusao: "2023-07-04"
```

Neste exemplo, temos uma coleção chamada "listas_de_tarefas" que contém dois documentos representando diferentes listas de tarefas. O documento "lista1" tem campos como "nome", "descrição" e "data_criacao". O documento "lista2" possui campos semelhantes, mas também possui uma subcoleção chamada "tarefas_concluídas" para armazenar tarefas específicas que foram concluídas.

Essa é a ideia básica por trás das coleções no Firestore. Elas fornecem uma estrutura organizada e flexível para armazenar e consultar seus dados.

### Outro Exemplo

Aqui está um exemplo da estrutura para uma coleção de "Games" no Firestore, onde cada documento representa um jogo e possui os campos "createdAt", "developedBy" e "title":

```mongodb
- Coleção: Games
  - Documento: game1
    - Campo: createdAt: "2023-07-05"
    - Campo: developedBy: "Rockstar Games"
    - Campo: title: "Grand Theft Auto V"

  - Documento: game2
    - Campo: createdAt: "2023-07-04"
    - Campo: developedBy: "Naughty Dog"
    - Campo: title: "The Last of Us Part II"

  - Documento: game3
    - Campo: createdAt: "2023-07-03"
    - Campo: developedBy: "CD Projekt Red"
    - Campo: title: "Cyberpunk 2077"
```

Neste exemplo, temos uma coleção chamada "Games" que contém três documentos representando jogos reais.

- O primeiro documento, "game1", representa o jogo "Grand Theft Auto V", desenvolvido pela "Rockstar Games" e criado em "2023-07-05".

- O segundo documento, "game2", representa o jogo "The Last of Us Part II", desenvolvido pela "Naughty Dog" e criado em "2023-07-04".

- O terceiro documento, "game3", representa o jogo "Cyberpunk 2077", desenvolvido pela "CD Projekt Red" e criado em "2023-07-03".

Essa é uma representação simples da estrutura da coleção "Games" no Firestore, usando jogos reais como exemplos. Você pode adicionar mais documentos à coleção para incluir outros jogos ou personalizar os campos conforme necessário.

### Latência

A latência no Firestore refere-se ao tempo necessário para executar operações de leitura e gravação de dados no banco de dados. O Firestore é projetado para oferecer um desempenho rápido e eficiente, minimizando a latência sempre que possível.

Existem vários fatores que podem afetar a latência no Firestore:

1. Localização dos servidores: O Firestore possui data centers em várias regiões ao redor do mundo. A latência pode variar com base na proximidade física dos servidores em relação ao local onde seu aplicativo está sendo executado. Geralmente, selecionar a região mais próxima do seu público-alvo pode ajudar a reduzir a latência.

2. Tamanho dos dados: A quantidade de dados que você está lendo ou gravando pode afetar a latência. Operações que envolvem grandes quantidades de dados podem levar mais tempo para serem concluídas.

3. Capacidade da rede: A velocidade e a qualidade da conexão de rede entre o cliente e os servidores do Firestore também podem influenciar a latência. Conexões de rede lentas ou instáveis podem resultar em tempos de resposta mais longos.

4. Otimização do código: A forma como você estrutura e executa suas consultas no Firestore pode afetar o desempenho e a latência. É importante usar consultas eficientes e implementar boas práticas de otimização de código para garantir um desempenho ideal.

É importante notar que a latência no Firestore pode variar dependendo de muitos fatores e, às vezes, podem ocorrer picos ou atrasos imprevisíveis. No entanto, o Firestore é projetado para oferecer um bom desempenho e é otimizado para minimizar a latência sempre que possível.

Se a latência é uma preocupação crítica para o seu aplicativo, você pode considerar estratégias adicionais, como usar o cache local para reduzir as chamadas ao banco de dados e minimizar a dependência da latência da rede.

# Links

[Firebase](https://firebase.google.com/)
