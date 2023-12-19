import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  components: [
    {
      path: join(currentDir, './components'),
      // this is required else Nuxt will autoImport `.ts` file
      extensions: ['.vue'],
      // prefix for your components, eg: SvCalendar
      // prefix: 'Sv',
      // prevent adding another prefix component by it's path.
      pathPrefix: false,
    },
  ],
})
