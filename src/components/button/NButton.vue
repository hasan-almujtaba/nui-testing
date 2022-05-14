<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  type: 'filled' | 'outlined' | 'text'
  color?: 'primary' | 'secondary' | 'tertiary'
  elevated?: boolean
}>()

const type = computed(() => `n-ui-button-${props.type}`)

const color = computed(() => `n-ui-button-${props.color}`)

const elevated = computed(() => props.elevated && 'n-ui-button-elevated')

const classes = computed(
  () => `n-ui-button ${type.value} ${color.value} ${elevated.value}`
)
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
