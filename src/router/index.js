import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Gallery from '@/components/Gallery'
import Game from '@/components/Game'
import Posters from '@/components/Posters'
// import Data from '@/Data'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/game-of-life',
    	name: 'Game',
    	component: Game
    },
    {
    	path: '/posters',
    	name: 'Posters',
    	component: Posters
    },
    {
      path: '/:item/:id?',
      name: 'Gallery',
      component: Gallery
	  }
  ]
})
