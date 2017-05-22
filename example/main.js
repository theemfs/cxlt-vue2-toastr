import Vue from 'vue'
import App from './App.vue'

import { install as CxltToastr } from '../src'

Vue.use(CxltToastr, {
    position: 'top right',
    timeOut: '5000'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
