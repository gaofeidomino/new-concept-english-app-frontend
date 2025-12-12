/**
 * API 请求工具
 * 封装 HTTP 请求，统一处理认证、错误等
 */

// API 基础 URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

// 请求配置接口
interface RequestConfig extends RequestInit {
  params?: Record<string, any>
  skipAuth?: boolean
}

/**
 * 发送 HTTP 请求
 */
async function request<T = any>(
  endpoint: string,
  config: RequestConfig = {}
): Promise<T> {
  const { params, skipAuth = false, ...fetchConfig } = config

  // 构建 URL
  let url = `${API_BASE_URL}${endpoint}`
  if (params) {
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value))
      }
    })
    url += `?${searchParams.toString()}`
  }

  // 构建请求头
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchConfig.headers
  }

  // 添加认证 token（从 user store 获取）
  if (!skipAuth) {
    try {
      const { useUserStore } = await import('@/stores/user')
      const userStore = useUserStore()
      if (userStore.token) {
        (headers as Record<string, string>)['Authorization'] = `Bearer ${userStore.token}`
      }
    } catch (error) {
      // 如果 store 不存在，忽略
    }
  }

  try {
    const response = await fetch(url, {
      ...fetchConfig,
      headers
    })

    // 处理响应
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: `HTTP ${response.status}: ${response.statusText}`
      }))
      throw new Error(error.message || '请求失败')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('API 请求失败:', error)
    throw error
  }
}

/**
 * GET 请求
 */
export function get<T = any>(endpoint: string, config?: RequestConfig): Promise<T> {
  return request<T>(endpoint, { ...config, method: 'GET' })
}

/**
 * POST 请求
 */
export function post<T = any>(
  endpoint: string,
  data?: any,
  config?: RequestConfig
): Promise<T> {
  return request<T>(endpoint, {
    ...config,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined
  })
}

/**
 * PUT 请求
 */
export function put<T = any>(
  endpoint: string,
  data?: any,
  config?: RequestConfig
): Promise<T> {
  return request<T>(endpoint, {
    ...config,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined
  })
}

/**
 * DELETE 请求
 */
export function del<T = any>(endpoint: string, config?: RequestConfig): Promise<T> {
  return request<T>(endpoint, { ...config, method: 'DELETE' })
}

/**
 * API 模块导出
 */
export const api = {
  // 认证相关
  auth: {
    login: (data: { email: string; password: string }) =>
      post('/auth/login', data, { skipAuth: true }),
    register: (data: { email: string; password: string; name?: string }) =>
      post('/auth/register', data, { skipAuth: true }),
    logout: () => post('/auth/logout'),
    refresh: (refreshToken: string) =>
      post('/auth/refresh', { refreshToken }, { skipAuth: true })
  },
  // 用户相关
  user: {
    getProfile: () => get('/user/profile'),
    updateProfile: (data: any) => put('/user/profile', data)
  },
  // 课程相关
  course: {
    list: (params?: any) => get('/course', { params }),
    getById: (id: string) => get(`/course/${id}`),
    getProgress: (id: string) => get(`/course/${id}/progress`)
  },
  // 进度相关
  progress: {
    get: (params?: any) => get('/progress', { params }),
    update: (data: any) => post('/progress', data)
  }
}

export default api

