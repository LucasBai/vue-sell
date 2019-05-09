import Vue from 'vue'
import App from './App.vue'
import './cube-ui'
import './register'


import 'common/stylus/index.styl'

import VueRouter from 'vue-router'
import routers from './routers'

Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
	mode: 'history',
	routes: routers
})

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
