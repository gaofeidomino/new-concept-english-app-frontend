<template>
  <ion-page>
    <NavBar title="页面未找到" show-back />
    <ion-content :fullscreen="true" class="ion-padding">
      <div class="not-found-container">
        <div class="not-found-content">
          <ion-icon :icon="alertCircleOutline" class="not-found-icon" />
          <h1 class="text-ios-title">404</h1>
          <p class="text-ios-body text-text-secondary">
            抱歉，您访问的页面不存在
          </p>
          <BaseButton @click="goHome" class="mt-ios-lg">
            返回首页
          </BaseButton>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { IonPage, IonContent, IonIcon } from '@ionic/vue'
import { alertCircleOutline } from 'ionicons/icons'
import { NavBar, BaseButton } from '@/components'

/**
 * 404 页面
 * 页面未找到时的提示页面
 */

const router = useRouter()

const goHome = () => {
  router.push('/home')
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.not-found-content {
  text-align: center;
  max-width: 300px;
}

.not-found-icon {
  font-size: 80px;
  color: #8e8e93;
  margin-bottom: ios-md;
}
</style>
