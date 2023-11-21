[![Docux](https://github.com/nyxb/docux/blob/main/.github/images/docux_repo_picture.png)](https://docux.dev)

## Docux

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![nyxb][nyxb-src]][nyxb-href]
[![Nuxt][nuxt-src]][nuxt-href]
[![Volta][volta-src]][volta-href]

Docux is the fastest way to create document-driven websites with Vue & Markdown.

- [📄 Documentation](https://docux.dev)
- [⚡️ Play on StackBlitz](https://stackblitz.com/github/nyxb/docux-starter)

## Start a project with Docux

To get a local copy of the code, use nyxbi cli:

```
npx nyxbi init -t themes/docux my-app
```

If you want to add Docux to an existing codebase, you can do so with:

- Install the dependency:

```bash
npm install docux
```

- Add it to your extends key in `nuxt.config`:

```ts
defineNuxtConfig({
  extends: 'docux'
})
```

## Features ✨

- **+50 Components** ready to build rich pages
- **Article**, **Docs** and **Blog** layouts
- Start from a `README`, scale to a framework documentation
- Table of contents support
- Configurable design system integration
- Replace, extend, customize any component in a breeze
- Leverages [**@nuxt-themes/typography**](https://github.com/nuxt-themes/typography)
- Used on [Content Documentation](https://content.nuxtjs.org)

## Contributing 🙏

1. Clone this repository
2. Install dependencies using `pnpm install --frozen-lockfile`
3. Run `pnpm run prepare` to generate type stubs.
4. Use `pnpm run dev` to start [docs](./docs) or use `pnpm run play` to start [playground](./playground) in development mode.

## License 📎

[MIT License](./LICENSE)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/docux/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/docux

[npm-downloads-src]: https://img.shields.io/npm/dm/docux.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/docux

[license-src]: https://img.shields.io/github/license/nyxb/docux.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://github.com/nyxb/docux/blob/main/LICENSE

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?&logo=nuxt.js
[nuxt-href]: https://nuxt.com

[volta-src]: https://user-images.githubusercontent.com/904724/209143798-32345f6c-3cf8-4e06-9659-f4ace4a6acde.svg
[volta-href]: https://volta.net/nyxb/docux?utm_source=readme_docux

[nyxb-src]: https://nyxb.blog/badges/badge-nyxb.svg
[nyxb-href]: https://nyxb.nexus
