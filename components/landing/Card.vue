<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

defineProps({
  icon: {
    type: String,
    default: ''
  },
  col: {
    type: [String, Number, Object],
    default: 1
  },
  row: {
    type: [String, Number, Object],
    default: 1
  },
  noise: {
    type: Boolean,
    default: false
  },
  lights: {
    type: Boolean,
    default: false
  }
})

const cardRef = ref<HTMLElement | null>(null)
const { elementX, elementY } = useMouseInElement(cardRef)

watch([elementX, elementY], () => {
  cardRef.value?.style.setProperty('--x', `${elementX.value}px`)
  cardRef.value?.style.setProperty('--y', `${elementY.value}px`)
})
</script>

<template>
  <div ref="cardRef" class="card" :class="{lights}">
    <div class="wrapper">
      <div v-if="noise" class="noise" />
      <div class="content">
        <ContentSlot :use="$slots.default" unwrap="p" />
        <span v-if="icon" class="icon-wrapper">
          <Icon :name="icon" />
        </span>
        <h3 v-if="$slots.title" class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            Card title
          </ContentSlot>
        </h3>
        <p v-if="$slots.description" class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
            Card description
          </ContentSlot>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.card': {
    '--col': (props) => props.col,
    '--row': (props) => props.row,

    position: 'relative',
    textAlign: 'center',
    gridColumnEnd: 'span {col}',
    gridRowEnd: 'span {row}',
    borderRadius: '{docux.landing.card.borderRadius}',
    padding: '{docux.landing.card.padding}',
    boxShadow: '{docux.landing.card.boxShadow}',
    borderWidth: '{docux.landing.card.borderWidth}',
    borderStyle: '{docux.landing.card.borderStyle}',
    borderColor: '{docux.landing.card.borderColor}',
    backgroundColor: '{docux.landing.card.backgroundColor}',
    backgroundImage: '{docux.landing.card.backgroundImage}',
    backdropFilter: '{docux.landing.card.backdropFilter}',

    '&.lights::before': {
      content: '""',
      position: 'absolute',
      inset: '0',
      backgroundImage: 'radial-gradient(500px at var(--x) var(--y), rgba({temp.color.gray.400}, 0.3), transparent 60%)',
      backgroundSize: 'auto',
      backgroundOrigin: 'padding-box',
      zIndex: '0',
      borderRadius: 'inherit',
      transition: 'background-image 0.2s ease, opacity 0.2s ease',
      willChange: 'background-image, opacity',
    },

    '.wrapper': {
      width: '100%',
      height: '100%',
      borderRadius: '{docux.landing.card.wrapper.borderRadius}',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '{docux.landing.card.wrapper.backgroundColor}',
      backgroundImage: '{docux.landing.card.wrapper.backgroundImage}',

      '.lights &&:after': {
        // backgroundImage: '{docux.landing.card.wrapper.after.backgroundImage}', // TODO bug in tokens with vars
        backgroundImage: 'none',
        backgroundSize: 'auto',
        backgroundOrigin: 'padding-box',
        borderRadius: 'inherit',
        content: '""',
        position: 'absolute',
        inset: '0',
        zIndex: '1',
        transition: 'background-image 0.2s ease, opacity 0.2s ease',
        willChange: 'background-image, opacity',
        '@dark': {
          backgroundImage: 'radial-gradient(500px at var(--x) var(--y), rgba({temp.color.gray.900}, .4) 20%, rgba({temp.color.gray.900}, .4) 100% )'
        }
      }
    },

    '.content': {
      padding: '{docux.landing.card.content.padding}',
      flex: '1',
      position: 'relative',
      zIndex: '2',
    },

    '.icon-wrapper': {
      display: 'inline-block',
      alignSelf: 'flex-start',
      marginBottom: '{docux.landing.card.icon.marginBottom}',
      padding: '{docux.landing.card.icon.padding}',
      borderRadius: '{docux.landing.card.icon.borderRadius}',
      backgroundColor: '{docux.landing.card.icon.backgroundColor}',
      boxShadow: '{docux.landing.card.icon.boxShadow}',
      '.icon': {
        display: 'block',
        width: '{docux.landing.card.icon.width}',
        height: '{docux.landing.card.icon.height}',
      },
    },

    '.title': {
      marginBottom: '{docux.landing.card.title.marginBottom}',
      fontSize: '{docux.landing.card.title.fontSize}',
      lineHeight: '{docux.landing.card.title.lineHeight}',
      fontWeight: '{docux.landing.card.title.fontWeight}',
      letterSpacing: '{docux.landing.card.title.letterSpacing}',
      color: '{docux.landing.card.title.color}'
    },

    '.description': {
      fontSize: '{docux.landing.card.description.fontSize}',
      lineHeight: '{docux.landing.card.description.lineHeight}',
      fontWeight: '{docux.landing.card.description.fontWeight}',
      color: '{docux.landing.card.description.color}',
    },

    '.noise': {
      position: 'absolute',
      inset: '0',
      filter: 'url(#noise-filter)',
      background: '{docux.body.backgroundColor}',
      opacity: '{docux.landing.card.noise.opacity}',
      zIndex: '-1',
    }
  }
})
</style>
