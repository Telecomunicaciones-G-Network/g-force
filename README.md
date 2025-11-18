# 👨‍💻 GNetwork @ GForce

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Bun-1.3-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/License-YENDES-yellow?style=for-the-badge" alt="License">
</div>

<br/>

## 📝 Overview

- [Introduction](#introduction)
- [Initialization](#initialization)
- [Run project](#run-project)
- [Building](#building)
- [Project Structure](#project-structure)
- [Technologies](#technologies)

## 😃 Introduction

This project is a **Next.js** application developed by **Yendes Softwares** that implements a modern, scalable, and
performant web application. Built with the latest Next.js 16 features, this project follows best practices for
server-side rendering, static site generation, and client-side navigation.

The project is configured with TypeScript and uses a modular architecture with a focus on maintainability and
scalability. It includes custom theming support with Next.js Dark Mode, Tailwind CSS v4, React 19, server components,
and a robust development environment powered by Bun and Biome.

## ⚙️ Initialization

Execute init command using makefile:

```bash
make init
```

Or you can apply init manually:

```bash
bun install
bun husky
```

## 🖥️ Run project

To run the project in development mode:

```bash
bun dev
```

For production mode:

```bash
bun start
```

## 🚀 Building

To build the project for production:

```bash
bun build
```

## 🗂️ Project Structure

```
g-force/
├── docs/                                  # Project documentation
│   ├── COMMIT_CONVENTION.md              # Commit message guidelines
│   ├── GIT_WORKFLOW.md                   # Git workflow documentation
│   ├── IMPORT_ORDER.md                   # Import ordering rules
│   ├── NAMING_POLICIES.md                # Naming conventions
│   ├── PROJECT_RULES.md                  # Project-specific rules
│   └── PROJECT_STRUCTURE.md              # Project structure guide
├── public/                               # Static public files
│   └── favicon.ico                       # Site favicon
├── src/                                  # Main source code
│   ├── app/                              # Next.js app directory
│   │   ├── layout.tsx                    # Root layout component
│   │   └── page.tsx                      # Home page component
│   ├── ui/                               # UI components and assets
│   │   └── core/                         # Core UI module
│   │       ├── components/               # Shared components
│   │       │   └── server/               # Server-side components
│   │       │       └── scripts/          # Server-side scripts
│   │       │           └── react-scan-script/  # React Scan integration
│   │       ├── constants/                # UI constants
│   │       │   └── theme.constant.ts     # Theme configuration constants
│   │       ├── fonts/                    # Custom font configurations
│   │       │   ├── geist.fonts.ts        # Geist font setup
│   │       │   └── geistMono.fonts.ts    # Geist Mono font setup
│   │       ├── providers/                # React context providers
│   │       │   ├── providers/            # Global providers wrapper
│   │       │   └── theme-provider/       # Theme provider
│   │       ├── styles/                   # Global styles and themes
│   │       │   ├── custom.theme.css      # Custom theme styles
│   │       │   ├── dark.theme.css        # Dark mode theme
│   │       │   ├── globals.css           # Global styles
│   │       │   ├── light.theme.css       # Light mode theme
│   │       │   ├── main.css              # Main stylesheet
│   │       │   └── variables.css         # CSS variables
│   │       └── themes/                   # Theme configurations
│   │           └── theme.css             # Theme definitions
│   ├── env.d.ts                          # Environment type definitions
│   └── globals.d.ts                      # Global type definitions
├── next.config.ts                        # Next.js configuration
├── postcss.config.mjs                    # PostCSS configuration
├── tsconfig.json                         # TypeScript configuration
├── biome.json                            # Biome configuration
├── package.json                          # Project dependencies and scripts
├── Makefile                              # Automation commands
├── README.md                             # Project documentation
├── LICENSE                               # Project license
├── CONTRIBUTING.md                       # Contribution guide
├── commitlint.config.ts                  # Commitlint configuration
└── CODE_OF_CONDUCT.md                    # Code of conduct
```

## 🧰 Technologies

- **Next.js 16**: React framework for production-grade applications with App Router
- **React 19**: Latest version of the JavaScript library for building user interfaces
- **TypeScript 5.9**: JavaScript superset that adds static typing
- **Bun 1.3**: Ultra-fast JavaScript runtime and package manager
- **Biome 2.3**: Fast formatter and linter for JavaScript, TypeScript, and more
- **Tailwind CSS 4**: Utility-first CSS framework for rapid UI development
- **PostCSS 8.5**: Tool for transforming CSS with JavaScript
- **Next Themes**: Perfect dark mode support with zero-flash theme switching
- **Husky**: Git hooks to automate tasks and maintain code quality
- **Commitlint**: Enforce conventional commit messages
- **Server Components**: Next.js server-side rendering features
- **React Compiler**: Automatic optimization of React components
- **Geist Font**: Modern, optimized font family by Vercel for better readability
- **Custom Theming**: Built-in theme support with light/dark modes using CSS variables

---

**Built with ❤️ by the GNetwork Team**

                     D                      D
Repository => GetContactsResponse => GetContactsModel -> Caso de uso =>
