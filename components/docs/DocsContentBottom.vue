<script setup lang="ts">
const { page } = useContent()
const { config } = useDocux()
</script>

<template>
  <div
    v-if="page"
    class="docs-page-bottom"
  >
    <div
      v-if="config?.github?.edit"
      class="edit-link"
    >
      <Icon name="uil:edit" />
      <DocsEditOn
        v-slot="{ url }"
        :page="page"
      >
        <ProseA :to="url">
          <span>
            Edit this page on GitHub
          </span>
        </ProseA>
      </DocsEditOn>
    </div>

    <!-- Need to be supported by @nuxt/content -->
    <span v-if="page?.mtime">Updated on <b>{{ new Intl.DateTimeFormat('en-US').format(Date.parse(page.mtime)) }}</b></span>
  </div>
</template>

<style scoped lang="ts">
css({
  '.docs-page-bottom': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: '{space.4}',
    marginTop: '{space.8}',
    fontSize: '{text.sm.fontSize}',
    lineHeight: '{text.sm.lineHeight}',
    color: '{elements.text.secondary.color.static}',
    '.edit-link': {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: '{space.2}'
    }
  }
})
</style>
