# 🧪 Testes Automatizados - Cypress Real World App

Este repositório contém testes automatizados E2E desenvolvidos por mim utilizando Cypress, aplicando boas práticas como Page Object Model e Fixtures.

---

## 🎯 Objetivo

Praticar automação de testes end-to-end em uma aplicação real, simulando um ambiente profissional.

---

## 🛠 Tecnologias Utilizadas

- Cypress
- JavaScript
- Page Object Model (POM)
- Fixtures
- Git & GitHub

---

## 📂 Estrutura do Projeto

```
cypress/
 ├── fixtures/
 │    └── credentials.json
 ├── pages/
 │    ├── loginPage.js
 │    └── dashboardPage.js
 └── tests/
      └── aaa
           └── login.spec.ts
```
---

## ✅ Cenários Automatizados

### 🔐 Login

- Login com credenciais inválidas
- Validação de mensagem de erro
- Login com credenciais válidas
- Validação de redirecionamento para Dashboard

---

### 🔐 Cadastro de usuário

- Registro de novo usuário com sucesso
- Validação de mensagem de confirmação
- Registro de novo usuário com informações incompletas
- Validação de mensagem de erro

---

### 🔐 Transferência bancária

- Enviar dinheiro com saldo suficiente
- Validação de mensagem de confirmação
- Enviar dinheiro com saldo insuficiente
- Validação de mensagem de erro

---

### 🔐 Histórico de Transações

- Visualizar histórico de transações com sucesso
- Validação de exibição
- Visualizar o histórico de transações de um usuário sem transações anteriores
- Validação de mensagem indicando que o usuário não possui transações anteriores

---

## 📌 Boas Práticas Aplicadas

- Separação de responsabilidades (Page Object)
- Reutilização de código
- Organização por domínio
- Estrutura escalável
- Uso de dados externos (fixtures)

---

## 🚀 Como executar os testes

```bash
npm install
npx cypress open
```

---

## 📎 Observação

O projeto base foi forkado do Cypress Real World App.
Os testes automatizados foram desenvolvidos por mim como prática de automação E2E.

---

## 📄 Documentation

- [Bug Report Template](docs/bug-report-template.md)
- [Sample Bug Report](docs/sample-bug-log-001.md)

## 📋 Test Cases

Os casos de teste estão documentados na pasta `/docs`.