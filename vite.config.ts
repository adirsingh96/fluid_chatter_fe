/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})*/


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';



// Determine the port based on environment variable or default to 3000
const PORT = 80;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:PORT// Use the determined port
  },
});