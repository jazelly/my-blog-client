const { createApp } = require('vue');
const VueRouter = require('vue-router');

import App from './App';
import HomePage from './views/HomePage';

const routes = [
  { path: '/', component: HomePage },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(HomePage);

app.mount('#app');
