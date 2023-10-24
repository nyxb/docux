import { createResolver, defineNuxtModule, logger } from '@nuxt/kit'
import { $fetch } from 'ofetch'
import { version } from './package.json'

const { resolve } = createResolver(import.meta.url)

// That allows to overwrite these dependencies paths via `.env` for local development
const envModules = {
   tokens: process?.env?.THEME_DEV_TOKENS_PATH || '@nuxt-themes/tokens',
   elements: process?.env?.THEME_DEV_ELEMENTS_PATH || '@nuxt-themes/elements',
   studio: process?.env?.THEME_DEV_STUDIO_PATH || '@nuxthq/studio',
   typography: process?.env?.THEME_DEV_TYPOGRAPHY_PATH || '@nuxt-themes/typography',
}

const updateModule = defineNuxtModule({
   meta: {
      name: 'docux',
   },
   setup(_, nuxt) {
      if (nuxt.options.dev) {
         $fetch('https://registry.npmjs.org/@nyxb/docux/latest').then((release) => {
            if (release.version > version)
               logger.info(`A new version of Docux (v${release.version}) is available: https://github.com/nyxb/docux/releases/latest`)
         }).catch(() => {})
      }
   },
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   app: {
      head: {
         htmlAttrs: {
            lang: 'en',
         },
      },
   },
   extends: [
      envModules.typography,
      envModules.elements,
   ],
   modules: [
      envModules.tokens,
      envModules.studio,
      '@nuxtjs/color-mode',
      '@nuxt/content',
      '@vueuse/nuxt',
      'nuxt-config-schema',
      resolve('./app/module'),
      updateModule as any,
   ],
   css: [
      resolve('./assets/css/main.css'),
   ],
   components: [
      {
         prefix: '',
         path: resolve('./components/layout'),
         global: true,
      },
      {
         prefix: '',
         path: resolve('./components/content'),
         global: true,
      },
      {
         prefix: '',
         path: resolve('./components/app'),
         global: true,
      },
      {
         prefix: '',
         path: resolve('./components/docs'),
         global: true,
      },
      {
         prefix: '',
         path: resolve('./components/landing'),
         global: true,
      },
   ],
   pinceau: {
      studio: true,
   },
   content: {
      documentDriven: true,
      highlight: {
         theme: {
            dark: 'github-dark',
            default: 'github-light',
         },
         preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini'],
      },
      navigation: {
         fields: ['icon', 'titleTemplate', 'header', 'main', 'aside', 'footer'],
      },
   },
   colorMode: {
      classSuffix: '',
      dataValue: 'theme',
      preference: 'dark',
   },
   typescript: {
      includeWorkspace: true,
   },
})
