/**
 * 全局类型定义
 */

// 用户相关类型
export interface User {
  id: string
  email: string
  name?: string
  avatar?: string
  createdAt?: string
  updatedAt?: string
}

// 课程相关类型
export interface Course {
  id: string
  title: string
  description: string
  level: number
  lessons: Lesson[]
  progress?: number
}

// 课程单元类型
export interface Lesson {
  id: string
  courseId: string
  title: string
  content: string
  audioUrl?: string
  order: number
  completed?: boolean
}

// 学习进度类型
export interface Progress {
  id: string
  userId: string
  courseId: string
  lessonId: string
  completed: boolean
  studyTime: number // 学习时长（分钟）
  createdAt: string
  updatedAt: string
}

// API 响应类型
export interface ApiResponse<T = any> {
  success: boolean
  message?: string
  data?: T
  error?: string
}

// 分页类型
export interface Pagination {
  page: number
  pageSize: number
  total: number
  totalPages: number
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: Pagination
}
