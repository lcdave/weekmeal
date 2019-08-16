import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.$ = require('jquery');
window.JQuery = require('jquery');

require('./styles/globalStyles.scss');

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')