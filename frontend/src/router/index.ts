import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GameView from "@/views/GameView.vue";
import GameOverView from "@/views/GameOverView.vue";
import GameCompletedView from "@/views/GameCompletedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    ,{
      path: '/jeu',
      name: 'game',
      component: GameView
    },{
      path: '/gameover',
      name: 'gameover',
      component: GameOverView
    },{
      path: '/gamecompleted',
      name: 'gamecompleted',
      component: GameCompletedView
    }
  ]
})

export default router
