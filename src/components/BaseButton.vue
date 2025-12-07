<template>
  <ion-button
    :fill="fill"
    :expand="expand"
    :disabled="disabled"
    :class="buttonClass"
    @click="handleClick"
  >
    <slot />
  </ion-button>
</template>

<script setup lang="ts">
import { IonButton } from '@ionic/vue'
import { computed } from 'vue'
import { haptics } from '@/utils/capacitor'

/**
 * 基础按钮组件
 * iOS 风格的按钮
 */

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  fill?: 'clear' | 'outline' | 'solid' | 'default'
  expand?: 'full' | 'block'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  fill: 'solid',
  expand: undefined,
  disabled: false,
  size: 'medium'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClass = computed(() => {
  return {
    [`ios-button--${props.variant}`]: true,
    [`ios-button--${props.size}`]: true
  }
})

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    haptics.light()
    emit('click', event)
  }
}
</script>

<style scoped>
.ios-button--primary {
  --background: #007aff;
  --color: #ffffff;
}

.ios-button--secondary {
  --background: #5856d6;
  --color: #ffffff;
}

.ios-button--outline {
  --border-color: #007aff;
  --color: #007aff;
  --background: transparent;
}

.ios-button--text {
  --color: #007aff;
  --background: transparent;
}

.ios-button--small {
  --padding-start: 12px;
  --padding-end: 12px;
  height: 32px;
  font-size: 14px;
}

.ios-button--medium {
  --padding-start: 16px;
  --padding-end: 16px;
  height: 44px;
  font-size: 16px;
}

.ios-button--large {
  --padding-start: 20px;
  --padding-end: 20px;
  height: 50px;
  font-size: 18px;
}
</style>
