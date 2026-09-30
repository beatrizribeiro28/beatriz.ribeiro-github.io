import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        cadastro: resolve(__dirname, 'cadastro.html'),
        inscricaoconfirmada: resolve(__dirname, 'inscriçãoconfirmada.html'),
        projetos: resolve(__dirname, 'projetos.html')
      }
    }
  }
});
