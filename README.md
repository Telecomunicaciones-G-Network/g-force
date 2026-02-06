# GNetwork @ GForce

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

```typescript
'use client';

import type { Cell, Header, HeaderGroup, Row } from '@tanstack/react-table';
import type { TableManagerProps } from './table-manager.props';

import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { TableBody } from '@gnetwork-ui/components/molecules/tables/table-body';
import { TableColumn } from '@gnetwork-ui/components/molecules/tables/table-column';
import { TableHead } from '@gnetwork-ui/components/molecules/tables/table-head';
import { TableHeaderColumn } from '@gnetwork-ui/components/molecules/tables/table-header-column';
import { TableHeaderRow } from '@gnetwork-ui/components/molecules/tables/table-header-row';
import { TableRow } from '@gnetwork-ui/components/molecules/tables/table-row';
import { Pagination } from '@gnetwork-ui/components/organisms/paginations/pagination';
import { Table } from '@gnetwork-ui/components/organisms/tables/table';

import { TABLE_RECORD_LIMIT_PER_PAGE } from '@ui-core/constants/table-record-limit-per-page.constant';

export const TableManager = <T,>({
  className = '',
  builder,
  data = [],
  ref,
  limit = TABLE_RECORD_LIMIT_PER_PAGE,
  page = 1,
  pageIndex = 0,
  setPageIndex,
  title = '',
  totalRegisters = 0,
  ...rest
}: Readonly<TableManagerProps<T>>) => {
  const totalPages = Math.max(1, Math.ceil((totalRegisters || 0) / limit));
  const canPrevious = pageIndex > 0;
  const canNext = pageIndex < totalPages - 1;

  const table = useReactTable<T>({
    columns: builder,
    data: data ?? [],
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex,
        pageSize: limit,
      },
    },
    manualPagination: true,
    pageCount: -1,
    onPaginationChange: (updater) => {
      setPageIndex?.((prev) => {
        const next =
          typeof updater === 'function'
            ? updater({
                pageIndex: prev,
                pageSize: limit,
              })
            : updater;
        return next.pageIndex;
      });
    },
  });

  if (!builder)
    console.warn(
      'Prop builder is missing on TableManager component. This component can not be render appropiately.',
    );

  if (!data || !Array.isArray(data))
    console.warn(
      'Prop data is missing or is zero on TableManager component. This component can not be render appropiately.',
    );

  return (
    <>
      <Table ref={ref} className={className} title={title} {...rest}>
        <TableHead>
          {table?.getHeaderGroups()?.map((headerGroup: HeaderGroup<T>) => (
            <TableHeaderRow key={headerGroup?.id}>
              {headerGroup?.headers?.map((header: Header<T, unknown>) => (
                <TableHeaderColumn key={header?.id}>
                  {flexRender(
                    header?.column?.columnDef?.header,
                    header?.getContext(),
                  )}
                </TableHeaderColumn>
              ))}
            </TableHeaderRow>
          ))}
        </TableHead>
        <TableBody>
          {table?.getRowModel()?.rows?.map((row: Row<T>) => (
            <TableRow key={row?.id}>
              {row?.getVisibleCells()?.map((cell: Cell<T, unknown>) => (
                <TableColumn key={cell?.id}>
                  {flexRender(
                    cell?.column?.columnDef?.cell,
                    cell?.getContext(),
                  )}
                </TableColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="bg-chromatic rounded-b-lg border-x border-b border-solid border-b-neutral-200 py-2 pl-4 pr-2 border-x-neutral-200 flex gap-2 min-h-[56px] justify-between items-center">
        <Text
          as="label"
          align="left"
          className="text-neutral-500"
          level="small"
          scheme="paragraph"
        >
          {limit && page
            ? `Mostrando ${(page - 1) * limit + 1} - ${Math.min(page * limit, totalRegisters || page * limit)}`
            : ''}
          {totalRegisters ? ` de ${totalRegisters} registros` : ''}
        </Text>
        <Pagination
          canNext={canNext}
          canPrevious={canPrevious}
          onNext={() => setPageIndex?.(pageIndex + 1)}
          onPageChange={(index) => setPageIndex?.(index)}
          onPrevious={() => setPageIndex?.(pageIndex - 1)}
          pageIndex={pageIndex}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};
```
