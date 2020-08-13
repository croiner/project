import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'
import WorkProgress from '../views/WorkProgress.vue'
import Admin from '../views/Admin'
import Login from '../views/Login'
import User from '../views/User'
import Manager from '../views/Manager'
import Calendar from '../views/Calendar'
import Chart from '../views/Chart'
Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects,
    },
    {
        path: '/team',
        name: 'team ',
        component: Team,
    },
    {
        path:'/workprogress',
        name:'/workprogress',
        component:WorkProgress,
    },
    {
        path:'/admin',
        name:'/admin',
        component:Admin,
    },
    {
        path:'/Login',
        name:'/Login',
        component:Login,
    },
    {
        path:'/user',
        name:'/user',
        component:User,
    },
    {   path:'/manager',
        name:'/manager',
        component:Manager,
    },
     {   path:'/calendar',
        name:'/calendar',
        component:Calendar,
    },
    {
        path:'/chart',
        name:'/chart',
        component:Chart,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router