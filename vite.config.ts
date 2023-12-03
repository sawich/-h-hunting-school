import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@graphics': fileURLToPath(
        new URL('./src/services/graphics', import.meta.url),
      ),
      '@logic': fileURLToPath(new URL('./src/services/logic', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
