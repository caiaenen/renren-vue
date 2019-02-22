import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
// import Source from './views/Source'
import Home from './views/Home'

// import { NOTFOUND } from 'dns';
import source from './components/source/source'
import detail from './components/source/detail'
import join from './components/join/join'
import help from './components/join/help'
import login from './components/login/login'
import article from './components/article/article'
import register from './components/login/register'
import search from './components/search/search'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home, children:[
        { path:"", component: Index },
    {
      path:'source',
      name:'source',
      component:source
      },
      {
        path:'detail/:sourceId',
        name:'detail',
        component:detail
        },
        {
          path:'join',
          name:'join',
          component:join
          },
          {
          path:'login',
          name:'login',
          component:login
          },
          {
            path:'article',
            name:'article',
            component:article
            },
            {
              path:'register',
              name:'register',
              component:register
              },
              {
                path:'help',
                name:'help',
                component:help
                },
                {
                  path:'search',
                  name:'search',
                  component:search
                  },
  ]},
  // {path:'/*',component:NOTFOUND}
]
})

