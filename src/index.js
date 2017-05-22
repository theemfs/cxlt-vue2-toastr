import Toastr from './Toastr'

const install = function (Vue, options) {
    if (install.installed) return

    Vue.prototype.$toast = {
        success(obj) {
            const ToastrComponent = Vue.extend(Toastr)
            var propsData = Object.assign({}, obj)
            return new ToastrComponent({
                el: document.createElement('div'),
                propsData
            })
        },
        info() {

        },
        warn() {

        },
        error() {

        }
    }

    console.log(options)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    install
}
