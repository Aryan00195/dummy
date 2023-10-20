import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import About from "@/views/AboutView.vue"
import Register from "@/views/RegisterView.vue";
import RegisterComponent from "@/views/LoginView.vue";
import View from "@/views/ViewUser.vue"
import ViewData from "@/views/ViewData.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta :{
      requiresAuth:true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta :{
      requiresGuest:true
    }
  },
  {
    path: "/login",
    name: "login",
    component: RegisterComponent,
    meta :{
      requiresGuest:true
    }
  },
  {
    path: "/View",
    name: "View",
    component: View,
    meta :{
      requiresAuth:true
    }
  },
  {
    name: '/ViewData',
    path: '/ViewData/:id',
    component: ViewData,
    meta :{
      requiresAuth:true
    }
  }

];
const router = new VueRouter({
  routes,
});
router.beforeEach((to,from,next) =>{
  const isLoggedIn = parseInt(localStorage.getItem('isLogin') ?? "0");
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!isLoggedIn){
      next ({
        path:'/login',
        query:{ redirect: to.fullPath}
      })
    }
    else{
      next()
    }
  }
    else if (to.matched.some(record => record.meta.requiresGuest)) {
       if(isLoggedIn){
         next({
           path:'/',
         })
      }
      else{
        next()
      }
    }
  else{
    next()
  }
})
export default router;
