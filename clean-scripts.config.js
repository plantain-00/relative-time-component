const childProcess = require('child_process')

module.exports = {
  build: [
    `rimraf dist/`,
    `mkdirp dist/`,
    {
      js: [
        `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
        `file2variable-cli src/angular.template.html -o src/angular-variables.ts --html-minify --base src`,
        `ngc -p src`,
        `tsc -p demo`,
        `webpack --display-modules --config demo/webpack.config.js`
      ],
      css: `cleancss -o demo/index.bundle.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`,
      clean: `rimraf demo/**/index.bundle-*.js demo/*.bundle-*.css demo/**/*.index.bundle-*.js`
    },
    `rev-static --config demo/rev-static.config.js`,
    async () => {
      const { createServer } = require('http-server')
      const puppeteer = require('puppeteer')
      const fs = require('fs')
      const beautify = require('js-beautify').html
      const parse5 = require('parse5')
      const server = createServer()
      server.listen(8000)
      const browser = await puppeteer.launch()
      const page = await browser.newPage()
      await page.emulate({ viewport: { width: 1440, height: 900 }, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36' })
      for (const type of ['vue', 'react', 'angular']) {
        await page.goto(`http://localhost:8000/demo/${type}`)
        await page.waitFor(1000)
        await page.screenshot({ path: `demo/${type}/screenshot.png`, fullPage: true })
        const content = await page.content()
        const document = parse5.parse(content)
        forEach(document, node => {
          if (node.attrs) {
            const attr = node.attrs.find(a => a.name === 'title')
            if (attr) {
              attr.value = '[title]'
            }
          }
        })
        fs.writeFileSync(`demo/${type}/screenshot-src.html`, beautify(parse5.serialize(document)))
      }
      server.close()
      browser.close()
    }
  ],
  lint: {
    ts: `tslint "src/**/*.ts" "src/**/*.tsx" "demo/**/*.ts" "demo/**/*.tsx"`,
    js: `standard "**/*.config.js"`,
    export: `no-unused-export "src/**/*.ts" "src/**/*.tsx" "demo/**/*.ts" "demo/**/*.tsx" --exclude "src/compiled/**/*"`
  },
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js',
    'git checkout demo/vue/screenshot.png',
    'git checkout demo/react/screenshot.png',
    'git checkout demo/angular/screenshot.png',
    () => new Promise((resolve, reject) => {
      childProcess.exec('git status -s', (error, stdout, stderr) => {
        if (error) {
          reject(error)
        } else {
          if (stdout) {
            reject(new Error(`generated files doesn't match.`))
          } else {
            resolve()
          }
        }
      }).stdout.pipe(process.stdout)
    })
  ],
  fix: {
    ts: `tslint --fix "src/**/*.ts" "src/**/*.tsx" "demo/**/*.ts" "demo/**/*.tsx"`,
    js: `standard --fix "**/*.config.js"`
  },
  release: `clean-release`,
  watch: {
    vue: `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src --watch`,
    angular: `file2variable-cli src/angular.template.html -o src/angular-variables.ts --html-minify --base src --watch`,
    src: `tsc -p src --watch`,
    demo: `tsc -p demo --watch`,
    webpack: `webpack --config demo/webpack.config.js --watch`,
    rev: `rev-static --config demo/rev-static.config.js --watch`
  }
}

function forEach (node, callback) {
  callback(node)
  if (node.childNodes) {
    for (const childNode of node.childNodes) {
      forEach(childNode, callback)
    }
  }
}
