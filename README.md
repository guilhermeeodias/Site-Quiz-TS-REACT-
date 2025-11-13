Quiz (React + TS)

Esse é um Quiz App interativo construído com React, TypeScript e TailwindCSS. 

**[🎮 Jogue a versão ao vivo aqui!](https://quizreactts.netlify.app/)**



Funcionalidades

* **Perguntas Aleatórias:** Cada jogo é único! As perguntas são sorteadas aleatoriamente do banco de dados.
* **Rodadas de 5 Perguntas:** O jogo funciona em rodadas rápidas de 5 perguntas.
* **Feedback Instantâneo:** Respostas corretas ficam verdes e incorretas ficam vermelhas.
* **Contagem de Placar:** O placar (`score`) e o progresso da rodada (`questionAc`) são gerenciados como estados separados.
* **UI Reativa:** Feito com React Hooks para uma experiência de usuário fluida e sem recarregamento de página.

---

### 🛠️ Tecnologias Utilizadas

* **React:** Para a construção da interface de usuário (UI).
* **TypeScript:** Para adicionar tipagem estática e segurança ao código.
* **TailwindCSS:** Para estilização rápida e moderna.
* **Vite:** Como ferramenta de build e servidor de desenvolvimento.

---

### 🧠 Conceitos Praticados

Este projeto foi fundamental para solidificar meus conhecimentos em:

* **Estado (useState):** Gerenciamento complexo de múltiplos estados (`gameStage`, `score`, `questionAc`, `answersDisabled`, etc.).
* **Renderização Condicional:** Para alternar entre as telas de Início, Quiz e Resultados (`{gameStage === 'quiz' && ...}`).
* **Renderização de Listas (`.map()`):** Criação dinâmica dos botões de resposta a partir de um array.
* **Estilo Dinâmico:** Alteração de classes do Tailwind com base no estado para o feedback visual (verde/vermelho).
* **Lógica de Estado Assíncrona:** O desafio de usar `setQuestionAc(prev => ...)` e checar o valor futuro (`questionAc + 1`) dentro de um `setTimeout`.
* **TypeScript (Interfaces):** Criação de "contratos" (`interface Question`, `interface Answer`) para garantir a integridade dos dados.

---

### 💻 Como Rodar Localmente

```bash
# 1. Clone o repositório
git clone [https://github.com/SEU-NOME/SEU-REPOSITORIO.git](https://github.com/SEU-NOME/SEU-REPOSITORIO.git)

# 2. Entre na pasta do projeto
cd SEU-REPOSITORIO

# 3. Instale as dependências
npm install

# 4. Rode o projeto
npm run dev