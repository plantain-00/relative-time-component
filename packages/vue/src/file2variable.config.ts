import { Configuration } from 'file2variable-cli'

const config: Configuration = {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  handler: file => {
    if (file.endsWith('index.template.html')) {
      return {
        type: 'vue3',
      }
    }
    return { type: 'text' }
  },
  out: 'packages/vue/src/variables.ts'
}

export default config
