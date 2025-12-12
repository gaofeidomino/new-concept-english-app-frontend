# Tailwind CSS 4.0 升级说明

## 📦 版本信息

- **Tailwind CSS**: 4.0+
- **@tailwindcss/vite**: 4.1.18+

## 🎯 主要变更

### 1. 配置方式变更

**之前** (Tailwind 3.x):
- 需要 `tailwind.config.js` 配置文件
- 需要 `postcss.config.js` 配置

**现在** (Tailwind 4.0):
- ✅ 使用 `@theme` 在 CSS 中直接配置
- ✅ 使用 `@tailwindcss/vite` 插件，无需 PostCSS
- ✅ 配置更简洁，性能更好

### 2. 配置文件位置

所有设计 tokens 现在在 `src/styles/main.css` 中使用 `@theme` 定义：

```css
@theme {
  --color-ios-blue: #007AFF;
  --radius-ios: 10px;
  --spacing-ios-md: 16px;
  /* ... */
}
```

### 3. Vite 插件集成

在 `vite.config.ts` 中：

```typescript
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 直接使用，无需 PostCSS
  ],
})
```

## 🔄 迁移指南

### 从 Tailwind 3.x 迁移

1. **删除旧配置文件**:
   - `tailwind.config.js`
   - `postcss.config.js`

2. **更新 package.json**:
   ```json
   {
     "dependencies": {
       "@tailwindcss/vite": "^4.1.18",
       "tailwindcss": "^4.1.18"
     }
   }
   ```

3. **更新 Vite 配置**:
   - 添加 `@tailwindcss/vite` 插件
   - 移除 PostCSS 相关配置

4. **迁移配置到 CSS**:
   - 将 `tailwind.config.js` 中的配置转换为 `@theme` 语法
   - 在 `src/styles/main.css` 中定义

## ✨ 新特性

### 1. 更好的性能

- 更快的构建速度
- 更小的输出文件
- 更好的开发体验

### 2. 更灵活的配置

- 直接在 CSS 中配置
- 支持 CSS 变量
- 更好的类型支持

### 3. 简化的工作流

- 无需 PostCSS
- 更少的配置文件
- 更直观的配置方式

## 📚 参考文档

- [Tailwind CSS 4.0 文档](https://tailwindcss.com/docs)
- [@tailwindcss/vite 插件文档](https://github.com/tailwindlabs/tailwindcss-vite)

## ⚠️ 注意事项

- 某些 Tailwind 3.x 的插件可能不兼容
- 自定义工具类需要迁移到 `@theme` 语法
- 建议在迁移前备份项目

