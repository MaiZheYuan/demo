import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home/Home.vue";
import Find from "./views/Home/Find.vue";
import Map from "./views/Home/Map.vue";
import Else from "./views/Home/Else.vue";
import Chat from "./views/Home/Chat.vue";

Vue.use(Router);
export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/Find",
    children: [
      {
        path: "/Find",
        name: "Find",
        component: Find,
        children: []
      },
      {
        path: "/Map",
        name: "Map",
        component: Map,
        children: []
      },
      {
        path: "/Else",
        name: "Else",
        component: Else,
        children: []
      },
      {
        path: "/Chat",
        name: "Chat",
        component: Chat,
        children: []
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "./views/About.vue")
  // }
];
export default new Router({
  routes: routes
});
