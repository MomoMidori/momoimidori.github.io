import { createApp } from 'vue'
import 'bocchi/src/style.css'
import App from 'bocchi/src/App.vue'
import router from 'bocchi/src/router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
