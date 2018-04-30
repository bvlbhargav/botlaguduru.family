import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FamilyTree from '@/components/FamilyTree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/familytree',
      name: 'FamilyTree',
      component: FamilyTree
    }
  ]
})
