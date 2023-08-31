import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // https://vitejs.dev/config/server-options.html#server-port
    // Specify server port.
    port: 3000,
    // https://vitejs.dev/config/server-options.html#server-open
    // Automatically open the app in the browser on server start. 
    open: true
  }
})
