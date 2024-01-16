# Projeto automação WEB com Cypress - Nível Básico

Projeto de automação web com Cypress , com ele você irá conseguir escrever seus primeiros casos de testes com uma ferramenta poderosa cheia de recurso que facilitam a sua vida.

## Pré requisitos para utilizar o projeto

### SO
- macOS 10.9 ou supreior (Intel ou Apple Silicon 64-bit (x64 ou arm64))
- Linux Ubuntu 20.04  e superior , Fedora 21 e Debian 8 (x84_64 ou Arm 64 bits (x64 ou arm64))
- Windows 10 ou superior (apenas 64 bits)

### Memória
- Mínimo de 4 GB, 8GB + para execução de testes mais longos.

### NodeJS
- Node.js 18.x
- Node.js 20.x ou superior

### IDE
- VSCODE
- Qualquer outra de sua preferência

### Links de Instalação
- NodeJS - https://nodejs.org/en/download
- VSCODE - https://code.visualstudio.com/download

### Documentos de referência
- Cypress:
    - https://cypress.io/
    - https://example.cypress.io/commands/actions

### Configurando ambiente para começar a usar o Cypress
Agora iremos configurar o ambiente para iniciarmos nosso projeto com o Cypress. para isso é necessário realizar o download da IDE do VSCODE

#### 01 Instalação inicial
Faça o download o NodeJS e instale a versão compatível com seu Sistema Operacional;
Faça o download e instale o VSCODE ou outra IDE de sua preferência;
#### 02 Instale o Cypress
```bash
npm install cypress --save-dev
```
#### 03 Observação
Está configurado no package.json, um bloco de script para executar o cypress
```bash
"scripts": {
    "cypress:open": "cypress open"
  }
```
A sintaxe "cypress:open" determina como será executado o cypress, recebendo a instrução padrão "cypress open"

#### 04 Executando o cypress
```bash
   npm run cypress:open
```
Pronto agora é só criar seus cenários de testes e aproveitar o melhor da ferramenta.

Obrigado por consumirem nossos conteúdos.

Qa.Coders Academy Formando Profissionais de Qualidade.

