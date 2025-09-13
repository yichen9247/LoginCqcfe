import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'

import router from './router'
import LoginCqcfe from './LoginCqcfe.vue'

const application = createApp(LoginCqcfe);

application.use(router);
application.use(createPinia());

application.mount('#application');
