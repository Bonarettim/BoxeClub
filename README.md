# 🥊 Frontend: Boxing Hub

Interface desenvolvida para simular uma plataforma moderna de academia de boxe, utilizando Next.js, Material UI e boas práticas de componentização.

## 🚀 Tecnologias

* **Framework:** Next.js 14
* **Linguagem:** TypeScript
* **Biblioteca UI:** Material UI (MUI)
* **Gerenciamento de Formulários:** Formik
* **Validação:** Yup
* **Consumo de API:** Axios
* **Testes:** Jest + Testing Library
* **Documentação de Componentes:** Storybook
* **Estilização:** Emotion / SX Pattern (MUI)

---

## 🛠️ Critérios de Avaliação

* **Componentização:** Estrutura modular utilizando Header, Footer, Cards e páginas reutilizáveis.
* **Consumo de API:** Integração estruturada utilizando camada de services.
* **Responsividade:** Interface adaptada para desktop e mobile utilizando Grid e breakpoints do MUI.
* **TypeScript:** Tipagem forte para componentes, props e consumo de dados.
* **UX/UI:** Layout moderno, feedback visual de loading e validações de formulário.
* **Testes:** Cobertura de renderização, validação e comportamento do formulário.
* **Storybook:** Documentação visual e isolamento de componentes/páginas.

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Entre na pasta:

```bash
cd boxing-hub
```

3. Instale as dependências:

```bash
npm install
```

4. Rode a aplicação:

```bash
npm run dev
```

Aplicação disponível em:

```bash
http://localhost:3000
```

---

## 📚 Storybook

Rodar ambiente Storybook:

```bash
npm run storybook
```

Storybook disponível em:

```bash
http://localhost:6006
```

Gerar build do Storybook:

```bash
npm run build-storybook
```

---

## 🧪 Testes

Rodar testes:

```bash
npm run test
```

Rodar testes em watch mode:

```bash
npm run test:watch
```

---

## 📝 Relatório de Desenvolvimento

### O que foi feito:

- Criação de layout global utilizando App Router do Next.js.
- Desenvolvimento de páginas institucionais responsivas.
- Integração com API para listagem dinâmica de lutadores.
- Implementação de loading state utilizando CircularProgress.
- Criação de componentes reutilizáveis com Material UI.
- Implementação de formulário com Formik e validação Yup.
- Estruturação de testes unitários com Jest.
- Configuração de Storybook para documentação de páginas e componentes.
- Organização de services e tipagens separadas.

---

## 📂 Estrutura do Projeto

```bash
src/
 ├── app/
 ├── components/
 ├── services/
 ├── stories/
 ├── tests/
 ├── types/
 └── utils/
```

---

## 📌 Funcionalidades

### Home
- Hero section moderna
- Grid responsivo de academia
- Footer reutilizável

### Fighters
- Consumo de API
- Renderização dinâmica
- Loading state
- Cards reutilizáveis

### Contact
- Formulário validado
- Integração Formik + Yup
- Reset de formulário
- Google Maps embed

---

## 📈 Plano de Melhorias (Roadmap)

- [ ] Integração real com backend.
- [ ] Toast notifications ao invés de alert.
- [ ] Skeleton loading para melhor UX.
- [ ] Dark mode.
- [ ] Internacionalização (i18n).
- [ ] Cache de requisições.
- [ ] Implementação de autenticação.
- [ ] Melhoria de acessibilidade (A11Y).

---

## 🧹 Dependências para Revisão

O projeto atualmente utiliza Jest como framework principal de testes.

Dependências que podem ser removidas caso Vitest não esteja sendo utilizado:

```bash
npm remove vite @vitejs/plugin-react @vitest/browser-playwright @storybook/addon-vitest
```

Também validar necessidade de:

```bash
@tailwindcss/postcss
```

pois o projeto utiliza Material UI como principal biblioteca de UI.

---

## 👨‍💻 Autor

Matheus Bonaretti Simões