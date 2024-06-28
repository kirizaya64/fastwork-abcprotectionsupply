import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,  // เพิ่มขีดจำกัดเป็น 1000 KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // แยก dependencies ออกเป็นส่วนของ 'vendor'
          }
        }
      }
    }
  }
})
