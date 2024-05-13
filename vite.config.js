import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/token': {
        target: 'http://localhost:8000/token',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/token/, ''),
        // agent: new HttpAgent({ keepAlive: true, keepAliveMsecs: 20000})
      }
    },
  },
  // base: 'http://localhost:8000/',
})
