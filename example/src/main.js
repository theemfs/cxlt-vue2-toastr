import Vue from 'vue'
import App from './App.vue'

import CxltToastr from 'cxlt-vue2-toastr'

import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

var toastrConfigs = {
    position: 'top right',
    showDuration: 2000
}
Vue.use(CxltToastr, toastrConfigs)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
