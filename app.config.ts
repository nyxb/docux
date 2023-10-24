export default defineAppConfig({
   docux: {
      title: 'Docux',

      description: 'The best place to start your documentation.',

      image: 'https://github.com/nyxb/docux/blob/main/.github/images/docux_repo_picture.png',

      socials: {},

      layout: 'default',

      rtl: false,

      header: {
         title: '',
         logo: false,
         showLinkIcon: false,
         exclude: [],
      },

      aside: {
         level: 0,
         collapsed: false,
         collapsible: true,
         exclude: [],
      },

      footer: {
         credits: {
            icon: '',
            text: 'Powered by Docux',
            href: 'https://docux.dev',
         },
         textLinks: [],
         iconLinks: [],
      },

      github: {
         dir: undefined,
         branch: undefined,
         repo: undefined,
         owner: undefined,
         edit: false,
      },
   },
})
