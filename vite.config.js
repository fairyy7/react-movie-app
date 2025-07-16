import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-movie-app/', // 👈 This must match your repo name if hosted on GitHub Pages
  plugins: [react()]

})
