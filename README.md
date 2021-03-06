# Controle-Financeiro
Esta aplicação web fez parte do Desafio Final do curso no Bootcamp Online - Desenvolvedor Full Stack.

## Install

 > na pasta raiz: npm install

> na pasta client: yarn

## .env file

DB_CONNECTION="url do MongoDB Atlas ou no localhost"

APP_PORT=3001 (exemplo para a porta onde o app vai conectar com o backend)

## Data Base
- Criar banco de dados no MongoDB Atlas com o nome "transactions".
- Para popular o banco para testes, pode importar os dados do arquivo:
> \mongodb-import\backup\transactionsArray.json

## Run

> na pasta raiz: node index.js

> na pasta client: yarn start

## Features
- Construção de API HTTP, utilizando as principais operações: GET, POST, PUT, e DELETE. 
- Desenvolvimento das operações CRUD em backend Javascript moderno com pacotes do Node JS. 
- Persistência de Dados em banco de dados MongoDB Atlas. 
- FrontEnd com React usando "components".
- Single-page aplication.
- Seletor para selecionar o mês com informações.
- Botão para abrir janela e adicionar novo lançamento.
- Campo para escrever nome e fazer pesquisa nos dados em tela.
- Filtro de categoria dos dados na tela.
- Ícone para abrir janela e editar lançamento.
- Ícone para excluir lançamento.
- Possibilidade de publicação no Heroku.

## Screen

![Tela do Aplicativo](https://github.com/francojmf/Controle-Financeiro/blob/52b12d56dbfa853ca6b51ef24f23290768288676/tela_desafio.jpg)

