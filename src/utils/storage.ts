import { Capacitor } from '@capacitor/core'
import { Preferences } from '@capacitor/preferences'

/**
 * 存储工具类
 * 统一封装本地存储，支持 Web 和 Native 平台
 */
class Storage {
  /**
   * 获取存储项
   */
  async getItem<T>(key: string, defaultValue?: T): Promise<T | null> {
    try {
      if (Capacitor.isNativePlatform()) {
        // Native 平台使用 Capacitor Preferences
        const { value } = await Preferences.get({ key })
        return value ? JSON.parse(value) : (defaultValue ?? null)
      } else {
        // Web 平台使用 localStorage
        const value = localStorage.getItem(key)
        return value ? JSON.parse(value) : (defaultValue ?? null)
      }
    } catch (error) {
      console.error(`获取存储项失败 [${key}]:`, error)
      return defaultValue ?? null
    }
  }

  /**
   * 设置存储项
   */
  async setItem<T>(key: string, value: T): Promise<void> {
    try {
      const stringValue = JSON.stringify(value)
      if (Capacitor.isNativePlatform()) {
        await Preferences.set({ key, value: stringValue })
      } else {
        localStorage.setItem(key, stringValue)
      }
    } catch (error) {
      console.error(`设置存储项失败 [${key}]:`, error)
    }
  }

  /**
   * 删除存储项
   */
  async removeItem(key: string): Promise<void> {
    try {
      if (Capacitor.isNativePlatform()) {
        await Preferences.remove({ key })
      } else {
        localStorage.removeItem(key)
      }
    } catch (error) {
      console.error(`删除存储项失败 [${key}]:`, error)
    }
  }

  /**
   * 清空所有存储
   */
  async clear(): Promise<void> {
    try {
      if (Capacitor.isNativePlatform()) {
        await Preferences.clear()
      } else {
        localStorage.clear()
      }
    } catch (error) {
      console.error('清空存储失败:', error)
    }
  }

  /**
   * 同步版本（用于非异步场景）
   */
  getItemSync<T>(key: string, defaultValue?: T): T | null {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : (defaultValue ?? null)
    } catch (error) {
      console.error(`获取存储项失败 [${key}]:`, error)
      return defaultValue ?? null
    }
  }

  setItemSync<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`设置存储项失败 [${key}]:`, error)
    }
  }

  removeItemSync(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`删除存储项失败 [${key}]:`, error)
    }
  }
}

// 导出单例
export const useStorage = () => new Storage()

