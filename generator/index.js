

module.exports = (api, opts, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'echarts': '^5.1.2'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/charts.js'`)

  api.render({
    './src/plugins/charts.js': './template/src/plugins/charts.js',
    './src/App.vue': './template/src/App.vue'
  })

}
