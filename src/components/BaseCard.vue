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

<style lang="less" scoped>
.ios-card {
  @apply bg-white rounded-xl shadow-sm;
  transition: all 0.2s ease;

  &--elevated {
    @apply shadow-lg;
  }

  &--outlined {
    @apply border border-gray-200 shadow-none;
  }

  &--padding-none {
    @apply p-0;
  }

  &--padding-sm {
    @apply p-3;
  }

  &--padding-md {
    @apply p-4;
  }

  &--padding-lg {
    @apply p-6;
  }
}
</style>

