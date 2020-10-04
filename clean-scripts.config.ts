const tsFiles = `"packages/@(core|vue|react|react-native)/@(src|demo)/**/*.@(ts|tsx)"`
const excludeTsFiles = `"packages/@(core|vue|react|react-native)/@(src|demo)/**/*.@(d|config).ts"`

const vueTemplateCommand = `file2variable-cli --config packages/vue/src/file2variable.config.ts`

const tscCoreSrcCommand = `tsc -p packages/core/src`
const tscVueSrcCommand = `tsc -p packages/vue/src`
const tscReactSrcCommand = `tsc -p packages/react/src`
const tscReactNativeSrcCommand = `tsc -p packages/react-native/src`

const webpackVueCommand = `webpack --config packages/vue/demo/webpack.config.ts`
const webpackReactCommand = `webpack --config packages/react/demo/webpack.config.ts`

const revStaticCommand = `rev-static`
const cssCommand = `cleancss ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css -o packages/core/demo/index.bundle.css`

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  build: [
    {
      js: [
        tscCoreSrcCommand,
        {
          vue: [
            vueTemplateCommand,
            tscVueSrcCommand,
            isDev ? undefined : `rollup --config packages/vue/src/rollup.config.js`,
            webpackVueCommand
          ],
          react: [
            tscReactSrcCommand,
            isDev ? undefined : `rollup --config packages/react/src/rollup.config.js`,
            webpackReactCommand
          ],
          reactNative: tscReactNativeSrcCommand
        }
      ],
      css: cssCommand,
      clean: `rimraf "packages/@(core|vue|react)/demo/**/@(*.bundle-*.js|*.bundle-*.css)"`
    },
    revStaticCommand
  ],
  lint: {
    ts: `eslint --ext .js,.ts ${tsFiles}`,
    export: `no-unused-export ${tsFiles} --exclude ${excludeTsFiles}`,
    markdown: `markdownlint README.md`,
    typeCoverage: {
      core: 'cd packages/core && type-coverage -p src --strict',
      vue: 'cd packages/vue && type-coverage -p src --strict --ignore-files "src/variables.ts"',
      react: 'cd packages/react && type-coverage -p src --strict'
    }
  },
  test: [],
  fix: `eslint --ext .js,.ts ${tsFiles} --fix`,
  watch: {
    vueTemplateCommand: `${vueTemplateCommand} --watch`,
    tscCoreSrcCommand: `${tscCoreSrcCommand} --watch`,
    tscVueSrcCommand: `${tscVueSrcCommand} --watch`,
    tscReactSrcCommand: `${tscReactSrcCommand} --watch`,
    tscReactNativeSrcCommand: `${tscReactNativeSrcCommand} --watch`,
    webpackVueCommand: `${webpackVueCommand} --watch`,
    webpackReactCommand: `${webpackReactCommand} --watch`,
    rev: `${revStaticCommand} --watch`
  }
}
