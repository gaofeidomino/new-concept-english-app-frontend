<template>
  <ion-page>
    <NavBar title="新概念英语" />
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="max-w-full mx-auto">
        <!-- 欢迎区域 -->
        <section class="py-4">
          <h1 class="text-2xl font-bold mb-2">欢迎回来</h1>
          <p class="text-gray-600">
            {{ userName }}，今天也要加油学习哦！
          </p>
        </section>

        <!-- 学习统计卡片 -->
        <section class="mt-6">
          <BaseCard>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="stat-value">{{ todayStudyTime }}</div>
                <div class="stat-label">今日学习（分钟）</div>
              </div>
              <div>
                <div class="stat-value">{{ totalDays }}</div>
                <div class="stat-label">连续学习（天）</div>
              </div>
              <div>
                <div class="stat-value">{{ completedLessons }}</div>
                <div class="stat-label">已完成课程</div>
              </div>
            </div>
          </BaseCard>
        </section>

        <!-- 快速开始 -->
        <section class="mt-6">
          <h2 class="text-lg font-semibold mb-4">快速开始</h2>
          <BaseCard>
            <ion-list>
              <ion-item
                v-for="course in recentCourses"
                :key="course.id"
                button
                @click="goToCourse(course.id)"
              >
                <ion-label>
                  <h3>{{ course.title }}</h3>
                  <p>{{ course.description }}</p>
                </ion-label>
                <ion-icon :icon="chevronForwardOutline" slot="end" />
              </ion-item>
            </ion-list>
          </BaseCard>
        </section>

        <!-- 学习目标 -->
        <section class="mt-6">
          <BaseCard>
            <div class="flex flex-col gap-2">
              <div class="flex justify-between items-center">
                <h3 class="text-lg font-semibold">今日目标</h3>
                <p class="text-sm text-gray-500">
                  {{ todayProgress }}/{{ dailyGoal }} 分钟
                </p>
              </div>
              <div class="w-full">
                <ion-progress-bar
                  :value="progressPercentage"
                  color="primary"
                />
              </div>
            </div>
          </BaseCard>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonProgressBar
} from '@ionic/vue'
import { chevronForwardOutline } from 'ionicons/icons'
import { NavBar, BaseCard } from '@/components'
import { useUserStore } from '@/stores/user'
import { useSettingsStore } from '@/stores/settings'

/**
 * 首页
 * 显示学习统计、快速开始、学习目标等
 */

const router = useRouter()
const userStore = useUserStore()
const settingsStore = useSettingsStore()

// 计算属性
const userName = computed(() => userStore.userName)
const dailyGoal = computed(() => settingsStore.settings.study.dailyGoal)

// 模拟数据
const todayStudyTime = 25
const totalDays = 7
const completedLessons = 12
const todayProgress = 25
const progressPercentage = computed(() => todayProgress / dailyGoal.value)

const recentCourses = [
  {
    id: '1',
    title: '新概念英语第一册',
    description: 'Lesson 15 - 继续学习'
  },
  {
    id: '2',
    title: '新概念英语第二册',
    description: 'Lesson 8 - 复习'
  }
]

// 方法
const goToCourse = (courseId: string) => {
  router.push(`/course/${courseId}`)
}
</script>

<style lang="less" scoped>
.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: #007aff;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: #8e8e93;
}
</style>

