import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({ 
      dts: true,
      dirs: [
        '@mui/material',
      ],
     })
  ]
})
