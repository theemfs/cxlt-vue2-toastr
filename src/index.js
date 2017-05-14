// import Toastr from './Toastr'

const install = function (Vue, options) {
    if (install.installed) return

    Vue.prototype.$toast = {
        success() {
            console.log('success')
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
