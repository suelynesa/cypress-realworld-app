# 🐞 Bug Report

## 🆔 Bug ID
SIGN-011

---

## 🏷 Título
Permite registro com campos obrigatórios compostos apenas por espaços, gerando falha posterior no login 

---

## 🌍 Ambiente
- Ambiente: Localhost
- URL: http://localhost:3000
- Navegador: Chrome 145
- Sistema Operacional: Windows 10 Pro

---

## 📂 Tipo
Funcional

---

## 🚨 Severidade
Alta

---

## ⏳ Prioridade
Alta

---

## 🧠 Justificativa:
Impacta diretamente o fluxo crítico de autenticação e compromete a consistência dos dados armazenados.

---

## 📌 Pré-condição
Acessar página de Login do sistema

---

## 🔁 Passos para Reproduzir
1. Clicar no Botão "Don't have an account? Sign Up"
2. Preencher first name com caracteres de espaço (" ")
3. Preencher last name com caracteres de espaço (" ")
4. Preencher username com caracteres de espaço (" ")
5. Preencher campo password com senha válida
6. Preencher campo Confirm password com mesma senha válida
7. Clicar no Botão "Sign Up"
8. Tentar realizar login com o usuário criado

---

## ✅ Resultado Esperado
- O sistema deve considerar campos compostos apenas por espaços como inválidos
- Deve exibir mensagem de erro indicando campo obrigatório
- Botão de Sign Up deve permanecer no estado desabilitado e não permitir interação
- A validação deve garantir consistência entre cadastro e autenticação

---

## ❌ Resultado Obtido
- Botão de Sign Up fica no estado habilitado e permite interação
- O cadastro é realizado com sucesso
- O usuário não consegue autenticar posteriormente

---

## 🎥 Evidência
Gravação da tela - execução do teste automatizado utilizando Cypress.

---

## 🔎 Observações
O comportamento sugere ausência de sanitização (trim()) antes da validação de obrigatoriedade e/ou antes da persistência no backend.

Há indícios de inconsistência entre as regras aplicadas no cadastro e as utilizadas na autenticação, indicando possível desalinhamento entre validação frontend e backend.