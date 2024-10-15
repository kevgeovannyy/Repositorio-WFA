import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que el enrutador está correctamente importado

createApp(App).use(router).mount('#app'); // Debe montarse en el div con id "app"
