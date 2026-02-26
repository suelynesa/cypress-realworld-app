# 🔎 Quality Analysis Login Feature

## 📌 Cenário Avaliado
Validação do comportamento do sistema após múltiplas tentativas consecutivas de login com senha inválida.

---

## 🔍 Observação
Durante os testes, foram realizadas 5 tentativas consecutivas de login com senha incorreta utilizando usuário válido.

O sistema:
- Permite tentativas ilimitadas.
- Exibe apenas a mensagem padrão: "username e/ou senha inválidos".
- Não apresenta bloqueio temporário.
- Não disponibiliza opção de recuperação de senha na tela de erro.

---

## ⚠️ Riscos Identificados
- Possível vulnerabilidade a ataques de força bruta.
- Experiência do usuário prejudicada em caso de esquecimento real da senha.
- Aumento de tentativas repetidas sem direcionamento para solução.

---

## 💡 Sugestões de Melhoria

1. Implementar bloqueio temporário após X tentativas consecutivas inválidas.
2. Exibir opção visível de "Esqueci minha senha" após múltiplas falhas.
3. Avaliar inclusão de mecanismos adicionais de proteção (ex: CAPTCHA).

---

## 🎯 Benefícios Esperados
- Maior proteção contra tentativas automatizadas.
- Melhoria da experiência do usuário.
- Redução de acessos indevidos.