<template>
  <ion-page>
    <NavBar title="设置" show-back />
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="settings-container">
        <!-- 账户设置 -->
        <section class="settings-section">
          <h2 class="section-title">账户</h2>
          <BaseCard>
            <ion-list>
              <ion-item button @click="goToProfile" class="ios-list-item">
                <ion-label>
                  <h3>个人资料</h3>
                  <p>{{ userStore.userName }}</p>
                </ion-label>
                <ion-icon :icon="chevronForwardOutline" slot="end" />
              </ion-item>
              <ion-item button @click="handleLogout" class="ios-list-item">
                <ion-label>
                  <h3>退出登录</h3>
                </ion-label>
              </ion-item>
            </ion-list>
          </BaseCard>
        </section>

        <!-- 学习设置 -->
        <section class="settings-section mt-ios-lg">
          <h2 class="section-title">学习设置</h2>
          <BaseCard>
            <ion-list>
              <ion-item class="ios-list-item">
                <ion-label>
                  <h3>每日学习目标</h3>
                  <p>{{ settingsStore.settings.study.dailyGoal }} 分钟</p>
                </ion-label>
                <ion-button
                  slot="end"
                  fill="clear"
                  @click="showDailyGoalModal = true"
                >
                  修改
                </ion-button>
              </ion-item>
              <ion-item class="ios-list-item">
                <ion-label>
                  <h3>自动播放</h3>
                  <p>课程自动播放音频</p>
                </ion-label>
                <ion-toggle
                  :checked="settingsStore.settings.study.autoPlay"
                  @ionChange="handleAutoPlayChange"
                />
              </ion-item>
              <ion-item class="ios-list-item">
                <ion-label>
                  <h3>播放速度</h3>
                  <p>{{ settingsStore.settings.study.playbackSpeed }}x</p>
                </ion-label>
                <ion-button
                  slot="end"
                  fill="clear"
                  @click="showSpeedModal = true"
                >
                  调整
                </ion-button>
              </ion-item>
            </ion-list>
          </BaseCard>
        </section>

        <!-- 通知设置 -->
        <section class="settings-section mt-ios-lg">
          <h2 class="section-title">通知设置</h2>
          <BaseCard>
            <ion-list>
              <ion-item class="ios-list-item">
                <ion-label>
                  <h3>启用通知</h3>
                  <p>接收学习提醒和通知</p>
                </ion-label>
                <ion-toggle
                  :checked="settingsStore.settings.notifications.enabled"
                  @ionChange="handleNotificationChange"
                />
              </ion-item>
              <ion-item
                v-if="settingsStore.settings.notifications.enabled"
                class="ios-list-item"
              >
                <ion-label>
                  <h3>每日提醒</h3>
                  <p>每天提醒学习</p>
                </ion-label>
                <ion-toggle
                  :checked="settingsStore.settings.notifications.dailyReminder"
                  @ionChange="handleDailyReminderChange"
                />
              </ion-item>
            </ion-list>
          </BaseCard>
        </section>

        <!-- 外观设置 -->
        <section class="settings-section mt-ios-lg">
          <h2 class="section-title">外观</h2>
          <BaseCard>
            <ion-list>
              <ion-item class="ios-list-item">
                <ion-label>
                  <h3>主题</h3>
                  <p>{{ themeLabel }}</p>
                </ion-label>
                <ion-button slot="end" fill="clear" @click="showThemeModal = true">
                  更改
                </ion-button>
              </ion-item>
              <ion-item class="ios-list-item">
                <ion-label>
                  <h3>字体大小</h3>
                  <p>{{ fontSizeLabel }}</p>
                </ion-label>
                <ion-button
                  slot="end"
                  fill="clear"
                  @click="showFontSizeModal = true"
                >
                  调整
                </ion-button>
              </ion-item>
            </ion-list>
          </BaseCard>
        </section>

        <!-- 关于 -->
        <section class="settings-section mt-ios-lg">
          <h2 class="section-title">关于</h2>
          <BaseCard>
            <ion-list>
              <ion-item button class="ios-list-item">
                <ion-label>
                  <h3>版本信息</h3>
                  <p>v1.0.0</p>
                </ion-label>
              </ion-item>
              <ion-item button class="ios-list-item">
                <ion-label>
                  <h3>帮助与反馈</h3>
                </ion-label>
                <ion-icon :icon="chevronForwardOutline" slot="end" />
              </ion-item>
            </ion-list>
          </BaseCard>
        </section>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonPage,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButton,
  IonToggle
} from '@ionic/vue'
import { chevronForwardOutline } from 'ionicons/icons'
import { NavBar, BaseCard } from '@/components'
import { useUserStore } from '@/stores/user'
import { useSettingsStore } from '@/stores/settings'

/**
 * 设置页面
 * 管理应用的各种设置选项
 */

const router = useRouter()
const userStore = useUserStore()
const settingsStore = useSettingsStore()

// 模态框状态
const showDailyGoalModal = ref(false)
const showSpeedModal = ref(false)
const showThemeModal = ref(false)
const showFontSizeModal = ref(false)

// 计算属性
const themeLabel = computed(() => {
  const theme = settingsStore.settings.appearance.theme
  const labels = {
    light: '浅色',
    dark: '深色',
    auto: '跟随系统'
  }
  return labels[theme]
})

const fontSizeLabel = computed(() => {
  const size = settingsStore.settings.appearance.fontSize
  const labels = {
    small: '小',
    medium: '中',
    large: '大'
  }
  return labels[size]
})

// 方法
const goToProfile = () => {
  router.push('/profile')
}

const handleLogout = () => {
  userStore.logout()
  router.push('/login')
}

const handleAutoPlayChange = (event: CustomEvent) => {
  settingsStore.updateStudy({
    autoPlay: event.detail.checked
  })
}

const handleNotificationChange = (event: CustomEvent) => {
  settingsStore.updateNotifications({
    enabled: event.detail.checked
  })
}

const handleDailyReminderChange = (event: CustomEvent) => {
  settingsStore.updateNotifications({
    dailyReminder: event.detail.checked
  })
}
</script>

<style scoped>
.settings-container {
  max-width: 100%;
  margin: 0 auto;
}

.section-title {
  @apply text-ios-subtitle mb-ios-sm px-ios-md;
  color: #8e8e93;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
