import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "@/views/Login";
import HomeMain from "@/components/Home/HomeMain";
import UserManage from "@/views/UserManage";
import ProductManage from "@/views/ProductManage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:{
      name:'Main',
    },
    children:[{
      path:'main',
      name:'Main',
      component: HomeMain,
    },{
      path: 'userManage',
      name: 'UserManage',
      component: UserManage,
    },{
      path: 'productManage',
      name:'ProductManage',
      component: ProductManage
    }],
    meta:{requiredLogin:true},
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {
  if(to.path==='/login') {
    next();
  }
  else {
    if(to.matched.some(item=>item.meta.requiredLogin)&&localStorage.isLogin) {
      next();
    }
    else {
      next({
        name:'Login',
      })
    }
  }
})
export default router
