import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { Capacitor } from '@capacitor/core'

/**
 * 应用全局状态 Store
 * 管理应用级别的状态，如平台信息、主题等
 */
export const useAppStore = defineStore('app', () => {
  // 状态
  const platform = ref<'ios' | 'android' | 'web'>('web')
  const isNative = ref(false)
  const theme = ref<'light' | 'dark'>('light')
  const isLoading = ref(false)

  // 计算属性
  const isIOS = computed(() => platform.value === 'ios')
  const isAndroid = computed(() => platform.value === 'android')
  const isWeb = computed(() => platform.value === 'web')

  // 初始化平台信息
  const initPlatform = () => {
    if (Capacitor.isNativePlatform()) {
      isNative.value = true
      const platformName = Capacitor.getPlatform()
      if (platformName === 'ios') {
        platform.value = 'ios'
      } else if (platformName === 'android') {
        platform.value = 'android'
      }
    } else {
      platform.value = 'web'
      isNative.value = false
    }
  }

  // 切换主题
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    // 这里可以添加主题切换的逻辑
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }

  // 设置加载状态
  const setLoading = (loading: boolean) => {
    isLoading.value = loading
  }

  // 初始化
  initPlatform()

  return {
    // 状态
    platform,
    isNative,
    theme,
    isLoading,
    // 计算属性
    isIOS,
    isAndroid,
    isWeb,
    // 方法
    initPlatform,
    toggleTheme,
    setLoading
  }
})

