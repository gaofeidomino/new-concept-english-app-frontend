# 项目结构说明

## 📁 完整目录结构

```
Frontend/
├── .gitignore                 # Git 忽略文件配置
├── .env.example               # 环境变量示例（需要手动创建）
├── README.md                  # 项目说明文档（项目根目录）
│
├── package.json               # 项目依赖和脚本配置
├── tsconfig.json              # TypeScript 配置
├── tsconfig.node.json         # Node.js TypeScript 配置
├── vite.config.ts             # Vite 构建配置（包含 Tailwind 4 插件）
├── capacitor.config.ts        # Capacitor 配置
├── index.html                 # HTML 入口文件
│
├── docs/                      # 项目文档目录
│   ├── README.md              # 文档索引
│   ├── QUICKSTART.md          # 快速开始指南
│   ├── SETUP.md               # 初始化指南
│   ├── PROJECT_STRUCTURE.md   # 本文件 - 项目结构说明
│   └── UPGRADE_NOTES.md       # 升级说明
│
├── src/                       # 源代码目录
│   ├── main.ts                # 应用入口文件
│   ├── App.vue                # 根组件
│   ├── vite-env.d.ts          # Vite 环境类型定义
│   │
│   ├── assets/                # 静态资源
│   │   └── .gitkeep
│   │
│   ├── components/            # 可复用组件
│   │   ├── NavBar.vue         # 导航栏组件
│   │   ├── TabBar.vue         # 底部标签栏组件
│   │   ├── BaseCard.vue       # 基础卡片组件
│   │   ├── BaseButton.vue     # 基础按钮组件
│   │   └── index.ts           # 组件统一导出
│   │
│   ├── layouts/               # 布局组件
│   │   └── MainLayout.vue     # 主布局组件
│   │
│   ├── pages/                 # 页面组件
│   │   ├── HomePage.vue       # 首页
│   │   ├── SettingsPage.vue   # 设置页
│   │   └── NotFoundPage.vue  # 404 页面
│   │
│   ├── plugins/               # 插件配置
│   │   ├── capacitor.ts       # Capacitor 插件封装
│   │   └── index.ts           # 插件统一导出
│   │
│   ├── router/                # 路由配置
│   │   └── index.ts           # 路由定义和配置
│   │
│   ├── stores/                # Pinia 状态管理
│   │   ├── app.ts             # 应用全局状态
│   │   ├── user.ts            # 用户状态
│   │   ├── settings.ts        # 设置状态
│   │   └── index.ts           # Store 统一导出
│   │
│   ├── styles/                # 样式文件
│   │   └── main.css           # 主样式文件（TailwindCSS）
│   │
│   ├── types/                 # TypeScript 类型定义
│   │   └── index.ts           # 全局类型定义
│   │
│   └── utils/                 # 工具函数
│       ├── api.ts             # API 请求封装
│       ├── capacitor.ts       # Capacitor 工具函数
│       ├── storage.ts         # 存储工具（支持 Web/Native）
│       └── index.ts           # 工具函数统一导出
│
├── capacitor/                 # Capacitor 配置目录（自动生成）
│   └── .gitkeep
│
├── ios/                       # iOS 原生项目（运行 cap add ios 后生成）
│   └── .gitkeep
│
└── android/                   # Android 原生项目（运行 cap add android 后生成）
    └── .gitkeep
```

## 📝 文件说明

### 配置文件

- **package.json**: 项目依赖、脚本命令、包管理器配置
- **vite.config.ts**: Vite 构建工具配置，包含路径别名、插件等（包含 Tailwind 4 插件）
- **tsconfig.json**: TypeScript 编译配置
- **capacitor.config.ts**: Capacitor 跨平台配置

**注意**: Tailwind CSS 4.0 使用 `@theme` 在 CSS 中配置，不再需要 `tailwind.config.js` 和 `postcss.config.js`

### 核心文件

- **src/main.ts**: 应用入口，初始化 Vue、Pinia、Router、Ionic、Capacitor
- **src/App.vue**: 根组件，包含路由出口
- **src/router/index.ts**: 路由配置，包含路由守卫

### 组件

- **NavBar**: iOS 风格导航栏，支持标题、返回按钮、菜单按钮
- **TabBar**: iOS 风格底部标签栏
- **BaseCard**: 基础卡片容器，支持多种变体
- **BaseButton**: 基础按钮组件，支持多种样式

### 页面

- **HomePage**: 首页，显示学习统计、快速开始、学习目标
- **SettingsPage**: 设置页，管理应用各项设置
- **NotFoundPage**: 404 错误页面

### 状态管理

- **app.ts**: 管理平台信息、主题、加载状态等全局状态
- **user.ts**: 管理用户信息、认证状态
- **settings.ts**: 管理应用设置（通知、学习偏好、外观等）

### 工具函数

- **api.ts**: HTTP 请求封装，支持自动添加 token、错误处理
- **storage.ts**: 统一存储接口，自动适配 Web/Native 平台
- **capacitor.ts**: Capacitor 插件工具函数（触觉反馈、键盘控制等）

## 🎨 设计系统

项目使用 TailwindCSS 实现 iOS 风格设计系统：

- **颜色**: iOS 系统颜色（蓝色 #007AFF、绿色 #34C759 等）
- **圆角**: iOS 标准圆角（10px, 14px, 20px, 28px）
- **字体**: SF Pro Display / SF Pro Text
- **间距**: iOS 标准间距（4px, 8px, 16px, 24px, 32px）
- **阴影**: iOS 风格阴影效果

## 🔌 扩展能力

项目已预留以下扩展接口：

1. **WidgetKit 通信**: `src/utils/capacitor.ts` 中的 `widgetKit` 对象
2. **通知功能**: `src/plugins/capacitor.ts` 中的 `notifications` 对象
3. **文件系统**: `src/plugins/capacitor.ts` 中的 `fileSystem` 对象
4. **小程序端**: 可单独创建 `miniprogram/` 目录

## 📱 平台支持

- ✅ Web (浏览器)
- ✅ iOS (通过 Capacitor)
- ✅ Android (通过 Capacitor)

## 🚀 下一步

1. 运行 `pnpm install` 安装依赖
2. 运行 `pnpm dev` 启动开发服务器
3. 根据需要运行 `pnpm cap add ios` 或 `pnpm cap add android` 初始化原生项目
4. 开始开发你的功能！
