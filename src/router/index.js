import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import Partners from "../views/partners/index.vue";




Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },{
    path: "/partners",
    name: "Partners",
    component: Partners,
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
