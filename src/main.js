// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "lib-flexible/flexible";
import fastClick from 'fastclick'
fastClick.attach(document.body);
Vue.config.productionTip = false;
import "css/reset.styl"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
      eventHub: new Vue()
  },
  components: { App },
  template: '<App/>'
})
