import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.newconceptenglish.app',
  appName: '新概念英语',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    iosScheme: 'https',
    // 开发时允许访问本地后端
    url: 'http://localhost:5173',
    cleartext: true
  },
  plugins: {
    // 状态栏配置
    StatusBar: {
      style: 'light',
      backgroundColor: '#000000'
    },
    // 键盘配置
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    },
    // App 配置
    App: {
      // 后台保持运行
      backgroundDuration: 300
    }
  },
  // iOS 特定配置
  ios: {
    scheme: 'newconceptenglish',
    contentInset: 'automatic'
  },
  // Android 特定配置
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  }
};

export default config;
