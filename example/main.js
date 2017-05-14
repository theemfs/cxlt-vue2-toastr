import Vue from 'vue'
import App from './App.vue'

import { install as CxltToastr } from '../src'

// var toastrConfigs = {
//     position: 'top right',
//     showDuration: 2000
// }
Vue.use(CxltToastr, {
    position: 'top right'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
