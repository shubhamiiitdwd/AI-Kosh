import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    proxy: {
      // HTTP API only — training WebSockets go directly to :8001 from the client (see api.ts getWsUrl).
      '/team1': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
      },
    },
  },
})
