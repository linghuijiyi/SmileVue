import 'babel-polyfill'
import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import vueg from 'vueg'
import {Button, Row, Col, Swipe, SwipeItem, List, Field, NavBar} from 'vant'
import 'common/stylus/index.styl'
import 'common/stylus/border.css'
import 'vueg/css/transition-min.css'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(List).use(Field).use(NavBar)

Vue.use(VueLazyload, {
    loading: require('./common/image/default.png')
})

const options = {
    duration: '.3',
    shadow: false
}

Vue.use(vueg, router, options)
window.localStorage.flag = 1;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})