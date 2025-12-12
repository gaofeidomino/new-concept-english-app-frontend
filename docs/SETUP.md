# 项目初始化指南

## 📋 前置要求

- Node.js >= 20.19.0 或 >= 22.12.0
- pnpm >= 8.0.0
- Xcode (仅 iOS 开发需要)
- Android Studio (仅 Android 开发需要)

## 🚀 初始化步骤

### 1. 安装依赖

```bash
pnpm install
```

### 2. 配置环境变量

创建 `.env` 文件（如需要）：

```bash
# API 基础 URL
VITE_API_BASE_URL=http://localhost:3000/api
```

### 3. 初始化 Capacitor（可选）

如果你需要构建 iOS 或 Android 应用，需要初始化 Capacitor：

#### iOS 平台

```bash
# 添加 iOS 平台
pnpm cap add ios

# 同步 Web 代码到 iOS 项目
pnpm cap:sync

# 打开 Xcode 项目
pnpm cap:open:ios
```

#### Android 平台

```bash
# 添加 Android 平台
pnpm cap add android

# 同步 Web 代码到 Android 项目
pnpm cap:sync

# 打开 Android Studio 项目
pnpm cap:open:android
```

### 4. 启动开发服务器

```bash
# Web 开发
pnpm dev

# 访问 http://localhost:5173
```

## 📱 原生应用开发

### iOS 开发流程

1. 运行 `pnpm cap:sync` 同步代码
2. 运行 `pnpm cap:open:ios` 打开 Xcode
3. 在 Xcode 中选择目标设备并运行

### Android 开发流程

1. 运行 `pnpm cap:sync` 同步代码
2. 运行 `pnpm cap:open:android` 打开 Android Studio
3. 在 Android Studio 中选择目标设备并运行

## 🔧 常见问题

### Q: Capacitor 同步失败？

A: 确保已经运行 `pnpm cap add ios` 或 `pnpm cap add android` 初始化平台。

### Q: iOS 构建失败？

A: 检查 Xcode 版本和 iOS SDK 版本是否兼容。确保在 Xcode 中正确配置了签名和证书。

### Q: Android 构建失败？

A: 检查 Android SDK 版本和 Gradle 配置。确保 Android Studio 已正确安装 SDK。

## 📝 注意事项

- 每次修改 Web 代码后，需要运行 `pnpm cap:sync` 同步到原生项目
- 原生代码修改后，需要重新构建应用
- 开发时建议使用 Web 版本进行快速迭代，原生版本用于测试原生功能

