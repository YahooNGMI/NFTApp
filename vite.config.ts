import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  define: {global: 'window','process.env.ANCHOR_BROWSER': true,'window.Buffer':true}, 
  resolve: {
    alias: {
      process: "process/browser"
    }
  }
})
