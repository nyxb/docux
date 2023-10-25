<script setup lang="ts">
import type { PropType } from 'vue'

// @ts-expect-error is fine
const { isFirefox } = useUserAgent()

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '100vh'
  },
  zIndex: {
    type: String,
    default: '0'
  },
  top: {
    type: String,
    default: '0'
  },
  bottom: {
    type: String,
    default: 'auto'
  },
  left: {
    type: String,
    default: '0'
  },
  right: {
    type: String,
    default: 'auto'
  },
  blur: {
    type: String,
    default: '0px'
  },
  maskGradient: {
    type: [String, Object] as PropType<string | { light: string; dark: string }>,
    default: 'radial-gradient(at 50% 50%, red, rgba(255, 0, 0, 0) 85%)'
  },
  gradient: {
    type: [String, Object] as PropType<string | { light: string; dark: string }>,
    default: 'radial-gradient(circle at 10% 50%, #4200ff 7%, #23d70c73 35%, #fbca0563 45%, #ff4700e6 82%)'
  },
  noise: {
    type: Boolean,
    default: false
  },
  backgroundImage: {
    type: String,
    default: 'none'
  },
  beforeBlendMode: {
    type: String,
    default: 'color'
  },
  afterBlendMode: {
    type: [String, Object],
    default: 'color'
  }
})

const show = ref(false)

onMounted(() => {
  show.value = isFirefox.value ? false : true
})
</script>

<template>
  <div v-if="show" class="glow" :class="{noise}">
    <svg v-if="noise">
      <filter id="f">
        <feTurbulence type="fractalNoise" baseFrequency="7.5" />
      </filter>
    </svg>
  </div>
</template>

<style scoped lang="ts">
// @ts-expect-error is fine
css({
  '.glow': {
    '--beforeBlendMode': (props: any) => typeof props.beforeBlendMode === 'string' ? props.beforeBlendMode : props.beforeBlendMode.light,
    '--afterBlendMode': (props: any) => typeof props.afterBlendMode === 'string' ? props.afterBlendMode : props.afterBlendMode.light,
    '--mask-gradient': (props: any) => typeof props.maskGradient === 'string' ? props.maskGradient : props.maskGradient.light,
    '--gradient': (props: any) => typeof props.gradient === 'string' ? props.gradient : props.gradient.light,
    '@dark': {
      '--beforeBlendMode': (props: any) => typeof props.beforeBlendMode === 'string' ? props.beforeBlendMode : props.beforeBlendMode.dark,
      '--afterBlendMode': (props: any) => typeof props.afterBlendMode === 'string' ? props.afterBlendMode : props.afterBlendMode.dark,
      '--mask-gradient': (props: any) => typeof props.maskGradient === 'string' ? props.maskGradient : props.maskGradient.dark,
      '--gradient': (props: any) => typeof props.gradient === 'string' ? props.gradient : props.gradient.dark
    },
    pointerEvents: 'none',
    position: 'absolute',
    top: (props: any) => props.top,
    insetInlineStart: (props: any) => props.left,
    insetInlineEnd: (props: any) => props.right,
    zIndex: (props: any) => props.zIndex,
    width: (props: any) => props.width,
    height: (props: any) => props.height,
    opacity: 0,
    overflow: 'hidden',
    backgroundImage: (props: any) => props.backgroundImage,
    '&::before, &::after': {
      opacity: 0,
      content: '""',
      position: 'absolute',
      inset: 0,
      '--mask': 'var(--mask-gradient), var(--mask-gradient), var(--mask-gradient)',
      '-webkit-mask': 'var(--mask)',
      mask: 'var(--mask)',
      maskComposite: 'intersect',
      '-webkit-mask-composite': 'source-in',
      // mixBlendMode: 'color'
    },
    '&.noise::before': {
      filter: 'url(#f)'
    },
    '&::before': {
      mixBlendMode: 'var(--beforeBlendMode)',
    },
    '&::after': {
      background: 'var(--gradient)',
      mixBlendMode: 'var(--afterBlendMode)',
    }
  }
})
</style>

<style scoped>

.glow {
  animation: enter-opacity 750ms forwards 500ms $dt('ease.expo.inOut');
}
@keyframes enter-opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.glow::after, .glow::before {
  animation: enter-scale 0ms forwards 500ms linear;
}
@keyframes enter-scale {
  from {
    opacity: 0;
    /* transform: scale(2); */
  }
  to {
    opacity: 1;
    /* transform: scale(1); */
  }
}
</style>
