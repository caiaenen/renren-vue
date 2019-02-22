import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false
// axios.defaults.withCredentials=true
Vue.prototype.axios=axios;

Vue.filter("dateTimeFilter",function(val){
  //1:新创建日期对象 2：获取年月日分秒 3：拼接格式
  var date=new Date(val)
  var y=date.getFullYear();
  var mon=date.getMonth()+1;
  var d=date.getDate()
 
  if(mon<10)mon="0"+mon
  if(d<10)d="0"+d
  return `${y}-${mon}-${d}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
