# 新概念英语学习 App - 前端项目

## 📱 项目简介

这是一个跨端前端应用，支持 iOS、Android 和 Web 平台，采用 Vue 3 + Ionic Vue + Capacitor 技术栈构建。

## 🛠️ 技术栈

- **Vue 3** - 渐进式 JavaScript 框架（Composition API）
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 下一代前端构建工具（最新版）
- **Ionic Vue** - 移动端 UI 框架
- **Capacitor** - 跨平台原生应用运行时
- **TailwindCSS 4.0** - 实用优先的 CSS 框架（最新版，使用 @theme 配置）
- **Pinia** - Vue 状态管理
- **Vue Router** - Vue 官方路由管理器

## 📁 项目结构

```
Frontend/
├── src/
│   ├── assets/          # 静态资源（图片、字体等）
│   ├── components/      # 可复用组件
│   │   ├── NavBar.vue   # 导航栏组件
│   │   ├── TabBar.vue   # 底部标签栏组件
│   │   ├── BaseCard.vue # 基础卡片组件
│   │   └── BaseButton.vue # 基础按钮组件
│   ├── layouts/         # 布局组件
│   ├── pages/           # 页面组件
│   │   ├── HomePage.vue      # 首页
│   │   ├── SettingsPage.vue   # 设置页
│   │   └── NotFoundPage.vue  # 404 页面
│   ├── plugins/         # 插件配置
│   ├── router/          # 路由配置
│   ├── stores/          # Pinia 状态管理
│   │   ├── app.ts       # 应用全局状态
│   │   ├── user.ts      # 用户状态
│   │   └── settings.ts  # 设置状态
│   ├── styles/          # 样式文件
│   │   └── main.css     # 主样式文件（TailwindCSS）
│   ├── utils/           # 工具函数
│   │   ├── api.ts       # API 请求封装
│   │   ├── capacitor.ts # Capacitor 工具
│   │   └── storage.ts   # 存储工具
│   ├── App.vue          # 根组件
│   └── main.ts          # 应用入口
├── capacitor/           # Capacitor 配置（自动生成）
├── ios/                 # iOS 原生项目（自动生成）
├── android/             # Android 原生项目（自动生成）
├── capacitor.config.ts  # Capacitor 配置文件
├── vite.config.ts       # Vite 配置文件（包含 Tailwind 4 插件）
├── package.json         # 项目依赖
├── docs/                # 项目文档
│   ├── SETUP.md         # 初始化指南
│   ├── QUICKSTART.md    # 快速开始指南
│   ├── PROJECT_STRUCTURE.md # 项目结构说明
│   └── UPGRADE_NOTES.md # 升级说明
└── README.md            # 项目说明（本文件）

**注意**: Tailwind CSS 4.0 使用 `@theme` 在 CSS 中配置，不再需要 `tailwind.config.js`

```

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# Web 开发
pnpm dev

# iOS 开发（需要先同步 Capacitor）
pnpm cap:sync
pnpm cap:open:ios

# Android 开发（需要先同步 Capacitor）
pnpm cap:sync
pnpm cap:open:android
```

### 构建

```bash
# 构建 Web 版本
pnpm build

# 构建后预览
pnpm preview
```

### Capacitor 命令

```bash
# 同步 Web 代码到原生项目
pnpm cap:sync

# 打开 iOS 项目（Xcode）
pnpm cap:open:ios

# 打开 Android 项目（Android Studio）
pnpm cap:open:android

# 运行 iOS 应用
pnpm cap:run:ios

# 运行 Android 应用
pnpm cap:run:android
```

## 🎨 UI 设计

项目采用 iOS Human Interface Guidelines (HIG) 设计规范，使用 TailwindCSS 4.0 实现统一的 iOS 风格 UI。

### 设计 Tokens

所有设计 tokens 在 `src/styles/main.css` 中使用 `@theme` 定义：

- **颜色**: iOS 系统颜色（蓝色、绿色、红色等）
- **圆角**: iOS 标准圆角（10px, 14px, 20px 等）
- **字体**: SF Pro Display / SF Pro Text
- **间距**: iOS 标准间距系统
- **阴影**: iOS 风格阴影效果

### 组件

所有组件都遵循 iOS 设计规范，提供一致的用户体验。

### Tailwind 4.0 特性

- 使用 `@tailwindcss/vite` 插件，无需 PostCSS
- 配置直接在 CSS 中使用 `@theme` 定义
- 更好的构建性能和开发体验

## 📦 状态管理

使用 Pinia 进行状态管理，包含以下 Store：

- **app**: 应用全局状态（平台信息、主题等）
- **user**: 用户状态（登录、用户信息等）
- **settings**: 应用设置（通知、学习偏好等）

## 🔌 Capacitor 插件

项目已集成以下 Capacitor 插件：

- `@capacitor/app` - 应用生命周期管理
- `@capacitor/haptics` - 触觉反馈
- `@capacitor/keyboard` - 键盘控制
- `@capacitor/status-bar` - 状态栏控制
- `@capacitor/preferences` - 本地存储

## 🌐 API 集成

API 请求封装在 `src/utils/api.ts` 中，支持：

- 自动添加认证 token
- 统一错误处理
- 请求/响应拦截

后端 API 基础 URL 通过环境变量 `VITE_API_BASE_URL` 配置。

## 📱 平台适配

项目自动检测运行平台（iOS/Android/Web），并根据平台提供相应的功能：

- **Web**: 使用 localStorage
- **iOS/Android**: 使用 Capacitor Preferences API

## 🔮 未来扩展

项目已预留以下扩展能力：

1. **WidgetKit 通信**: 与 iOS Widget 小组件数据共享
2. **通知功能**: 本地和推送通知
3. **文件系统**: 文件读写功能
4. **小程序端**: 预留小程序代码目录

## 📝 开发规范

- 使用 TypeScript 进行类型检查
- 组件使用 Composition API
- 遵循 Vue 3 最佳实践
- 代码注释使用中文
- 组件和函数命名使用语义化名称
- 使用 TailwindCSS 4.0 的 `@theme` 定义设计 tokens

## 📚 文档

项目相关文档位于 `docs/` 目录：

- [快速开始指南](./docs/QUICKSTART.md) - 快速上手项目
- [初始化指南](./docs/SETUP.md) - 详细的初始化步骤
- [项目结构说明](./docs/PROJECT_STRUCTURE.md) - 完整的项目结构说明
- [升级说明](./docs/UPGRADE_NOTES.md) - Tailwind CSS 4.0 升级说明

## 🔄 升级说明

项目已升级到 Tailwind CSS 4.0，详细变更请查看 [升级说明](./docs/UPGRADE_NOTES.md)

## 📄 许可证

ISC
