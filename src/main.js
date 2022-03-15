import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createStore } from 'vuex'

// Создадим новый экземпляр хранилища
const store = createStore({
    state () {
      return {
        yname: '',
        yage: '',
        childs: []
      }
    },
    mutations: {
    }
  })

createApp(App).use(router).use(store).mount('#app')
