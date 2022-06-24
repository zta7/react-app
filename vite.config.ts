// @ts-nocheck
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({ 
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      eslintrc: {
        enabled: true, // <-- this
      },
      dts: './src/auto-imports.d.ts',
      imports: [
        'react', 'mobx', 'mobx-react-lite',
        {
          '@mui/material': [
            'Avatar', 'Typography', 'Stack'
          ]
        }
      ],
      dirs: ['./src/models/']
     })
  ]
})
