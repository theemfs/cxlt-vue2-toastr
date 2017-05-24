import Toastr from './Toastr'
import '@/assets/toastr.css'
import 'animate.css/animate.css'

let install = function (Vue, options) {
    if (install.installed) return

    let showedToastrs = []

    function showToast(obj, type) {
        const ToastrComponent = Vue.extend(Toastr)
        var propsData = Object.assign(options, obj, {
            type: type
        })
        let component = new ToastrComponent({
            el: document.createElement('div'),
            propsData
        })

        showedToastrs.push(component)

        return component
    }

    Vue.prototype.$toast = {
        success(obj) {
            return showToast(obj, 'success')
        },
        info(obj) {
            return showToast(obj, 'info')
        },
        warn(obj) {
            return showToast(obj, 'warning')
        },
        error(obj) {
            return showToast(obj, 'error')
        },
        removeAll() {
            showedToastrs.forEach(c => {
                c.hideToastr()
            })
            showedToastrs = []
        }
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}
