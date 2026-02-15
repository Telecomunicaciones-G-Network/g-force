# GNetwork · GForce

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Bun-1.3-000000?style=for-the-badge&logo=bun&logoColor=white" alt="Bun">
  <img src="https://img.shields.io/badge/License-GNETWORK-yellow?style=for-the-badge" alt="License">
</div>

<br />

## Table of contents

- [Overview](#-overview)
- [Introduction](#-introduction)
- [Prerequisites](#-prerequisites)
- [Initialization](#-initialization)
- [Running the project](#-running-the-project)
- [Building](#-building)
- [Scripts](#-scripts)
- [Docker](#-docker)
- [Project structure](#-project-structure)
- [Technologies](#-technologies)

## 📝 Overview

**GForce** is a Next.js application by **GNetwork (Telecomunicaciones GNetwork)**. It provides a modern, scalable web app with server-side rendering, static generation, and client-side navigation. The stack includes TypeScript, Tailwind CSS v4, React 19, Server Components, and a Bun-based dev environment with Biome for formatting and linting.

## 😃 Introduction

This project is a **Next.js 16** application that implements a production-ready web application. It uses the App Router, TypeScript, and a modular architecture focused on maintainability and scalability. It includes:

- **Custom theming** with Next.js and dark mode (next-themes)
- **Tailwind CSS v4** for styling
- **React 19** with Server Components
- **React Compiler** for automatic optimizations
- **Bun** as runtime and package manager
- **Biome** for formatting and linting
- **Husky** and **Commitlint** for Git hooks and conventional commits

## 📋 Prerequisites

- **Node.js** ≥ 24.13.0 (see [.nvmrc](.nvmrc))
- **Bun** ≥ 1.3.0

## ⚙️ Initialization

Using the Makefile (recommended):

```bash
make init
```

This runs:

- `bun install`
- `bun husky`
- `bunx changeset init`

Or run manually:

```bash
bun install
bun husky
bunx changeset init
```

## 🖥️ Running the project

**Development:**

```bash
bun dev
```

**Production (after building):**

```bash
bun start
```

## 🚀 Building

Production build:

```bash
bun run build
```

Or via Makefile:

```bash
make build
```

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start development server |
| `bun build` | Production build |
| `bun start` | Start production server |
| `bun lint` | Lint and fix with Biome |
| `bun format` | Format code with Biome |
| `bun check` | Run typecheck, lint, and security scan |
| `bun typecheck` | TypeScript check only |
| `bun husky` | Install Husky Git hooks |

## 🐳 Docker

Build images with the provided Dockerfiles:

```bash
# Default image
make buildDocker TAG=v0.0.34

# Development
make buildDockerDevelopment TAG=dev-v0.0.34

# Production
make buildDockerProduction TAG=v0.0.34

# Staging
make buildDockerStaging TAG=stg-v0.0.34
```

Dockerfiles are in the `docker/` directory.

## 🗂️ Project structure

```
gforce/
├── .github/workflows/     # CI/CD pipelines (build, deploy, check)
├── docker/                # Dockerfiles (default, development, production, staging)
├── docs/                  # Project documentation
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router (layouts, pages, routes)
│   ├── packages/          # Internal packages (e.g. gnetwork-ui)
│   └── ui/                # UI modules
│       ├── core/          # Shared UI: components, styles, themes, providers
│       ├── contract/      # Contract-related UI
│       ├── ticket/        # Ticket-related UI
│       ├── payment/       # Payment-related UI
│       ├── chat/          # Chat-related UI
│       └── ...
├── next.config.ts
├── package.json
├── Makefile
├── biome.json
├── tsconfig.json
└── README.md
```

## 🧰 Technologies

- **Next.js 16** — React framework with App Router
- **React 19** — UI library
- **TypeScript 5.9** — Static typing
- **Bun 1.3** — Runtime and package manager
- **Biome 2.3** — Formatter and linter
- **Tailwind CSS 4** — Utility-first CSS
- **PostCSS** — CSS processing
- **next-themes** — Dark/light theme support
- **Husky** — Git hooks
- **Commitlint** — Conventional commit enforcement
- **Server Components** — Next.js server rendering
- **React Compiler** — React optimizations
- **Geist** — Font family
- **Radix UI** — Accessible primitives
- **TanStack Query & Table** — Data fetching and tables
- **React Hook Form + Zod** — Forms and validation
- **Zustand** — State management

---

**Built with ❤️ by the GNetwork Team**
