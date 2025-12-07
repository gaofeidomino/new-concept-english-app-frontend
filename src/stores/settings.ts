import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@/utils/storage'

/**
 * 设置状态 Store
 * 管理应用设置，如通知、语言、学习偏好等
 */
export interface AppSettings {
  // 通知设置
  notifications: {
    enabled: boolean
    dailyReminder: boolean
    studyReminder: boolean
  }
  // 学习设置
  study: {
    dailyGoal: number // 每日学习目标（分钟）
    autoPlay: boolean
    playbackSpeed: number // 播放速度 0.5 - 2.0
  }
  // 界面设置
  appearance: {
    theme: 'light' | 'dark' | 'auto'
    fontSize: 'small' | 'medium' | 'large'
  }
  // 语言设置
  language: 'zh-CN' | 'en-US'
}

const defaultSettings: AppSettings = {
  notifications: {
    enabled: true,
    dailyReminder: true,
    studyReminder: true
  },
  study: {
    dailyGoal: 30,
    autoPlay: true,
    playbackSpeed: 1.0
  },
  appearance: {
    theme: 'auto',
    fontSize: 'medium'
  },
  language: 'zh-CN'
}

export const useSettingsStore = defineStore('settings', () => {
  // 从本地存储加载设置
  const settings = ref<AppSettings>(
    useStorage().getItem('app_settings', defaultSettings)
  )

  // 更新设置
  const updateSettings = (newSettings: Partial<AppSettings>) => {
    settings.value = { ...settings.value, ...newSettings }
    // 保存到本地存储
    useStorage().setItem('app_settings', settings.value)
  }

  // 重置设置
  const resetSettings = () => {
    settings.value = { ...defaultSettings }
    useStorage().setItem('app_settings', settings.value)
  }

  // 更新通知设置
  const updateNotifications = (notifications: Partial<AppSettings['notifications']>) => {
    updateSettings({
      notifications: { ...settings.value.notifications, ...notifications }
    })
  }

  // 更新学习设置
  const updateStudy = (study: Partial<AppSettings['study']>) => {
    updateSettings({
      study: { ...settings.value.study, ...study }
    })
  }

  // 更新外观设置
  const updateAppearance = (appearance: Partial<AppSettings['appearance']>) => {
    updateSettings({
      appearance: { ...settings.value.appearance, ...appearance }
    })
  }

  return {
    // 状态
    settings,
    // 方法
    updateSettings,
    resetSettings,
    updateNotifications,
    updateStudy,
    updateAppearance
  }
})
