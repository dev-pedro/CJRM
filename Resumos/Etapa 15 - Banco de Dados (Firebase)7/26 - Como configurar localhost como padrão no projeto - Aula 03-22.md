<!--
Antes de publicar a issue, lembre-se de clicar na aba "Preview", para visualizar se a formatação está correta =)
-->

<!-- Escreva/insira as imagens após essa linha -->

# Como configurar localhost como padrão no projeto - Aula 03-22

### Resumo

### Configurando a extensão Live Server

O plugin Live Server no Visual Studio Code usa automaticamente o endereço `127.0.0.1` para iniciar o servidor local. Se você preferir usar `localhost` em vez de `127.0.0.1`, você pode fazer isso através de algumas configurações. Por favor, siga os passos abaixo:

**Passo 1: Abra as configurações do Live Server**

1. No Visual Studio Code, vá para a seção de extensões clicando no ícone de quadrado no canto esquerdo ou use o atalho `Ctrl + Shift + X`.
2. Encontre a extensão "Live Server" e clique no ícone de engrenagem (Configurações) logo abaixo da extensão.

**Passo 2: Edite as Configurações**

1. Dentro das configurações da extensão "Live Server", você verá uma lista de opções disponíveis.
2. Clique em "Settings" para abrir as configurações do Live Server.

**Passo 3: Altere as Configurações**

1. Na seção de configurações do Live Server, você verá uma opção chamada "Use Local IP". Essa opção está definida como `true` por padrão, o que significa que ele usará o endereço `127.0.0.1`.
2. Clique no ícone de lápis ao lado da opção "Use Local IP" para editá-la.
3. Altere o valor de `true` para `false`. Isso fará com que o Live Server use "localhost" como endereço.

**Passo 4: Salve as Configurações**

1. Após alterar a opção "Use Local IP", clique em "Save" (Salvar) para aplicar as alterações.

Agora, quando você usar o plugin Live Server para iniciar o servidor local, ele deve usar "localhost" em vez de "127.0.0.1" como endereço. Lembre-se de que você precisa reiniciar o servidor Live Server após fazer essas alterações para que elas tenham efeito.

Caso você não encontre uma opção específica para alterar o endereço IP nas configurações do Live Server, verifique a documentação do plugin ou os fóruns de suporte para obter informações mais detalhadas.

### Outra Maneira

Criar um arquivo `settings.json` na pasta `.vscode` na raiz do seu projeto é uma ótima maneira de personalizar as configurações do Live Server no Visual Studio Code. O `settings.json` permite que você configure diversas opções para a extensão. No seu caso, você está configurando a porta e o host.

Siga os passos abaixo para realizar essa configuração:

**Passo 1: Criar a Pasta .vscode**

1. Abra a pasta raiz do seu projeto.
2. Crie uma nova pasta chamada `.vscode`.

**Passo 2: Criar o Arquivo settings.json**

1. Dentro da pasta `.vscode`, crie um arquivo chamado `settings.json`.
2. Cole o seguinte conteúdo no arquivo:

```json
{
  "liveServer.settings.port": 5500,
  "liveServer.settings.host": "localhost"
}
```

Neste exemplo, você definiu a porta como 5500 e o host como "localhost".

**Passo 3: Iniciar o Live Server**

1. Abra o arquivo HTML que você deseja visualizar com o Live Server.
2. Clique com o botão direito no arquivo e selecione "Open with Live Server".

O Live Server agora deve usar as configurações que você definiu no arquivo `settings.json`.

Lembre-se de que o Live Server no Visual Studio Code oferece várias outras configurações que você pode personalizar para atender às suas necessidades, como opções de navegador, recursos de sincronização, SSL e muito mais. Se você precisar ajustar outras configurações, pode fazer isso seguindo um processo semelhante de edição do arquivo `settings.json`.

# Referencias

[Visual Studio Code User and Workspace Settings](https://code.visualstudio.com/docs/getstarted/settings)

[Live Server - Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

[GitHub - Live Server](https://github.com/ritwickdey/vscode-live-server)
