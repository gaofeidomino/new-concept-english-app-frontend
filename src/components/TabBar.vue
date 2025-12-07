<template>
  <ion-tab-bar slot="bottom" class="ios-tab-bar">
    <ion-tab-button
      v-for="tab in tabs"
      :key="tab.path"
      :tab="tab.path"
      :href="tab.path"
      @click="handleTabClick(tab)"
    >
      <ion-icon :icon="tab.icon" />
      <ion-label>{{ tab.label }}</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/vue'
import { useRouter } from 'vue-router'
import { haptics } from '@/utils/capacitor'

/**
 * 底部标签栏组件
 * iOS 风格的底部导航栏
 */

interface Tab {
  path: string
  label: string
  icon: string
}

interface Props {
  tabs: Tab[]
}

const props = defineProps<Props>()

const router = useRouter()

const handleTabClick = (tab: Tab) => {
  // 触觉反馈
  haptics.light()
  // 导航到对应页面
  router.push(tab.path)
}
</script>

<style scoped>
.ios-tab-bar {
  --background: #ffffff;
  --color: #8e8e93;
  --color-selected: #007aff;
  --border: 0.5px solid #e5e5ea;
  height: 49px;
  padding-bottom: env(safe-area-inset-bottom);
}

ion-tab-button {
  --color-selected: #007aff;
  font-size: 10px;
  font-weight: 500;
}

ion-icon {
  font-size: 24px;
  margin-bottom: 4px;
}
</style>
