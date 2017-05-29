<template>
    <transition :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass" @before-enter="beforeEnter" @before-leave="beforeLeave">
        <div class="toast" :class="['toast-'+type]" v-if="show">
            <button class="toast-close-button" role="button" @click="hideToastr" v-if="closeButton">×</button>
            <div class="toast-title">{{title}}</div>
            <div class="toast-message">{{message}}</div>
        </div>
    </transition>
</template>


<script>
export default {
    name: 'CxltToastr',
    data: () => {
        return {
            show: false
        }
    },
    props: {
        type: {
            type: String,
            default: 'success'
        },
        position: {
            type: String,
            default: 'top center'
        },
        title: {
            type: String
        },
        message: {
            type: String
        },
        closeButton: {
            type: Boolean,
            default: true
        },
        timeOut: {
            default: '1500'
        },
        showMethod: {
            type: String,
            default: 'fadeIn'
        },
        hideMethod: {
            type: String,
            default: 'fadeOut'
        },
        showDuration: {
            type: Number,
            default: 1000
        },
        hideDuration: {
            type: Number,
            default: 1000
        },
        delay: {
            type: Number,
            default: 0
        }
    },
    created() {
    },
    beforeMount() {
        let toastContainer = document.querySelector(`.cxlt-toastr-container.toast-${this.positionClass}`)
        if (!toastContainer) {
            toastContainer = document.createElement('div')
            // 分2次添加，是为了兼容IE10
            toastContainer.classList.add('cxlt-toastr-container')
            toastContainer.classList.add(`toast-${this.positionClass}`)
            document.body.appendChild(toastContainer)
        }
        toastContainer.appendChild(this.$el)
    },
    mounted() {
        setTimeout(() => this.showToastr(), this.delay)
    },
    computed: {
        positionClass() {
            return this.position.split(' ').join('-')
        },
        enterActiveClass() {
            return 'animated ' + this.showMethod
        },
        leaveActiveClass() {
            return 'animated ' + this.hideMethod
        }
    },
    methods: {
        showToastr() {
            this.show = true
            this.sto = setTimeout(() => this.hideToastr(), this.timeOut)
        },
        hideToastr() {
            clearTimeout(this.sto)
            this.show = false
        },
        beforeEnter(el) {
            if (this.showDuration) {
                el.style.animationDuration = this.showDuration + 'ms'
            }
        },
        beforeLeave(el) {
            if (this.hideDuration) {
                el.style.animationDuration = this.hideDuration + 'ms'
            }
        }
    }
}

</script>
