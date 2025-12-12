<template>
  <ion-page>
    <slot name="header" />
    <ion-content :fullscreen="true">
      <slot />
    </ion-content>
    <slot name="footer" />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue'

/**
 * 主布局组件
 * 提供统一的页面布局结构
 */
</script>

<style scoped>
/* 布局样式 */
</style>

