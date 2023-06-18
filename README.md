# Frete Rápido

Aplicativo Web para acompanhamento de cotações de moedas

## recursos

Visualização das cotações das moedas Dólar Canadense, Peso Argentino e Libra Esterlina;
Atualização automática das cotações a cada 3 minutos.

## bibliotecas e frameworks

 - Angular 16.0.0 com animations e router
 - RxJS 7.8.0

## requisitos e instalação

 - NodeJS 16.13 ou superior
 - Angular (com CLI) 16.0.0

### nodejs
Para rodar o projeto é necessário possuir o node versão 16.13.0 ou superior, para instalá-lo, basta seguir as instruções de acordo com o seu sistema operacional através do site: https://nodejs.org/

Após a instalação, você pode verificar o funcionamento do Node com o comando:
```bash
node -v
```

O NPM é instalado junto ao node js, e seu funcionamento pode ser verificado através do comando:
```bash
npm -v
```

### angular
Para instalar o Angular, após a instalação do node, executar o comando abaixo:
```bash
npm install -g @angular/cli
```
Usuários do Windows podem precisar executar o passo abaixo, tendo em vista que o SO tem a execução de scripts do PowerShell desativada por padrão. Para habilitar esse recurso, rode o comando abaixo, em um prompt do PowerShell, logado como Administrador:
```ps
Set-Execution-Police -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### instalando o projeto
Para instalar o projeto, basta executar o comando:
```bash
npm install
```

### executando o projeto localmente
Para executar o projeto, basta rodar o comando:
```bash
ng s --o
```

O parâmetro `--o` abrirá um navegador ao executar o projeto.

### construindo o projeto
O projeto pode ser construído para distribuição com o comando:
```bash
ng build
```
Ao finalizar a construção, a aplicação estará disponível para uso e distribuição na pasta `dist` na raiz do projeto.
