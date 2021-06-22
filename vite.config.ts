import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 3000,
    open: true,
    proxy: {
      '/web/api': {
        target: 'http://localhost:8000',
        // ws: true,
        changeOrigin: true, //允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }

})
