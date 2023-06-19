# Frete Rápido

Aplicativo Web para acompanhamento de cotações de moedas

## Recursos

Visualização das cotações das moedas Dólar Canadense, Peso Argentino e Libra Esterlina;
Atualização automática das cotações a cada 3 minutos.

## Bibliotecas e frameworks

- Angular 16.0.0 com animations e router
- RxJS 7.8.0

## Requisitos e instalação

- NodeJS 16.13 ou superior
- Angular (com CLI) 16.0.0

### Nodejs

Para rodar o projeto é necessário possuir o node versão 16.13.0 ou superior, para instalá-lo, basta seguir as instruções de acordo com o seu sistema operacional através do site: https://nodejs.org/

Após a instalação, você pode verificar o funcionamento do Node com o comando:

```bash
node -v
```

O NPM é instalado junto ao node js, e seu funcionamento pode ser verificado através do comando:

```bash
npm -v
```

### Angular

Para instalar o Angular, após a instalação do node, executar o comando abaixo:

```bash
npm install -g @angular/cli
```

Usuários do Windows podem precisar executar o passo abaixo, tendo em vista que o SO tem a execução de scripts do PowerShell desativada por padrão. Para habilitar esse recurso, rode o comando abaixo, em um prompt do PowerShell, logado como Administrador:

```ps
Set-Execution-Police -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Instalando o projeto

Para instalar o projeto, basta executar o comando:

```bash
npm install
```

### Executando o projeto localmente

Para executar o projeto, basta rodar o comando:

```bash
ng s --o
```

O parâmetro `--o` abrirá um navegador ao executar o projeto.

### Construindo o projeto

O projeto pode ser construído para distribuição com o comando:

```bash
ng build
```

Ao finalizar a construção, a aplicação estará disponível para uso e distribuição na pasta `dist` na raiz do projeto.

## Executando o projeto com Docker

Para executar o projeto utilizando o Docker, basta rodar o comando abaixo para gerar a imagem:

```bash
sudo docker build -t freterapido .
```

Em seguida, execute o comando a seguir para subir o container:

```bash
sudo docker run -p 80:80 -d --name container-freterapido freterapido
```

Feito os passos anteriores, digite no navegador o caminho http://localhost:80 para acessar o projeto enquanto estiver executando o container.
