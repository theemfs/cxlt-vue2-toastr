import Toastr from './Toastr'

const CxltToastr = {
    install: function (Vue) {
        Vue.component(Toastr.name, Toastr)
    }
}

export default CxltToastr
