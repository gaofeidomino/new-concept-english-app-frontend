<template>
  <ion-page>
    <NavBar title="新概念英语" />
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="home-container">
        <!-- 欢迎区域 -->
        <section class="welcome-section">
          <h1 class="text-ios-title mb-ios-sm">欢迎回来</h1>
          <p class="text-ios-body text-text-secondary">
            {{ userName }}，今天也要加油学习哦！
          </p>
        </section>

        <!-- 学习统计卡片 -->
        <section class="stats-section mt-ios-lg">
          <BaseCard>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-value">{{ todayStudyTime }}</div>
                <div class="stat-label">今日学习（分钟）</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{{ totalDays }}</div>
                <div class="stat-label">连续学习（天）</div>
              </div>
              <div class="stat-item">
                <div class="stat-value">{{ completedLessons }}</div>
                <div class="stat-label">已完成课程</div>
              </div>
            </div>
          </BaseCard>
        </section>

        <!-- 快速开始 -->
        <section class="quick-start-section mt-ios-lg">
          <h2 class="text-ios-subtitle mb-ios-md">快速开始</h2>
          <BaseCard>
            <ion-list>
              <ion-item
                v-for="course in recentCourses"
                :key="course.id"
                button
                @click="goToCourse(course.id)"
                class="ios-list-item"
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
        <section class="goal-section mt-ios-lg">
          <BaseCard>
            <div class="goal-content">
              <div class="goal-info">
                <h3 class="text-ios-subtitle">今日目标</h3>
                <p class="text-ios-caption text-text-tertiary">
                  {{ todayProgress }}/{{ dailyGoal }} 分钟
                </p>
              </div>
              <div class="goal-progress">
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

<style scoped>
.home-container {
  max-width: 100%;
  margin: 0 auto;
}

.welcome-section {
  @apply py-ios-md;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @apply gap-ios-md text-center;
}

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

.goal-content {
  @apply flex flex-col gap-ios-sm;
}

.goal-info {
  @apply flex justify-between items-center;
}

.goal-progress {
  width: 100%;
}
</style>
