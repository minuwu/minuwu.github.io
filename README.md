# Portfolio: Mohammad Minhazul Abedin

A high-performance, real-time personal portfolio built with modern engineering principles and Swiss design aesthetics. Scaled to showcase robust technical expertise and professional achievements.

## 🚀 Key Features

- **Smart Dynamic Navbar**: Intelligent scroll-behavior that stays stationary when needed and hides during deep focus.
- **Immersive Sidebar Navigation**: Fully responsive mobile menu architecture with body-scroll locking and viewport-aware positioning.
- **Newsprint Aesthetics**: Custom-engineered design system featuring a unique "Newsprint" texture and sharp-cornered brutalist UI.
- **Automated Deployment**: Seamless CI/CD pipeline powering instant updates via GitHub Actions.
- **Project Catalog**: Interactive showcases of high-performance systems and real-time architectures.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks (useState, useEffect)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 📂 Architecture

```bash
├── .github/workflows/    # Deployment and QA Evaluation pipelines
├── src/
│   ├── components/
│   │   ├── layout/       # Shared structural wrappers (Section.tsx)
│   │   ├── sections/     # Modular Hero, About, Experience, etc.
│   │   └── ui/           # Primitive UI components
│   ├── assets/           # Local static assets
│   ├── utils/            # Helper functions
│   ├── App.tsx           # Global state & Layout orchestrator
│   └── main.tsx          # Client entry point
└── public/               # Public static assets & metadata
```

## 🏗️ Getting Started

### 1. Prerequisites
Ensure you have **Node.js 20+** installed.

### 2. Installation
```bash
git clone https://github.com/minuwu/minuwu.github.io.git
cd minuwu.github.io
npm install
```

### 3. Development
```bash
npm run dev
```

### 4. Build
```bash
npm run build
```

## 🚀 Deployment

This project uses **GitHub Actions** for automated deployment.
- Pushing to the `main` branch triggers the `.github/workflows/deploy.yml` workflow.
- The build artifacts are automatically uploaded to the `gh-pages` internal branch and served at `https://minuwu.github.io/`.

## 🧪 Quality Assurance

We maintain a lean CI pipeline via `evaluate.yml`:
- **Unit Testing**: Powered by [Vitest](https://vitest.dev/).
- **Linting**: Consistent code style enforced by [ESLint](https://eslint.org/).

---

Developed with ☕ and precision by **Mohammad Minhazul Abedin**.
