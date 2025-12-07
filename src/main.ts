import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Ionic Vue 样式和组件
import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/ionic.bundle.css'

// TailwindCSS
import './styles/main.css'

// Capacitor 初始化
import { Capacitor } from '@capacitor/core'
import { StatusBar, Style } from '@capacitor/status-bar'
import { Keyboard } from '@capacitor/keyboard'

// 应用初始化
const app = createApp(App)

// 使用 Pinia
app.use(createPinia())

// 使用 Vue Router
app.use(router)

// Capacitor 平台检测和初始化
if (Capacitor.isNativePlatform()) {
  // 设置状态栏样式
  StatusBar.setStyle({ style: Style.Light })
  StatusBar.setBackgroundColor({ color: '#ffffff' })

  // 监听键盘事件
  Keyboard.addListener('keyboardWillShow', () => {
    // 键盘显示时的处理
  })

  Keyboard.addListener('keyboardWillHide', () => {
    // 键盘隐藏时的处理
  })
}

// 挂载应用
app.mount('#app')
