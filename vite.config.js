import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/gha-automation-lab/',  // <--- para que cargue scripts y assetes
  plugins: [react()],
})
