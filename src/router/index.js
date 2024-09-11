import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/login",
    name: "Login",
    hidden: true,
    meta: {
      title: "登录",
    },
    component: () => import("../views/acount/LoGin.vue"),
  },
  {
    path: "/forget",
    name: "Forget",
    hidden: true,
    meta: {
      title: "忘记密码",
    },
    component: () => import("../views/acount/Forget.vue"),
  },
  {
    path: "/register",
    name: "Register",
    hidden: true,
    meta: {
      title: "重置密码",
    },
    component: () => import("../views/acount/Register.vue"),
  },
  // 首页
  {
    path: "/",
    name: "Index",
    meta: {
      title: "首页",
      icon: "home",
    },
    component: () => import("../views/layout/Index.vue"),
     children:[
      {
      path: "/home",
      name: "Home",
      meta: {
        title: "首页",
        icon: "home",
      },
      component: () => import("../views/home/Index.vue")},
  ]
  },
  //  管理后台
  {
    path: "/adminIndex",
    name: "AdminIndex",
    meta: {
      title: "管理总台",
      icon: "menu",
    },
    component: () => import("../views/layout/Index.vue"),
    children: [
      {
        path: "/role",
        name: "Role",
        meta: {
          title: "角色管理",
          icon: "role",
        },
        component: () => import("../views/admin/Role.vue"),
  },
      {
        path: "/user",
        name: "User",
        meta: {
          title: "用户管理",
          icon: "user",
        },
        component: () => import("../views/admin/User.vue"),
      },
    ],
  },
  //信息管理
  {
    path: "/news",
    name: "News",
    meta: {
      title: "信息管理",
      icon: "imformation",
    },
    component: () => import("../views/layout/Index.vue"),
    children: [
      {
        path: "/role",
        name: "Role",
        meta: {
          title: "角色管理",
          icon: "role",
        },
        component: () => import("../views/admin/Role.vue"),
      },
      {
        path: "/user",
        name: "User",
        meta: {
          title: "用户管理",
          icon: "user",
        },
        component: () => import("../views/admin/User.vue"),
      },
    ],
  },
  //产品管理
  {
    path: "/product",
    name: "Product",
    meta: {
      title: "产品管理",
      icon: "product",
    },
    component: () => import("../views/layout/Index.vue"),
    children: [
      {
        path: "/role",
        name: "Role",
        meta: {
          title: "角色管理",
          icon: "role",
        },
        component: () => import("../views/admin/Role.vue"),
      },
      {
        path: "/user",
        name: "User",
        meta: {
          title: "用户管理",
          icon: "user",
        },
        component: () => import("../views/admin/User.vue"),
      },
    ],
  },
  //会员管理
  {
    path: "/vip",
    name: "Vip",
    meta: {
      title: "会员管理",
      icon: "vip",
    },
    component: () => import("../views/layout/Index.vue"),
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
