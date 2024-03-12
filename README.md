# Documentação do Projeto

## Requisitos do Projeto
1. Ter a funcionalidade de cadastrar o e-mail e o nome de uma pessoa que deseja receber a Newsletter.
2. Ter um endpoint que mande o texto do e-mail no body da requisição e esse texto deverá ser enviado via e-mail para todos os e-mails cadastrados.
3. No corpo do e-mail enviado deverá ter o nome do cadastro da pessoa que está recebendo a Newsletter.
4. Utilizar Template Engine para criar um template para o e-mail.

## Configuração do Ambiente
1. Clone o repositório do projeto: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`
2. Instale as dependências do projeto: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env` na raiz do projeto. Exemplo:

- EMAIL_HOST=seu-email-host
- EMAIL_PORT=porta-do-email
- EMAIL_USER=seu-email-usuario
- EMAIL_PASS=sua-senha-de-email
- EMAIL_FROM=seu-email-de-envio

---

## Como Executar o Projeto
1. Inicie o servidor: `npm start`
2. Acesse os endpoints da API utilizando o cliente de API de sua preferência (Postman, Insomnia, etc.).

## Endpoints da API
1. **POST /register**
- Cadastra um e-mail para receber a Newsletter.
- Corpo da requisição:
  ```json
  {
    "email": "exemplo@email.com"
  }
  ```
2. **POST /send-mail**
- Envia um e-mail para todos os e-mails cadastrados na Newsletter.
- Corpo da requisição:
  ```json
  {
    "subject": "Assunto do E-mail",
    "body": "Corpo do E-mail"
  }
  ```

## Tecnologias Utilizadas
- Node.js
- Express.js
- Nodemailer
- Handlebars

