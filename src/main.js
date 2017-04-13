import Vue from 'vue'
import App from './App'
import CxltToastr from './toastr'

Vue.use(CxltToastr)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
