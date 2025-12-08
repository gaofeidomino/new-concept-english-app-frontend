# 升级到 Tailwind CSS 4.0 说明

## 🔄 主要变更

### 1. 依赖更新

- **Tailwind CSS**: `^3.4.17` → `^4.0.0`
- **Vue**: `^3.5.13` → `^3.5.14`
- **Vite**: `^6.0.5` → `^6.1.0`
- **Vue Router**: `^4.4.5` → `^4.5.0`
- 新增: `@tailwindcss/vite` - Tailwind 4 的 Vite 插件

### 2. 配置方式变更

#### 旧方式 (Tailwind 3)
- 使用 `tailwind.config.js` 配置文件
- 使用 PostCSS 处理
- 使用 `@tailwind` 指令

#### 新方式 (Tailwind 4)
- 使用 `@theme` 在 CSS 中定义配置
- 使用 `@tailwindcss/vite` 插件（无需 PostCSS）
- 使用 `@import "tailwindcss"` 导入

### 3. 文件变更

**删除的文件:**
- `tailwind.config.js` - 配置已迁移到 CSS
- `postcss.config.js` - Tailwind 4 不再需要 PostCSS

**更新的文件:**
- `vite.config.ts` - 添加 `@tailwindcss/vite` 插件
- `src/styles/main.css` - 使用 `@theme` 定义设计 tokens
- `package.json` - 更新依赖版本

### 4. 自定义 Tokens

所有 iOS 风格的设计 tokens 现在在 `src/styles/main.css` 中使用 `@theme` 定义：

```css
@theme {
  --color-ios-blue: #007AFF;
  --spacing-ios-md: 16px;
  --radius-ios: 10px;
  --shadow-ios: 0 2px 8px rgba(0, 0, 0, 0.1);
  --font-ios: -apple-system, ...;
}
```

这些 tokens 会自动生成对应的 Tailwind 工具类：
- `bg-ios-blue`, `text-ios-blue`
- `p-ios-md`, `m-ios-md`, `gap-ios-md`
- `rounded-ios`
- `shadow-ios`
- `font-ios`

### 5. 使用方式

#### 在组件中使用 Tailwind 类名

```vue
<template>
  <div class="bg-ios-blue text-white p-ios-md rounded-ios shadow-ios">
    <!-- 内容 -->
  </div>
</template>
```

#### 在 CSS 中使用 @apply

```css
.my-class {
  @apply bg-ios-blue p-ios-md rounded-ios;
}
```

#### 使用 CSS 变量

```css
.my-class {
  background-color: var(--color-ios-blue);
  padding: var(--spacing-ios-md);
  border-radius: var(--radius-ios);
}
```

## 🚀 迁移步骤

1. **安装新依赖**
   ```bash
   pnpm install
   ```

2. **验证配置**
   - 检查 `vite.config.ts` 是否包含 `tailwindcss()` 插件
   - 检查 `src/styles/main.css` 是否使用 `@import "tailwindcss"`

3. **测试运行**
   ```bash
   pnpm dev
   ```

4. **检查样式**
   - 确认所有自定义类名正常工作
   - 确认 iOS 风格 tokens 正确应用

## ⚠️ 注意事项

1. **类名兼容性**: Tailwind 4 保持了与 Tailwind 3 的类名兼容性，大部分类名无需修改

2. **自定义 Tokens**: 如果遇到自定义 tokens 不生效，检查 `@theme` 中的命名是否符合 Tailwind 4 规范

3. **@apply 指令**: `@apply` 指令仍然可用，但建议直接使用 Tailwind 类名以获得更好的性能

4. **构建性能**: Tailwind 4 使用 Vite 插件，构建性能更好，无需 PostCSS 处理

## 📚 参考资源

- [Tailwind CSS 4.0 文档](https://tailwindcss.com/docs)
- [Tailwind CSS 4.0 迁移指南](https://tailwindcss.com/docs/upgrade-guide)
