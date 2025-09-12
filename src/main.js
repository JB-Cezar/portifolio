import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router/router'
import ptBr from './locales/pt-br.json'
import en from './locales/en.json'

const laguages = createI18n({
    locale: 'pt-BR',
    messages: {
        'pt-BR': ptBr,
        'en': en
    }
})

const app = createApp(App);
app.use(router);
app.use(laguages);
app.mount("#app");