import { Capacitor } from '@capacitor/core'
import { App } from '@capacitor/app'
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics'
import { Keyboard } from '@capacitor/keyboard'

/**
 * Capacitor 工具类
 * 封装 Capacitor 插件的常用功能
 */

/**
 * 平台检测
 */
export const isNative = () => Capacitor.isNativePlatform()
export const isIOS = () => Capacitor.getPlatform() === 'ios'
export const isAndroid = () => Capacitor.getPlatform() === 'android'
export const isWeb = () => Capacitor.getPlatform() === 'web'

/**
 * 触觉反馈
 */
export const haptics = {
  // 轻触反馈
  light: () => {
    if (isNative()) {
      Haptics.impact({ style: ImpactStyle.Light })
    }
  },
  // 中等触觉反馈
  medium: () => {
    if (isNative()) {
      Haptics.impact({ style: ImpactStyle.Medium })
    }
  },
  // 重触觉反馈
  heavy: () => {
    if (isNative()) {
      Haptics.impact({ style: ImpactStyle.Heavy })
    }
  },
  // 成功反馈
  success: () => {
    if (isNative()) {
      Haptics.notification({ type: NotificationType.Success })
    }
  },
  // 警告反馈
  warning: () => {
    if (isNative()) {
      Haptics.notification({ type: NotificationType.Warning })
    }
  },
  // 错误反馈
  error: () => {
    if (isNative()) {
      Haptics.notification({ type: NotificationType.Error })
    }
  }
}

/**
 * 键盘控制
 */
export const keyboard = {
  // 显示键盘
  show: () => {
    if (isNative()) {
      Keyboard.show()
    }
  },
  // 隐藏键盘
  hide: () => {
    if (isNative()) {
      Keyboard.hide()
    }
  },
  // 监听键盘显示
  onShow: (callback: () => void) => {
    if (isNative()) {
      Keyboard.addListener('keyboardWillShow', callback)
    }
  },
  // 监听键盘隐藏
  onHide: (callback: () => void) => {
    if (isNative()) {
      Keyboard.addListener('keyboardWillHide', callback)
    }
  }
}

/**
 * App 生命周期
 */
export const app = {
  // 监听应用进入后台
  onPause: (callback: () => void) => {
    if (isNative()) {
      App.addListener('appStateChange', ({ isActive }) => {
        if (!isActive) {
          callback()
        }
      })
    }
  },
  // 监听应用回到前台
  onResume: (callback: () => void) => {
    if (isNative()) {
      App.addListener('appStateChange', ({ isActive }) => {
        if (isActive) {
          callback()
        }
      })
    }
  },
  // 退出应用
  exit: () => {
    if (isNative()) {
      App.exitApp()
    }
  }
}

/**
 * WidgetKit 通信（预留）
 * 用于与 iOS Widget 小组件通信
 */
export const widgetKit = {
  // 更新 Widget 数据
  updateData: async (data: Record<string, any>) => {
    if (isIOS()) {
      // TODO: 实现 WidgetKit 数据更新
      // 可以使用 UserDefaults 或 App Groups 来共享数据
      console.log('更新 Widget 数据:', data)
    }
  },
  // 获取 Widget 数据
  getData: async (): Promise<Record<string, any> | null> => {
    if (isIOS()) {
      // TODO: 实现 WidgetKit 数据获取
      return null
    }
    return null
  }
}

