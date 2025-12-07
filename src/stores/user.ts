import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * 用户状态 Store
 * 管理用户信息、认证状态等
 */
export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
}

export const useUserStore = defineStore('user', () => {
  // 状态
  const user = ref<User | null>(null)
  const token = ref<string | null>(null)
  const refreshToken = ref<string | null>(null)

  // 计算属性
  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const userName = computed(() => user.value?.name || user.value?.email || '用户')

  // 登录
  const login = async (email: string, password: string) => {
    try {
      // TODO: 调用后端登录 API
      // const response = await api.auth.login({ email, password })
      // user.value = response.data.user
      // token.value = response.data.token
      // refreshToken.value = response.data.refreshToken

      // 临时模拟数据
      user.value = {
        id: '1',
        email,
        name: '测试用户'
      }
      token.value = 'mock_token'

      return { success: true }
    } catch (error) {
      console.error('登录失败:', error)
      return { success: false, error }
    }
  }

  // 注册
  const register = async (email: string, password: string, name?: string) => {
    try {
      // TODO: 调用后端注册 API
      // const response = await api.auth.register({ email, password, name })
      // user.value = response.data.user
      // token.value = response.data.token
      // refreshToken.value = response.data.refreshToken

      // 临时模拟数据
      user.value = {
        id: '1',
        email,
        name: name || '新用户'
      }
      token.value = 'mock_token'

      return { success: true }
    } catch (error) {
      console.error('注册失败:', error)
      return { success: false, error }
    }
  }

  // 登出
  const logout = () => {
    user.value = null
    token.value = null
    refreshToken.value = null
    // TODO: 清除本地存储
  }

  // 更新用户信息
  const updateUser = (userData: Partial<User>) => {
    if (user.value) {
      user.value = { ...user.value, ...userData }
    }
  }

  return {
    // 状态
    user,
    token,
    refreshToken,
    // 计算属性
    isAuthenticated,
    userName,
    // 方法
    login,
    register,
    logout,
    updateUser
  }
})
