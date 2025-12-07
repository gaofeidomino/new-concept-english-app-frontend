import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * 使用自动路由模式，也可以手动配置
 */

// 路由定义
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      title: '首页',
      requiresAuth: false
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/pages/SettingsPage.vue'),
    meta: {
      title: '设置',
      requiresAuth: false
    }
  },
  {
    // 404 页面
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: {
      title: '页面未找到'
    }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if (to.meta.title) {
    document.title = `${to.meta.title} - 新概念英语`
  }

  // 认证检查（示例）
  if (to.meta.requiresAuth) {
    // 这里可以添加认证逻辑
    // const isAuthenticated = useAuthStore().isAuthenticated
    // if (!isAuthenticated) {
    //   next('/login')
    //   return
    // }
  }

  next()
})

export default router
