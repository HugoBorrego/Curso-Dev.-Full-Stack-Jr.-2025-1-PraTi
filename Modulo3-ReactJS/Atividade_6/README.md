# 🛍️ Mini Loja — Estilização em React

Este projeto foi desenvolvido como parte da **Atividade 6 - +praTi**, com o objetivo de explorar diferentes técnicas de estilização em aplicações React. A proposta consiste em implementar a mesma interface de uma loja virtual em **quatro versões distintas**, cada uma utilizando uma abordagem diferente de CSS.

---

## 📁 Estrutura do Projeto

O repositório está organizado em quatro pastas principais, cada uma representando uma técnica de estilização:

- `01-css-global/` — Estilização com CSS Global  
- `02-css-modules/` — Componentes com CSS Modules  
- `03-tailwind/` — Utilização do Tailwind CSS  
- `04-styled-components/` — CSS-in-JS com styled-components  

Cada pasta contém os seguintes componentes reutilizáveis:
- `Navbar`
- `ProductCard`
- `Button`
- `Skeleton`

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ React.js  
- ⚡ Vite  
- 🎨 CSS tradicional  
- 💨 Tailwind CSS  
- 🎨 styled-components

---

## 🚀 Funcionalidades

- Página de produtos com layout responsivo  
- Tema claro/escuro com persistência  
- Navbar fixa com logo, toggle de tema e badge do carrinho  
- Grid de produtos com responsividade:
  - ≤480px: 1 coluna  
  - 481–768px: 2 colunas  
  - 769–1024px: 3 colunas  
  - ≥1025px: 4 colunas  
- Cards de produto com:
  - Imagem 1:1 com placeholder  
  - Título com limite de 2 linhas e ellipsis  
  - Preço, rating (★), tag (“Novo”/“Promo”)  
  - Botão “Adicionar” com variantes: solid, outline e ghost  
- Simulação de carregamento com skeleton  
- Dark mode aplicado a cores, sombras e bordas  
- Navegação por teclado e acessibilidade com `aria-*`  
- Transições suaves com `transform` e `opacity` (150–250ms)  
- Imagens com lazy loading

---

## ✅ Critérios de Aceite

- Breakpoints exatamente como descritos  
- Dark mode com persistência  
- Focus ring visível  
- Skeleton sem layout shift  
- Variantes do botão consistentes nos dois temas  
- Organização clara de pastas e uso de tokens (cores, espaçamentos, raio, sombras)

---

## 📦 Instalação e Execução

Para rodar qualquer uma das versões, siga os passos abaixo:

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git

cd nome-do-repositorio/01-css-global
# ou
cd nome-do-repositorio/02-css-modules
# ou
cd nome-do-repositorio/03-tailwind
# ou
cd nome-do-repositorio/04-styled-components

npm install

npm run dev
```
