import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // 启用响应式语法糖（可选）
      reactivityTransform: false
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Capacitor 开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },
  // 构建配置
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'ionic-vendor': ['@ionic/vue', '@ionic/vue-router'],
          'capacitor-vendor': ['@capacitor/core', '@capacitor/app']
        }
      }
    }
  }
})
