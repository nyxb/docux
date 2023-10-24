export default defineAppConfig({
   docux: {
      title: 'Docux',
      description: 'The best place to start your documentation.',
      image: 'https://user-images.githubusercontent.com',
      socials: {
         twitter: 'nuxtstudio',
         github: 'nyxb/docux',
      },
      github: {
         dir: '.starters/default/content',
         branch: 'main',
         repo: 'docux',
         owner: 'nyxb',
         edit: true,
      },
      aside: {
         level: 1,
         collapsed: false,
         exclude: [],
         navigation: true,
      },
      main: {
         padded: true,
      },
      header: {
         title: '',
         logo: true,
         showLinkIcon: true,
         exclude: [],
         navigation: false,
      },
      footer: {
         iconLinks: [
            {
               href: 'https://nuxt.com',
               icon: 'simple-icons:nuxtdotjs',
            },
         ],
      },
   },
})
