import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'] },
  { plugins: ['react', 'react-hooks'] },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier
]
