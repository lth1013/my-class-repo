import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    // Important for MERN Setup: Here we're establishing a relationship between our two development servers.
    // We are pointing our Vite client-side development server to proxy API requests to our server-side Node server at port 3001.
    // Without this line, API calls would attempt to fallback and query for data from the current domain: localhost:3000
    
    // While in development, we also need a way for our front end to send requests to our back end on a different port.
    // To do this, we will use a proxy to handle requests and update them to include the URL location of our back end.
    // We add a proxy field to the client's vite.config.js and add the URL of our back end as the value. Now, while in development, requests will be prefixed by "http://localhost:3001/graphql" to allow them to be received by the API.

    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },     
    }
  }
})
