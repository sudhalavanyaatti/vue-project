import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Skills from "@/components/Skills";
import Menubar from "@/components/Menubar";
import OrderForm from "@/components/OrderForm";
import Article from "@/components/Article";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/skills",
      name: "/skills",
      component: Skills
    },
    {
      path: "/menubar",
      name: "menubar",
      component: Menubar
    },
    {
      path: "/form",
      name: "OrderForm",
      component: OrderForm
    },
    {
      path: "/article",
      name: "Article",
      component: Article
    }
  ]
});
