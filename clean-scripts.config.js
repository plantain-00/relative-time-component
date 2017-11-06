const { Service, execAsync } = require('clean-scripts')

const tsFiles = `"src/**/*.ts" "src/**/*.tsx" "spec/**/*.ts" "demo/**/*.ts" "demo/**/*.tsx" "screenshots/**/*.ts"`
const jsFiles = `"*.config.js" "demo/*.config.js" "spec/**/*.config.js"`

const vueTemplateCommand = `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`
const angularTemplateCommand = `file2variable-cli src/angular.template.html -o src/angular-variables.ts --html-minify --base src`
const ngcSrcCommand = [
  `tsc -p src`,
  `ngc -p src/tsconfig.aot.json`
]
const tscDemoCommand = `tsc -p demo`
const webpackCommand = `webpack --display-modules --config demo/webpack.config.js`
const revStaticCommand = `rev-static --config demo/rev-static.config.js`

module.exports = {
  build: [
    `rimraf dist/`,
    `mkdirp dist/`,
    {
      js: [
        vueTemplateCommand,
        angularTemplateCommand,
        ngcSrcCommand,
        tscDemoCommand,
        webpackCommand
      ],
      css: `cleancss -o demo/index.bundle.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`,
      clean: `rimraf demo/**/index.bundle-*.js demo/*.bundle-*.css demo/**/*.index.bundle-*.js`
    },
    revStaticCommand
  ],
  lint: {
    ts: `tslint ${tsFiles}`,
    js: `standard ${jsFiles}`,
    export: `no-unused-export ${tsFiles} --exclude "src/compiled/**/*"`
  },
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js',
    async () => {
      const { stdout } = await execAsync('git status -s')
      if (stdout) {
        console.log(stdout)
        throw new Error(`generated files doesn't match.`)
      }
    }
  ],
  fix: {
    ts: `tslint --fix ${tsFiles}`,
    js: `standard --fix ${jsFiles}`
  },
  release: `clean-release`,
  watch: {
    vue: `${vueTemplateCommand} --watch`,
    angular: `${angularTemplateCommand} --watch`,
    src: `${ngcSrcCommand} --watch`,
    demo: `${tscDemoCommand} --watch`,
    webpack: `${webpackCommand} --watch`,
    rev: `${revStaticCommand} --watch`
  },
  screenshot: [
    new Service(`http-server -p 8000`),
    `tsc -p screenshots`,
    `node screenshots/index.js`
  ]
}
