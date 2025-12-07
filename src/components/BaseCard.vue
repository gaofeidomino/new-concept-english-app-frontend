<template>
  <div class="ios-card" :class="cardClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

/**
 * 基础卡片组件
 * iOS 风格的卡片容器
 */

interface Props {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md'
})

const cardClass = computed(() => {
  return {
    [`ios-card--${props.variant}`]: true,
    [`ios-card--padding-${props.padding}`]: true
  }
})
</script>

<style scoped>
.ios-card {
  @apply bg-white rounded-ios shadow-ios;
  transition: all 0.2s ease;
}

.ios-card--elevated {
  @apply shadow-ios-lg;
}

.ios-card--outlined {
  @apply border border-ios-gray-200 shadow-none;
}

.ios-card--padding-none {
  @apply p-0;
}

.ios-card--padding-sm {
  @apply p-ios-sm;
}

.ios-card--padding-md {
  @apply p-ios-md;
}

.ios-card--padding-lg {
  @apply p-ios-lg;
}
</style>
