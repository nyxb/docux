# Social Icons

A list of social icons links.

Currently supported social websites are: Twitter, Facebook, Instagram, Youtube, GitHub and Medium.

## Configuration

```ts [app.config.ts]
export default defineAppConfig({
   docux: {
      socials: {
         twitter: 'nyxb0',
         github: 'nyxb/docux'
      },
   }
})
```

## Design Tokens

```ts [tokens.config.ts]
import { defineTheme } from 'pinceau'

export default defineTheme({
   docux: {
      app: {
         socialIcons: {
            padding: '{space.4}',
            color: {
               static: '{elements.text.secondary.color.static}',
               hover: '{elements.text.secondary.color.hover}'
            }
         }
      }
   }
})
```
