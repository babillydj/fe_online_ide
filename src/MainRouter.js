import { createRouter, createWebHistory } from "vue-router";

import initial from "@/router/initial";

// const notFound = [
//   {
//     path: "*",
//     redirect: "/",
//   },
// ];

const routes = [
  ...initial,
  // ...notFound,
];

const mainrouter = createRouter({
  history: createWebHistory(),
  routes,
});

export default mainrouter;
