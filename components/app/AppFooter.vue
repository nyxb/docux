<script setup lang="ts">
const { config } = useDocux()
const route = useRoute()
const socialIcons = ref(null)
const icons = computed(() => config.value?.footer?.iconLinks || [])
const textLinks = computed(() => config.value?.footer?.textLinks || [])
const socialIconsCount = computed(() => Object.entries(config.value?.socials || {}).filter(([, v]) => v).length)
const nbSocialIcons = computed(() => (socialIcons.value ? socialIconsCount.value : 0))
</script>

<template>
  <footer>
    <Container
      padded
      class="footer-layout"
    >
      <!-- Left -->
      <div class="left">
        <a
          v-if="config?.footer?.credits"
          :href="config?.footer?.credits?.href || '#'"
          rel="noopener"
          target="_blank"
          class="footer-credits"
        >
          <Component
            :is="config?.footer?.credits?.icon"
            v-if="config?.footer?.credits?.icon"
            class="credits-icon"
          />
          <p v-if="config?.footer?.credits?.text">{{ config.footer.credits.text }}</p>
        </a>
      </div>

      <!-- Center -->
      <div class="center">
        <NuxtLink
          v-for="link in textLinks"
          :key="link.href"
          class="text-link"
          :aria-label="link.text"
          :href="link.href"
          :target="link?.target || '_self'"
          :rel="link?.rel || 'noopener noreferrer'"
        >
          {{ link.text }}
        </NuxtLink>
      </div>

      <!-- Right -->
      <div class="right">
        <a
          v-for="icon in icons.slice(0, 6 - nbSocialIcons)"
          :key="icon.label"
          class="icon-link"
          :aria-label="icon.label"
          :href="icon.href"
          target="_blank"
          :rel="icon?.rel || 'noopener noreferrer'"
        >
          <Icon :name="icon.icon" />
        </a>
        <AppSocialIcons ref="socialIcons" />
      </div>
    </Container>
  </footer>
</template>

<style lang="ts" scoped>
css({
  footer: {
    display: 'flex',
    minHeight: '{docux.app.footer.height}',
    borderTopWidth: '{docux.app.footer.borderTopWidth}',
    borderTopStyle: '{docux.app.footer.borderTopStyle}',
    borderTopColor: '{docux.app.footer.borderTopColor}',
    padding: '{docux.app.footer.padding}',

    '.footer-layout': {
      display: 'grid',
      gridTemplateColumns: '{docux.app.footer.layout.gridTemplateColumns}',
      justifyItems: '{docux.app.footer.layout.justifyItems}',
      gap: '{docux.app.footer.layout.gap}',

      ':deep(.icon)': {
        width: '{docux.app.footer.icon.size}',
        height: '{docux.app.footer.icon.size}'
      },

      a: {
        color: '{elements.text.secondary.color.static}',
        '&:hover': {
          color: '{elements.text.secondary.color.hover}'
        },
      },

      '.left': {
        gridColumn: '{docux.app.footer.layout.left.gridColumn}',
        display: 'flex',
        py: '{docux.app.footer.layout.left.paddingY}',
        order: '{docux.app.footer.layout.left.order}',

        '.footer-credits': {
          display: 'flex',
          alignItems: 'center',
          p: {
            fontSize: '{docux.app.footer.credits.fontSize}',
            lineHeight: '{docux.app.footer.credits.lineHeight}',
            fontWeight: '{docux.app.footer.credits.fontWeight}'
          },
          '.credits-icon': {
            flexShrink: 0,
            width: '{docux.app.footer.credits.icon.size}',
            height: '{docux.app.footer.credits.icon.size}',
            color: '{docux.app.footer.credits.icon.color}',
            marginInlineEnd: '{docux.app.footer.credits.icon.marginInlineEnd}',
          },
        },

      },

      '.center': {
        gridColumn: '{docux.app.footer.layout.center.gridColumn}',
        display: 'flex',
        flexDirection: '{docux.app.footer.layout.center.flexDirection}',
        alignItems: '{docux.app.footer.layout.center.alignItems}',
        justifyContent: '{docux.app.footer.layout.center.justifyContent}',

        '.text-link': {
          padding: '{docux.app.footer.textLink.padding}',
          fontSize: '{docux.app.footer.textLink.fontSize}',
          lineHeight: '{docux.app.footer.textLink.lineHeight}',
          fontWeight: '{docux.app.footer.textLink.fontWeight}'
        }

      },

      '.right': {
        gridColumn: '{docux.app.footer.layout.right.gridColumn}',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginInlineEnd: '{docux.app.footer.layout.right.marginInlineEnd}',

        '.icon-link': {
          display: 'flex',
          padding: '{docux.app.footer.iconLink.padding}',
        }
      },
    },
  }
})
</style>
