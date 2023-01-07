import Home from "@/views/Home.vue";
import List from "@/views/List.vue";
import Detail from "@/views/Detail.vue";
import Exercise from "@/views/Exercise.vue";

const routes = [
  {
    path: "/",
    component: Home,
    redirect: '/list',
    children: [
      {
        path: "list",
        component: List,
      },
      {
        path: "detail/:id",
        component: Detail,
      },
      {
        path: "exercise",
        component: Exercise,
      },
    ]
  },


];

export default routes;
