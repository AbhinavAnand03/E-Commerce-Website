import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const devPort = Number(env.VITE_DEV_SERVER_PORT) || 5173
  const apiPort = Number(env.VITE_API_PORT) || 5000

  return {
    plugins: [react()],
    server: {
      port: devPort,
      strictPort: true,
      proxy: {
        '/api': {
          target: `http://127.0.0.1:${apiPort}`,
          changeOrigin: true,
        },
      },
    },
  }
})
