# Testing & CI/CD Setup

Este documento describe la configuración completa de testing y CI/CD para el proyecto RoadMapCol.

## 🧪 Testing Setup

### Tecnologías utilizadas

- **Vitest**: Framework de testing moderno y rápido
- **React Testing Library**: Para testing de componentes React
- **jsdom**: Entorno DOM simulado
- **@testing-library/jest-dom**: Matchers adicionales para testing
- **Bun**: Runtime para ejecutar las pruebas

### Configuración

La configuración de Vitest se encuentra en `vitest.config.ts`:

```typescript
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Comandos disponibles

```bash
# Instalar dependencias
bun install

# Ejecutar todas las pruebas
bun run test

# Ejecutar pruebas con interfaz visual
bun run test:ui

# Ejecutar pruebas con cobertura
bun run test:coverage

# Verificar tipos de TypeScript
bun run type-check

# Ejecutar linting
bun run lint
```

### Estructura de pruebas

```
src/
├── components/
│   └── __tests__/
│       ├── button.test.tsx
│       └── tour-card.test.tsx
├── lib/
│   └── __tests__/
│       ├── utils.test.ts
│       └── data.test.ts
├── app/
│   └── __tests__/
│       └── tours.test.tsx
└── test/
    ├── setup.ts
    └── README.md
```

## 🚀 GitHub Actions CI/CD

### Workflows configurados

El proyecto incluye tres workflows separados para garantizar la calidad del código:

#### 1. Lint (`.github/workflows/lint.yml`)

```yaml
name: Lint

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
      - name: Install dependencies
        run: bun install
      - name: Run ESLint
        run: bun run lint
```

#### 2. TypeScript Check (`.github/workflows/typecheck.yml`)

```yaml
name: TypeScript Check

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  typecheck:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
      - name: Install dependencies
        run: bun install
      - name: Run TypeScript check
        run: bun run type-check
```

#### 3. Tests (`.github/workflows/test.yml`)

```yaml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
      - name: Install dependencies
        run: bun install
      - name: Run tests
        run: bun run test
      - name: Run test coverage
        run: bun run test:coverage
```

### Configuración de TypeScript

El archivo `tsconfig.json` está configurado para excluir los archivos de test del type-check:

```json
{
  "exclude": [
    "node_modules",
    "**/__tests__/**/*",
    "**/*.test.*",
    "**/test/**/*",
    "vitest.config.ts"
  ]
}
```

## 📦 Dependencias agregadas

### DevDependencies

```json
{
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/react": "^16.1.0",
  "@testing-library/user-event": "^14.5.2",
  "@vitejs/plugin-react": "^4.3.4",
  "@vitest/coverage-v8": "^2.1.8",
  "@vitest/ui": "^2.1.8",
  "jsdom": "^25.0.1",
  "vitest": "^2.1.8"
}
```

### Scripts agregados

```json
{
  "type-check": "tsc --noEmit",
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage"
}
```

## 🔧 Configuración de mocks

El archivo `src/test/setup.ts` incluye mocks para componentes de Next.js:

- `next/navigation` (useRouter, useParams, etc.)
- `next/image`
- `next/link`

## ✅ Pruebas implementadas

### 1. Componentes UI

- **Button**: Verifica renderizado y variantes
- **TourCard**: Verifica información del tour

### 2. Utilidades

- **utils.ts**: Verifica función `cn` para clases CSS

### 3. Datos

- **data.ts**: Verifica estructura de datos y tipos

### 4. Páginas

- **tours**: Verifica renderizado de la página de tours

## 🎯 Beneficios del setup

1. **Calidad de código**: Lint automático en cada PR
2. **Tipos seguros**: Verificación de TypeScript
3. **Pruebas automáticas**: Tests ejecutados en cada cambio
4. **Feedback rápido**: Errores detectados antes del merge
5. **Cobertura de código**: Reportes de cobertura de tests
6. **Interfaz visual**: UI de Vitest para debugging

## 🚦 Flujo de trabajo

1. Desarrollador crea un PR
2. GitHub Actions ejecuta automáticamente:
   - Lint check
   - TypeScript check
   - Tests unitarios
3. Si algún check falla, el PR no puede ser mergeado
4. Una vez que todos los checks pasan, el PR puede ser aprobado y mergeado

Este setup garantiza que el código que llega a las ramas principales (`main` y `develop`) cumple con los estándares de calidad establecidos.
