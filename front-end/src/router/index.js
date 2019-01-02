import Vue from 'vue'
import Router from 'vue-router'
import sections from '@/components/sections'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sections',
      component: sections
    }
  ]
})
