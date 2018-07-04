import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/pages/center/login'

import register from '@/components/pages/center/register'
import register_check from '@/components/pages/center/register_check'
import register_check_result from '@/components/pages/center/register_check_result'

import reset_password from '@/components/pages/center/reset_password'

import unfinish from '@/components/pages/unfinish'
import finish from '@/components/pages/finish'
import count from '@/components/pages/count'
import center from '@/components/pages/center'

import all_order from '@/components/pages/center/all_order'

import star from '@/components/pages/center/star'

import account from '@/components/pages/center/account'

import balance_detail from '@/components/pages/center/balance_detail'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta:{
        title:'登陆'
      },
    },
    {path: '/center/register',name: 'register',component: register},
    {path: '/center/register_check',name: 'register_check',component: register_check},
    {path: '/center/register_check_result',name: 'register_check_result',component: register_check_result},
    {path: '/center/reset_password',name: 'reset_password',component: reset_password},
    {path: '/unfinish',name: 'unfinish',component: unfinish},
    {path: '/finish',name: 'finish',component: finish},
    {path: '/count',name: 'count',component: count},
    {path: '/center',name: 'center',component: center},
    {path: '/center/all_order',name: 'all_order',component: all_order},
    {path: '/center/star',name: 'star',component: star},
    {path: '/center/account',name: 'account',component: account},
    {path: '/center/balance_detail',name: 'balance_detail',component: balance_detail},
  ],
});



