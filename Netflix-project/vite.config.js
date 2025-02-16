import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflix-pro-/",
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://api.themoviedb.org/3', // HTTPS is essential!
//         changeOrigin: true, // This is absolutely required for CORS
//         rewrite: (path) => path.replace(/^\/api/, ''), // Remove the /api prefix
//       },
//     },
//   },
// });