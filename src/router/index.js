import Vue from 'vue'
import Router from 'vue-router'

// 定义路由
import hello from '../components/hello'

Vue.use(Router)

export default new Router({
  routes: [
	  {
	    path: '/hello',
	    name: 'hello',
	    component: hello
	  },
  ],
})