# Hero's Journey
Hero's Journey é uma aplicação web moderna e responsiva focada na exploração de destinos turísticos. O projeto foi construído para demonstrar o domínio de interfaces fluidas, utilizando componentes personalizados e uma arquitetura limpa com React e TypeScript.

## Principais Desafios Superados
Durante o desenvolvimento, o foco principal foi a criação de componentes de UI que não apenas parecessem bons, mas que tivessem uma lógica de funcionamento robusta:

🎠 Carrossel de Destinos Dinâmico
Desenvolvimento de um Custom Hook (useCarousel) para gerenciar o estado e a lógica de navegação.

Cálculo de Viewport: Ajuste automático de itens visíveis (1, 2 ou 3) com base em breakpoints específicos.

Sincronia Matemática: Cálculos precisos de translateX e larguras dinâmicas para evitar quebras de layout em resoluções intermediárias (como o intervalo entre 640px e 800px).

🖼️ Galeria Adaptativa (Flex-Grid)
Uma galeria que alterna inteligentemente entre um layout horizontal (row) e vertical (column) sem perder a proporção das imagens e respeitando larguras de containers personalizadas.

🛠️ Tecnologias
React 18 com TypeScript (Tipagem forte para Props e Hooks).

Vite (Ambiente de build rápido).

Tailwind CSS (Design Mobile-First e estilização JIT).

Lucide React (Ícones vetoriais).

GitHub Actions (CI/CD para deploy automatizado no GitHub Pages).

## 📦 Como rodar o projeto

### Clone o repositório:
```
Bash
[git clone](https://github.com/gvcarmo/heros-journey.git)
```

### Instale as dependências:

```
Bash
npm install
Inicie o servidor de desenvolvimento:
```

```
Bash
npm run dev
```

## 📝 Aprendizados
Este projeto foi fundamental para aprofundar conhecimentos em:

Manipulação do DOM e eventos de resize de forma eficiente com useEffect.

Cálculos dinâmicos com CSS calc() integrados ao estado do React.

Deploy de SPAs (Single Page Applications) em subdiretórios do GitHub Pages, lidando com roteamento e caminhos de assets.
