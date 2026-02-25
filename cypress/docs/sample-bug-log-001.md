# 🐞 Bug Report

## 🆔 Bug ID
LOG-001

---

## 🏷 Título
O botão Remember-me não deixa os dados salvos para o próximo login

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
Baixa

---

## ⏳ Prioridade
Baixa

---

## 📌 Pré-condição
Acessar página de Login do sistema e usuário previamente cadastrado no sistema.

---

## 🔁 Passos para Reproduzir
1. Preencher Username cadastrado
2. Preencher Password válida
3. Clicar no botão "Remeber-me"
4. Clicar no botão "Sign in"
5. Realizar logout
6. Verificar campo Username

---

## ✅ Resultado Esperado
O sistema deve impedir o acesso e exibir mensagem informando que as credenciais são inválidas.

---

## ❌ Resultado Obtido
O sistema permite acesso mesmo com senha incorreta.

---

## 🎥 Evidência
Print da tela e vídeo da execução do teste automatizado utilizando Cypress.