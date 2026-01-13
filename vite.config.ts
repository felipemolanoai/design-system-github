import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['src'] }) // Genera los tipos automáticamente
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // El archivo de entrada que creamos antes
      name: 'DesignSystemGithub',
      fileName: 'design-system-github',
    },
    rollupOptions: {
      // Nos aseguramos de NO meter React dentro del paquete
      // (el proyecto que lo use ya tendrá React instalado)
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})