/**
 * Capacitor 插件封装
 * 统一管理所有 Capacitor 插件的初始化和配置
 */

import { App } from '@capacitor/app'
import { StatusBar, Style } from '@capacitor/status-bar'
import { Keyboard, KeyboardResize } from '@capacitor/keyboard'
import { Capacitor } from '@capacitor/core'

/**
 * 初始化 Capacitor 插件
 */
export function initCapacitorPlugins() {
  if (!Capacitor.isNativePlatform()) {
    return
  }

  // 初始化状态栏
  StatusBar.setStyle({ style: Style.Light })
  StatusBar.setBackgroundColor({ color: '#ffffff' })

  // 配置键盘
  Keyboard.setResizeMode({ mode: KeyboardResize.Body })

  // 监听应用状态变化
  App.addListener('appStateChange', ({ isActive }) => {
    if (isActive) {
      // 应用回到前台
      console.log('App resumed')
    } else {
      // 应用进入后台
      console.log('App paused')
    }
  })

  // 监听返回按钮（Android）
  App.addListener('backButton', ({ canGoBack }) => {
    if (!canGoBack) {
      App.exitApp()
    } else {
      window.history.back()
    }
  })
}

/**
 * 通知插件（预留）
 * 用于推送通知功能
 */
export const notifications = {
  // TODO: 实现通知功能
  // 可以使用 @capacitor/local-notifications 插件
}

/**
 * 存储插件（预留）
 * 使用 Preferences API（已在 utils/storage.ts 中实现）
 */

/**
 * 文件系统插件（预留）
 * 用于文件读写功能
 */
export const fileSystem = {
  // TODO: 实现文件系统功能
  // 可以使用 @capacitor/filesystem 插件
}

