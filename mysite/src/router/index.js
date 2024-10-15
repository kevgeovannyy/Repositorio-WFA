import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductosPage from '../views/ProductosPage.vue';
import ContactoPage from '../views/ContactoPage.vue';
import ServiciosPage from '../views/ServiciosPage.vue'; // Importa la nueva vista

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/productos', name: 'Productos', component: ProductosPage },
  { path: '/contacto', name: 'Contacto', component: ContactoPage },
  { path: '/servicios', name: 'Servicios', component: ServiciosPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
