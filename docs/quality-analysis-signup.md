# Análise de Qualidade – Feature de Registro de Usuário

## 1. Política de Senha Frágil

### Observação
- Senha com mínimo de 4 caracteres.
- Não há exigência de combinação de tipos de caracteres.
- Permite padrões simples como:
  - 1111
  - aaaa
  - !!!!

### Risco
- Alta vulnerabilidade a ataques de força bruta.
- Baixo nível de segurança da conta do usuário.
- Possível comprometimento de dados em caso de exploração.

### Classificação
Não é bug, caso o requisito esteja definido dessa forma.
Trata-se de um risco de segurança relevante.

### Sugestão de Melhoria
- Definir mínimo de 8 caracteres.
- Exigir combinação de pelo menos 3 dos seguintes:
  - Letra maiúscula
  - Letra minúscula
  - Número
  - Caractere especial
- Bloquear padrões simples ou repetitivos.

---

## 2. Requisito Mal Definido – Nome, Sobrenome e Username

### Observação
Os campos permitem:
- Apenas 1 caractere.
- Apenas número.
- Apenas símbolo.
- Combinações incoerentes.

Exemplos:
- "@"
- "1"
- "_"

### Risco
- Dados inconsistentes na base.
- Dificuldade de identificação de usuário.
- Problemas futuros em relatórios e integrações.
- Poluição de dados.

### Classificação
Não é bug se não houver regra definida.
Caracteriza lacuna ou fragilidade na regra de negócio.

### Sugestão de Melhoria
- Definir mínimo de caracteres (ex: 2 ou 3).
- Restringir caracteres permitidos via regex.
- Documentar regra clara para validação.

---

## 3. Ausência de Limite Máximo de Caracteres

### Observação
Os campos não aparentam possuir limite máximo de caracteres.

### Riscos
- Possível estouro de limite no banco de dados.
- Problemas de layout na interface.
- Risco de ataques com payload excessivo.
- Impacto em performance.

### Classificação
Atualmente é um risco técnico.
Pode se tornar bug caso gere falha ou quebra no sistema.

### Sugestão de Melhoria
Definir limite máximo coerente com:
- Tamanho da coluna no banco de dados.
- Regras de negócio.
- Layout da interface.

---

## Conclusão

A análise indica fragilidades relacionadas a:
- Segurança
- Integridade de dados
- Definição de regras de negócio
- Sustentabilidade técnica

Recomenda-se revisão dos critérios de validação e alinhamento entre frontend e backend para garantir consistência e redução de riscos.