import { ConfigData } from 'file2variable-cli'

export default {
  base: 'packages/vue/src/',
  files: [
    'packages/vue/src/*.template.html'
  ],
  handler: file => {
    if (file.endsWith('index.template.html')) {
      return {
        type: 'vue',
        name: 'RelativeTime',
        path: './index'
      }
    }
    return { type: 'text' }
  },
  out: 'packages/vue/src/variables.ts'
} as ConfigData
