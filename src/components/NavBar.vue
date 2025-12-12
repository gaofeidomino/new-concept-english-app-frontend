<template>
  <ion-header :translucent="true" class="ios-header">
    <ion-toolbar>
      <ion-title v-if="title" class="text-lg font-semibold">{{ title }}</ion-title>
      <slot name="start">
        <ion-buttons slot="start" v-if="showBack">
          <ion-back-button :default-href="backHref" />
        </ion-buttons>
      </slot>
      <slot name="end">
        <ion-buttons slot="end" v-if="showMenu">
          <ion-button @click="$emit('menu-click')">
            <ion-icon :icon="menuIcon" />
          </ion-button>
        </ion-buttons>
      </slot>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon
} from '@ionic/vue'
import { menuOutline } from 'ionicons/icons'

/**
 * 导航栏组件
 * iOS 风格的顶部导航栏
 */

interface Props {
  title?: string
  showBack?: boolean
  showMenu?: boolean
  backHref?: string
  menuIcon?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
  showBack: false,
  showMenu: false,
  backHref: '/',
  menuIcon: menuOutline
})

defineEmits<{
  'menu-click': []
}>()
</script>

<style scoped>
.ios-header {
  --background: #ffffff;
  --color: #000000;
  --border-color: #e5e5ea;
}

ion-toolbar {
  --border-width: 0 0 0.5px 0;
  --border-color: #e5e5ea;
}
</style>

