const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portifolio/'   // 👈 aqui tem que ser exatamente o nome do repositório no GitHub
    : '/'
})
