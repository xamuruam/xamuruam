import Vue from 'vue';
import Router from 'vue-router';
import vHome from '../components/v-home.vue';
import vCatalog from '../components/catalog/v-catalog.vue';
import vCart from '../components/cart/v-cart.vue';
import vAbout from '../components/v-about.vue';
import vContact from '../components/v-contact.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: vHome
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: vCatalog,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: vCart,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: vAbout
    },
    {
      path: '/contact',
      name: 'contact',
      component: vContact
    }
  ]
});

export default router;
