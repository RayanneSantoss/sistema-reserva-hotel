# 🏨 Sistema de Reserva de Quartos de Hotéis

Sistema web desenvolvido para gerenciamento de quartos, hóspedes e reservas de um hotel.

O projeto foi desenvolvido com o objetivo de praticar e demonstrar conhecimentos em **JavaScript, Node.js, Express, APIs REST, MySQL, Bootstrap e integração entre frontend e backend**.

## 🚀 Tecnologias

### Backend

* Node.js
* Express
* MySQL
* MySQL2
* CORS
* Dotenv

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5

## 📋 Funcionalidades

### 🛏️ Quartos

* Listagem de quartos
* Cadastro de quartos
* Edição de quartos
* Exclusão de quartos
* Controle de status do quarto

### 👤 Hóspedes

* Listagem de hóspedes
* Cadastro de hóspedes
* Edição de hóspedes
* Exclusão de hóspedes
* Validação dos dados cadastrados

### 📅 Reservas

* Cadastro de reservas
* Listagem de reservas
* Edição de reservas
* Exclusão de reservas
* Seleção de hóspede e quarto
* Definição de check-in e check-out
* Validação das datas
* Verificação de conflitos de reservas

## 🧠 Regra de negócio

O sistema possui uma validação para impedir que um mesmo quarto seja reservado por hóspedes diferentes durante períodos que se sobrepõem.

Antes de cadastrar uma reserva, a API verifica se já existe outra reserva ativa para o quarto naquele período.

Caso exista, o sistema retorna uma resposta informando que o quarto já está reservado.

## 🏗️ Estrutura do projeto

```text
sistema-reserva-hotel/
│
├── backend/
│   ├── controllers/
│   │   ├── hospedesController.js
│   │   ├── quartosController.js
│   │   └── reservasController.js
│   │
│   ├── routes/
│   │   ├── hospedes.js
│   │   ├── quartos.js
│   │   └── reservas.js
│   │
│   ├── validations/
│   │   ├── hospedesValidacao.js
│   │   ├── quartosValidacao.js
│   │   └── reservasValidacao.js
│   │
│   ├── database.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── dashboard.js
│   │   ├── hospedes.js
│   │   ├── quartos.js
│   │   └── reservas.js
│   │
│   ├── index.html
│   ├── hospedes.html
│   ├── quartos.html
│   └── reservas.html
│
├── .gitignore
└── README.md
```

## 🔄 Funcionamento

A aplicação segue o seguinte fluxo:

```text
Frontend
   ↓
JavaScript / Fetch
   ↓
API REST
   ↓
Express
   ↓
Controllers
   ↓
MySQL
```

O frontend envia requisições HTTP para a API. As rotas direcionam cada requisição para seu respectivo controller, que realiza as validações e operações no banco de dados.

## 🔌 Principais endpoints

### Quartos

| Método | Endpoint       | Descrição          |
| ------ | -------------- | ------------------ |
| GET    | `/quartos`     | Lista os quartos   |
| POST   | `/quartos`     | Cadastra um quarto |
| PUT    | `/quartos/:id` | Atualiza um quarto |
| DELETE | `/quartos/:id` | Remove um quarto   |

### Hóspedes

| Método | Endpoint        | Descrição           |
| ------ | --------------- | ------------------- |
| GET    | `/hospedes`     | Lista os hóspedes   |
| POST   | `/hospedes`     | Cadastra um hóspede |
| PUT    | `/hospedes/:id` | Atualiza um hóspede |
| DELETE | `/hospedes/:id` | Remove um hóspede   |

### Reservas

| Método | Endpoint        | Descrição            |
| ------ | --------------- | -------------------- |
| GET    | `/reservas`     | Lista as reservas    |
| POST   | `/reservas`     | Cadastra uma reserva |
| PUT    | `/reservas/:id` | Atualiza uma reserva |
| DELETE | `/reservas/:id` | Remove uma reserva   |

## 🗄️ Banco de dados

O sistema utiliza o **MySQL** com três tabelas principais:

* `hospedes`
* `quartos`
* `reservas`

A tabela `reservas` possui relacionamentos com `hospedes` e `quartos` por meio de chaves estrangeiras.

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/sistema-reserva-hotel.git
```

Entre na pasta:

```bash
cd sistema-reserva-hotel
```

### 2. Instale as dependências

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

### 3. Configure o banco de dados

Crie um banco MySQL chamado:

```sql
CREATE DATABASE hotel;
```

Depois, crie as tabelas `hospedes`, `quartos` e `reservas`.

### 4. Configure o arquivo `.env`

Crie um arquivo `.env` dentro da pasta `backend`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_DATABASE=hotel
```

> O arquivo `.env` não é disponibilizado no repositório por conter configurações privadas.

### 5. Inicie o servidor

Dentro da pasta `backend`:

```bash
node server.js
```

O servidor será iniciado em:

```text
http://localhost:3000
```

### 6. Execute o frontend

Abra os arquivos HTML da pasta `frontend` no navegador ou utilize uma extensão como **Live Server** no VS Code.

## 🔐 Segurança

O projeto utiliza algumas práticas para tornar a aplicação mais segura, como:

* Variáveis de ambiente para configurações do banco;
* Queries parametrizadas com `?`;
* Validação dos dados recebidos pela API;
* Separação entre rotas, controllers e validações;
* Uso de chaves estrangeiras no banco de dados.

## 📚 Objetivo do projeto

Este projeto foi desenvolvido como forma de colocar em prática conceitos de desenvolvimento **Full Stack**, principalmente:

* Lógica de programação;
* Desenvolvimento de APIs REST;
* CRUD;
* Banco de dados relacional;
* SQL e JOINs;
* Validação de dados;
* Regras de negócio;
* Integração entre frontend e backend;
* Organização de projetos Node.js;
* Versionamento com Git.

## 👩‍💻 Desenvolvedora

**Rayanne Santos**

Técnica em Desenvolvimento de Sistemas

Projeto desenvolvido para estudo e demonstração de conhecimentos em desenvolvimento de software.
