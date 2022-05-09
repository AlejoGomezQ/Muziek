import Vue from "vue";
import VueRouter from "vue-router";

//Views
import Search from "@/views/Search";
import About from "@/views/About";
import TrackDetail from "@/views/TrackDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/track/:id",
    name: "TrackDetail",
    component: TrackDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
