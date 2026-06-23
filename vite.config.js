import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isGitHubActions = Boolean(globalThis.process?.env?.GITHUB_ACTIONS)

// https://vite.dev/config/
export default defineConfig({
  base: isGitHubActions ? '/Khrrousheh/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
