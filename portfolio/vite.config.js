import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANT: Change 'portfolio' to your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
