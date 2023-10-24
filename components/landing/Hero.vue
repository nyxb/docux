<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'

const heroRef = ref(null) as Ref<HTMLElement | null>
const { height } = useElementBounding(heroRef)

watch(height, (value) => {
  document.documentElement.style.setProperty('--hero-height', `${value}px`)
})

</script>

<template>
  <div ref="heroRef" class="hero">
    <span v-if="$slots.root" class="root">
      <slot name="root" />
    </span>
    <div class="layout">
      <div class="content">
        <p v-if="$slots.announce" class="announce">
          <ContentSlot :use="$slots.announce" unwrap="p" />
        </p>

        <h1 class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            Hero Title
          </ContentSlot>
        </h1>

        <p class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
            Hero default description.
          </ContentSlot>
        </p>

        <div v-if="$slots.extra" class="extra">
          <ContentSlot :use="$slots.extra" unwrap="p" />
        </div>

        <div v-if="$slots.actions" class="actions">
          <ContentSlot :use="$slots.actions" unwrap="p" />
        </div>
      </div>

      <div class="support">
        <slot name="support" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.hero': {
    position: 'relative',
    padding: '{docux.landing.hero.padding}',
    width: '100%',

    '.layout': {
      position: 'relative',
      display: 'grid',
      gap: '{docux.landing.hero.layout.gap}',
      gridTemplateColumns: '{docux.landing.hero.layout.gridTemplateColumns}',
    },

    '.content': {
      gridColumn: '{docux.landing.hero.content.gridColumn}',
      display: 'flex',
      flexDirection: 'column',
      alignItems: '{docux.landing.hero.content.alignItems}',

      '.announce': {
        marginBottom: '{docux.landing.hero.content.announce.marginBottom}',
      },

      '.title': {
        color: '{docux.landing.hero.content.title.color}',
        fontWeight: '{docux.landing.hero.content.title.fontWeight}',
        letterSpacing: '{docux.landing.hero.content.title.letterSpacing}',
        textAlign: '{docux.landing.hero.content.title.textAlign}',
        fontSize: '{docux.landing.hero.content.title.fontSize}',
        lineHeight: '{docux.landing.hero.content.title.lineHeight}',
        marginBottom: '{docux.landing.hero.content.title.marginBottom}',
        px: '{docux.landing.hero.content.title.paddingX}',
        gradientText: '{docux.landing.hero.content.title.gradientText}',
        mixBlendMode: '{docux.landing.hero.content.title.mixBlendMode}'
      },

      '.description': {
        marginBottom: '{docux.landing.hero.content.description.marginBottom}',
        fontSize: '{docux.landing.hero.content.description.fontSize}',
        lineHeight: '{docux.landing.hero.content.description.lineHeight}',
        textAlign: '{docux.landing.hero.content.description.textAlign}',
        color: '{docux.landing.hero.content.description.color}',
        px: '{docux.landing.hero.content.description.paddingX}',
        mixBlendMode: '{docux.landing.hero.content.description.mixBlendMode}',
      },

      '.extra': {
        marginBottom: '{docux.landing.hero.content.extra.marginBottom}',
        display: 'flex',
        justifyContent: '{docux.landing.hero.content.extra.justifyContent}',
      },

      '.actions': {
        display: 'flex',
        flexDirection: '{docux.landing.hero.content.actions.flexDirection}',
        alignItems: 'center',
        justifyContent: '{docux.landing.hero.content.actions.justifyContent}',
        gap: '{docux.landing.hero.content.actions.gap}',
      }
    },

    '.support': {
      gridColumn: '{docux.landing.hero.support.gridColumn}',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
  }
})
</style>
