<script setup lang="ts">
import type { PropType } from 'vue'

type HTMLElementsTags = keyof HTMLElementTagNameMap

defineProps({
  as: {
    type: String as PropType<HTMLElementsTags>,
    required: false,
    default: 'div'
  },
  // @ts-expect-error is fine
  ...variants
})
</script>

<template>
  <component
    :is="as"
    class="container"
  >
    <slot />
  </component>
</template>

<style lang="ts" scoped>
css({
  '.container': {
    marginInlineStart: 'auto',
    marginInlineEnd: 'auto',
    width: '100%',
    height: 'inherit',
    maxWidth: '{docux.layout.container.maxWidth}'
  },
  variants: {
    padded: {
      true: {
        px: '{docux.layout.container.padding}',
      },
      options: {
         // @ts-expect-error is fine
        default: true
      }
    }
  }
})
</style>
