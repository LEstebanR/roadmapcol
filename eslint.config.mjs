import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

const eslintConfig = [
  {
    ignores: [
      'coverage/**',
      'node_modules/**',
      'dist/**',
      '.vscode/**',
      '.next/**',
      'lib/generated/prisma/**',
      'prisma/generated/**',
    ],
  },
  ...coreWebVitals,
  ...typescript,
]

export default eslintConfig
