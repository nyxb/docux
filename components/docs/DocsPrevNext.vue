<script setup lang="ts">
const { prev, next, navigation } = useContent()

function findNavItem (children: any, path: string, parent: any) {
  for (const child of children) {
    if (child._path === path) {
      return {
        directoryTitle: parent.title,
        directoryIcon: parent.icon
      }
    }
    if (child.children) {
      const result: any = findNavItem(child.children, path, child)
      if (result) {
        return result
      }
    }
  }
  return undefined
}

function getNavItemMeta (path: string) {
  let result
  for (const item of navigation.value) {
    if (item.children) {
      const found = findNavItem(item.children, path, item)
      if (found) {
        result = found
      }
    }
  }
  return result
}

const prevMeta = computed(() => {
  if (prev.value?._path) {
    return getNavItemMeta(prev.value._path)
  }
  return undefined
})

const nextMeta = computed(() => {
  if (next.value?._path) {
    return getNavItemMeta(next.value._path)
  }
  return undefined
})
</script>

<template>
  <div
    v-if="prev || next"
    class="docs-prev-next"
  >
    <NuxtLink
      v-if="prev && prev._path"
      :to="prev._path"
      class="prev"
    >
      <Icon v-if="prev.icon || prevMeta?.directoryIcon" :name="prev.icon || prevMeta?.directoryIcon" />
      <span v-if="prevMeta" class="directory">
        {{ prevMeta?.directoryTitle }}
      </span>
      <span class="title">{{ prev.title }}</span>
      <span class="description">{{ prev.description }}</span>
    </NuxtLink>

    <NuxtLink
      v-if="next && next._path"
      :to="next._path"
      class="next"
    >
      <Icon v-if="next.icon || nextMeta?.directoryIcon" :name="next.icon || nextMeta?.directoryIcon" />
      <span v-if="nextMeta" class="directory">
        {{ nextMeta?.directoryTitle }}
      </span>
      <span class="title">{{ next.title }}</span>
      <span class="description">{{ next.description }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped lang="ts">
css({
  '.docs-prev-next': {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    gap: '{docux.docs.prevNext.gap}',
    '@sm': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    a: {
      position: 'relative',
      padding: '{docux.docs.prevNext.padding}',
      borderWidth: '{docux.docs.prevNext.borderWidth}',
      borderStyle: '{docux.docs.prevNext.borderStyle}',
      borderColor: '{docux.docs.prevNext.borderColor}',
      borderRadius: '{docux.docs.prevNext.borderRadius}',
      backgroundColor: '{docux.docs.prevNext.backgroundColor}',
      boxShadow: '{docux.docs.prevNext.boxShadow.static}',
      '&:hover': {
        boxShadow: '{docux.docs.prevNext.boxShadow.hover}',
      },
      '&:hover .title': {
        color: '{docux.docs.prevNext.title.color.hover}',
      },
      '&.prev': {
        display: 'flex',
        flexDirection: 'column',
      },
      '&.next': {
        display: 'flex',
        flexDirection: 'column',
        '@sm': {
          gridColumnStart: '2',
        },
      },
      '.directory': {
        display: 'block',
        marginBottom: '{docux.docs.prevNext.directory.marginBottom}',
        fontSize: '{docux.docs.prevNext.directory.fontSize}',
        lineHeight: '{docux.docs.prevNext.directory.lineHeight}',
        fontWeight: '{docux.docs.prevNext.directory.fontWeight}',
        color: '{docux.docs.prevNext.directory.color}',
      },
      '.icon': {
        width: '{docux.docs.prevNext.icon.size}',
        height: '{docux.docs.prevNext.icon.size}',
        marginBottom: '{docux.docs.prevNext.icon.marginBottom}',
      },
      '.title': {
        fontWeight: '{docux.docs.prevNext.title.fontWeight}',
        marginBottom: '{docux.docs.prevNext.title.marginBottom}',
      },
      '.description': {
        fontSize: '{docux.docs.prevNext.description.fontSize}',
        lineHeight: '{docux.docs.prevNext.description.lineHeight}',
        color: '{docux.docs.prevNext.description.color}',
        lineClamp: 3
      }
    }
  }
})
</style>
