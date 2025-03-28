import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@coach-on-tap/cot-ui',
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
  plugins: [react()]
})