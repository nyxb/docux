<script setup lang="ts">
const { navigation } = useContent()
const { config } = useDocux()
const router = useRouter()

const filtered = computed(() => config.value.aside?.exclude || [])

const links = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path)) { return false }
    return true
  })
})

const show = ref(false)

router.afterEach(() => {
  if (show.value) {
    show.value = false
  }
})
</script>

<template>
  <button
    aria-label="Menu"
    @click="show = !show"
  >
    <Icon
      name="heroicons-outline:menu"
      aria-hidden="”true”"
    />
  </button>

  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <Drawer v-model="show">
    <nav
      class="nav"
      @click.stop
    >
      <div class="drawer-header">
        <button
          aria-label="Menu"
          @click="show = false"
        >
          <Icon
            name="heroicons-outline:x"
            aria-hidden="”true”"
          />
        </button>

        <div class="icons">
          <AppSocialIcons />
        </div>
      </div>

      <DocsNavigation
        :links="links"
        class="links"
      />
    </nav>
  </Drawer>
</template>

<style scoped lang="ts">
css({
  button: {
    position: 'relative',
    zIndex: '{docux.app.header.drawer.button.zIndex}',
    display: 'flex',
    padding: '{docux.app.header.drawer.button.padding}',
    paddingInlineStart: '{docux.app.header.drawer.button.paddingInlineStart}',
    '@lg': {
      display: 'none'
    },
    color: '{docux.app.header.drawer.button.color.static}',
    '&:hover': {
      color: '{docux.app.header.drawer.button.color.hover}',
    },
  },

  // Drawer content
  nav: {
    width: '100%',
    borderRightWidth: '{docux.app.header.drawer.menu.borderRightWidth}',
    borderRightStyle: '{docux.app.header.drawer.menu.borderRightStyle}',
    borderRightColor: '{docux.app.header.drawer.menu.borderRightColor}',
    backgroundColor: '{docux.app.header.drawer.menu.backgroundColor}',

    // Drawer header
    '& .drawer-header': {
      height: '{docux.app.header.drawer.menu.header.height}',
      display: 'flex',
      alignItems: '{docux.app.header.drawer.menu.header.alignItems}',
      justifyContent: '{docux.app.header.drawer.menu.header.justifyContent}',
      borderBottomWidth: '{docux.app.header.drawer.menu.header.borderBottomWidth}',
      borderBottomStyle: '{docux.app.header.drawer.menu.header.borderBottomStyle}',
      borderBottomColor: '{docux.app.header.drawer.menu.header.borderBottomColor}',
      gap: '{docux.app.header.drawer.menu.header.gap}',
      px: '{docux.app.header.drawer.menu.paddingX}',

      '.icons': {
        display: 'flex',
        alignItems: 'center',
        overflow: 'auto',
        ':deep(.icon)': {
          width: '{docux.app.header.drawer.menu.header.icon.size}',
          height: '{docux.app.header.drawer.menu.header.icon.size}'
        }
      }
    },

    '& .links': {
      height: 'calc(100vh - {docux.app.header.height})',
      overflowY: 'auto',
      px: '{docux.app.header.drawer.menu.paddingX}',
      paddingTop: '{docux.app.header.drawer.menu.links.paddingTop}',
    }
  }

})
</style>
