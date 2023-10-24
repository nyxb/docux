<script setup lang="ts">
defineProps({
  subtitle: {
    type: String,
    default: 'Section subtitle'
  },
  subtitleColor: {
    type: String,
    default: '{color.primary.500}'
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="section-header">
    <span v-if="subtitle || $slots.subtitle" class="section-header-subtitle">
      <ContentSlot :use="$slots.subtitle" unwrap="p">
        {{ subtitle }}
      </ContentSlot>
    </span>

    <h2 v-if="title || $slots.title" class="section-header-title">
      <ContentSlot :use="$slots.title" unwrap="p">
        {{ title }}
      </ContentSlot>
    </h2>

    <p v-if="description || $slots.description" class="section-header-description">
      <ContentSlot :use="$slots.description" unwrap="p">
        {{ description }}
      </ContentSlot>
    </p>
  </div>
</template>

<style scoped lang="ts">
css({
  '.section-header': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: '{docux.landing.sectionHeader.alignItems}',
    marginBottom: '{docux.landing.sectionHeader.marginBottom}',
  },

  '.section-header-subtitle': {
    '--subtitleColor': (props) => props.subtitleColor,
    display: 'block',
    fontSize: '{docux.landing.sectionHeader.subtitle.fontSize}',
    lineHeight: '{docux.landing.sectionHeader.subtitle.lineHeight}',
    fontWeight: '{docux.landing.sectionHeader.subtitle.fontWeight}',
    color: 'var(--subtitleColor)',
    marginBottom: '{docux.landing.sectionHeader.subtitle.marginBottom}',
    letterSpacing: '{docux.landing.sectionHeader.subtitle.letterSpacing}',
  },

  '.section-header-title': {
    marginBottom: '{docux.landing.sectionHeader.title.marginBottom}',
    fontSize: '{docux.landing.sectionHeader.title.fontSize}',
    lineHeight: '{docux.landing.sectionHeader.title.lineHeight}',
    fontWeight: '{docux.landing.sectionHeader.title.fontWeight}',
    letterSpacing: '{docux.landing.sectionHeader.title.letterSpacing}',
    color: '{docux.landing.sectionHeader.title.color}',
  },

  '.section-header-description': {
    color: '{docux.landing.sectionHeader.description.color}',
  }
})
</style>
