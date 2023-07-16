<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Introdução a regras de segurança no Firestore - Aula 02-07

### Resumo

O Firestore é um banco de dados NoSQL baseado em nuvem fornecido pelo Google como parte do Firebase. Ele é amplamente utilizado para armazenar e gerenciar dados de aplicativos da web e móveis. Ao trabalhar com o Firestore, é importante levar em consideração a segurança dos dados armazenados. Aqui estão algumas diretrizes básicas para garantir a segurança no Firestore:

1. Autenticação: Exija que os usuários autentiquem-se antes de acessar o Firestore. Isso pode ser feito usando a autenticação fornecida pelo Firebase, como o login com e-mail/senha, login com redes sociais ou autenticação de terceiros.

2. Autorização: Defina regras de segurança no Firestore para controlar quais usuários têm acesso a quais dados. As regras de segurança são escritas usando a linguagem de regras do Firebase, que permite especificar permissões com base em caminhos, identificadores de usuário, autenticação e outras condições.

3. Validação de dados: Verifique e valide os dados antes de gravá-los no Firestore. Isso pode incluir verificar se os dados estão no formato correto, se atendem a certas restrições ou se passam por alguma lógica de validação específica do seu aplicativo.

4. Proteção contra injeção de dados: Esteja ciente dos riscos de injeção de dados, como ataques de injeção de SQL ou NoSQL. Use consultas parametrizadas ou métodos seguros fornecidos pelo Firestore para evitar vulnerabilidades desse tipo.

5. Monitoramento de segurança: Monitore regularmente os registros de atividades do Firestore para detectar qualquer atividade suspeita ou acesso não autorizado. O Firebase fornece ferramentas para visualizar e analisar os registros de atividades.

6. Atualizações regulares: Mantenha seu aplicativo e o Firestore atualizados com as versões mais recentes. Isso ajuda a garantir que você esteja usando as correções de segurança mais recentes fornecidas pelo Google.

Essas são apenas algumas diretrizes básicas para ajudar a garantir a segurança no Firestore. Dependendo da natureza e dos requisitos específicos do seu aplicativo, você pode precisar adotar medidas de segurança adicionais. É sempre recomendável consultar a documentação oficial do Firebase e seguir as melhores práticas recomendadas pelo Google para garantir a segurança dos seus dados.

### As Regras

O Firestore permite que os desenvolvedores armazenem e sincronizem dados de maneira eficiente em tempo real. No entanto, para garantir a segurança dos dados do seu aplicativo, é fundamental implementar algumas regras de segurança no Firestore. Essas regras são usadas para controlar quem pode ler, gravar e excluir dados no banco de dados.

As regras de segurança no Firestore são escritas em uma linguagem de regras chamada "Firebase Security Rules". Elas são aplicadas no lado do servidor e são executadas sempre que há uma tentativa de leitura ou gravação de dados no Firestore. As regras de segurança ajudam a proteger os dados e evitar acessos não autorizados ou modificações indevidas.

A seguir, apresento uma introdução básica sobre como escrever e estruturar essas regras de segurança no Firestore:

1. Escopo das regras:
   As regras são aplicadas em três níveis principais: leitura, gravação e exclusão de dados. Você pode definir regras para a coleção inteira, documentos individuais ou subcoleções.

2. Autorização baseada em regras:
   O Firestore utiliza uma abordagem de autorização baseada em regras. Isso significa que você deve permitir explicitamente as ações que deseja que os usuários autenticados possam realizar. Se uma ação não for permitida explicitamente, ela será bloqueada por padrão.

3. Variáveis disponíveis:
   Existem algumas variáveis que você pode usar nas regras para controlar o acesso, como:
   
   - `request.auth`: Contém informações sobre o usuário autenticado, como ID e claims.
   - `request.resource`: Representa o recurso alvo da operação (antes da gravação ser efetivada).
   - `resource.data`: Representa o recurso alvo após a gravação ser efetivada (disponível apenas nas regras de gravação).

4. Regras de leitura:
   Para permitir a leitura de dados, você pode usar `allow read` e definir condições para permitir ou negar o acesso aos dados.

5. Regras de gravação:
   Para permitir a gravação de dados, você pode usar `allow write` e também definir condições para autorizar ou negar a escrita nos dados.

6. Regras de exclusão:
   Para permitir a exclusão de dados, você pode usar `allow delete` e definir condições para permitir ou negar a exclusão.

7. Segurança granular:
   As regras de segurança podem ser específicas para cada operação e também podem ser combinadas para fornecer segurança granular aos dados.

É importante lembrar que as regras de segurança são cruciais, mas devem ser escritas com cuidado. Se não forem configuradas corretamente, elas podem restringir indevidamente o acesso legítimo dos usuários ou, em alguns casos, permitir acesso não autorizado.

Antes de implantar as regras de segurança em um ambiente de produção, é altamente recomendado que você teste exaustivamente suas regras em um ambiente de desenvolvimento ou staging para garantir que elas estejam funcionando conforme o esperado.

Para mais detalhes e informações sobre como escrever regras de segurança no Firestore, consulte a documentação oficial da Firebase sobre "Firebase Security Rules" para Firestore.

### Teste Mode

No Firebase Firestore, você pode testar as suas regras de segurança usando o "Simulador de Regras" (Rules Simulator) fornecido pela própria plataforma Firebase. O "Simulador de Regras" permite que você avalie como suas regras de segurança se comportam em relação a diferentes cenários sem afetar diretamente os dados do seu aplicativo em produção. Isso é especialmente útil para verificar a correção e a eficácia das suas regras antes de implementá-las em um ambiente de produção.

A seguir, estão os passos básicos para utilizar o "Simulador de Regras" para testar suas regras de segurança no Firestore:

1. Acesse o Console Firebase:
   Acesse o Console Firebase em [https://console.firebase.google.com/](https://console.firebase.google.com/) e selecione o projeto do seu aplicativo.

2. Abra o Firestore:
   No Console Firebase, vá para a seção "Firestore" e selecione a aba "Regras".

3. Acesse o "Simulador de Regras":
   Na página de regras do Firestore, você encontrará o "Simulador de Regras" na parte superior direita da tela.

4. Configurar a simulação:
   No "Simulador de Regras", você poderá configurar os dados de simulação, como caminho, método (GET, SET, UPDATE, DELETE) e dados simulados (request.auth, request.resource, resource.data, etc.).

5. Executar a simulação:
   Com as configurações de simulação definidas, clique no botão "Simular" para executar a simulação.

6. Analisar o resultado:
   O "Simulador de Regras" informará se a ação simulada foi permitida ou negada de acordo com as suas regras de segurança.

7. Depurar e ajustar as regras:
   Se a ação for negada e você espera que ela seja permitida, ou vice-versa, será necessário revisar suas regras de segurança e possivelmente ajustá-las para obter o comportamento desejado.

Lembre-se de que o "Simulador de Regras" oferece um ambiente seguro para testar suas regras, mas ele não substitui completamente os testes em um ambiente de desenvolvimento real. Por isso, é importante também fazer testes adicionais usando aplicativos de desenvolvimento e cenários reais antes de implementar as regras em produção.

Além disso, o Firebase também permite visualizar os registros de auditoria que mostram quais regras foram avaliadas em cada operação, ajudando a entender como as regras estão sendo aplicadas em cada interação com o Firestore. Esses registros podem ser úteis para depuração e análise de possíveis problemas com as regras de segurança.

### Regras em Teste Mode

```firestore-security-rules
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2023, 8, 4);
    }
  }
}
```

As regras de segurança acima definem as permissões de leitura e gravação para todos os documentos em um banco de dados Firestore. Vamos analisar cada parte das regras:

1. `rules_version = '2';`: Esta declaração define a versão das regras de segurança que estão sendo utilizadas. Neste caso, estamos usando a versão 2.

2. `service cloud.firestore { ... }`: Indica que essas regras são aplicadas ao Firestore.

3. `match /databases/{database}/documents { ... }`: Este trecho define o ponto de entrada para as regras de segurança. Ele corresponde a todos os documentos no banco de dados.

4. `match /{document=**} { ... }`: Este padrão de correspondência corresponde a qualquer caminho de documento no Firestore (ou seja, a qualquer coleção ou subcoleção) de forma recursiva, permitindo que as regras abaixo se apliquem a todos os documentos.

5. `allow read, write: if request.time < timestamp.date(2023, 8, 4);`: Aqui, definimos as permissões para leitura e gravação. A condição `if request.time < timestamp.date(2023, 8, 4)` impõe que apenas leituras e gravações que ocorrerem antes da data e hora especificadas sejam permitidas.

Em resumo, essas regras de segurança permitem leitura e gravação em todos os documentos do Firestore, mas apenas até a data de 4 de agosto de 2023. A partir desse momento, todas as operações de leitura e gravação serão negadas. Isso pode ser útil para limitar o acesso temporário a dados ou preparar uma migração para uma nova estrutura de regras de segurança em uma data específica.
