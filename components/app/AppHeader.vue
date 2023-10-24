<script setup lang="ts">
const { config } = useDocux()
const { navigation } = useContent()
const { hasDocSearch } = useDocSearch()
const { y } = useWindowScroll()
const route = useRoute()

const hasDrawer = computed(() => navigation.value?.length > 1 || navigation.value?.[0]?.children?.length)

const isBasicLayout = computed(() => route.meta.layout === 'basic')
</script>

<template>
  <header :class="{ 'has-drawer': hasDrawer, 'has-doc-search': hasDocSearch, 'is-basic-layout': isBasicLayout, 'on-top': y === 0 }">
    <Container>
      <div class="header-layout">
        <div class="section left">
          <AppHeaderDrawer v-if="hasDrawer" />
          <AppHeaderLogo />
        </div>

        <div class="section center">
          <AppHeaderLogo />
          <AppNavigation v-if="config.header.navigation" />
        </div>

        <div class="section right">
          <AppSearch v-if="hasDocSearch" />
          <AppTextDirection />
          <AppColorMode />
          <div class="social-icons">
            <AppSocialIcons />
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped lang="ts">
css({
  ':deep(.icon)': {
    width: '{docux.app.header.icon.size}',
    height: '{docux.app.header.icon.size}'
  },

  '.header-logo': {
    '.left &': {
      '.has-drawer &': {
        display: 'none',
        '@lg': {
          display: 'block'
        }
      },
    },

    '.center &': {
      display: 'none',
      '.has-drawer &': {
        display: 'block',
        '@lg': {
          display: 'none'
        },
      },
    }
  },

  header: {
    backdropFilter: '{docux.app.header.backdropFilter}',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    width: '100%',
    borderBottomWidth: '{docux.app.header.borderBottomWidth}',
    borderBottomStyle: '{docux.app.header.borderBottomStyle}',
    borderBottomColor: '{docux.app.header.borderBottomColor}',
    backgroundColor: '{docux.app.header.backgroundColor}',
    height: '{docux.app.header.height}',

    '&.is-basic-layout.on-top': {
      background: 'transparent',
      borderColor: 'transparent',
      backdropFilter: 'none',
    },

    '.header-layout': {
      display: 'grid',
      height: '100%',
      gridTemplateColumns: '{docux.app.header.layout.gridTemplateColumns}',
      gap: '{docux.app.header.layout.gap}',
    },

    '.section': {
      display: 'flex',
      alignItems: 'center',
      flex: 'none',

      '&.left': {
        gridColumn: '{docux.app.header.layout.left.gridColumn}',
        '@lg': {
          marginInlineStart: 0
        },
      },

      '&.center': {
        gridColumn: '{docux.app.header.layout.center.gridColumn}',
        justifyContent: 'center',
        flex: '1',
        zIndex: '1'
      },

      '&.right': {
        display: 'flex',
        gridColumn: '{docux.app.header.layout.right.gridColumn}',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 'none',
        marginInlineEnd: 'calc(0px - {space.4})',

        '.social-icons': {
          display: 'none',
          '@md': {
            display: 'flex',
            alignItems: 'center',
          }
        }
      }
    }
  }
})
</style>
