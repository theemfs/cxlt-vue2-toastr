<template>
    <transition :enter-active-class="enterActiveClass"
                :leave-active-class="leaveActiveClass">
        <div v-if="innerShow"
             id="toast-container"
             :class="['toast-'+positionClass]"
             aria-live="polite"
             role="alert">
            <div class="toast"
                 :class="['toast-'+type]">
                <button class="toast-close-button"
                        role="button"
                        @click="hideToastr">×</button>
                <div class="toast-title">{{title}}</div>
                <div class="toast-message">{{message}}</div>
            </div>
        </div>
    </transition>
</template>


<script>

export default {
    name: 'CxltToastr',
    data: () => {
        return {
            innerShow: false
        }
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String
        },
        message: {
            type: String
        },
        type: {
            type: String,
            default: 'success'
        },
        position: {
            type: String,
            default: 'top center'
        },
        timeOut: {
            type: Number,
            default: 5000
        },
        showMethod: {
            type: String,
            default: 'fadeIn'
        },
        hideMethod: {
            type: String,
            default: 'fadeOut'
        }
    },
    created() {
        this.innerShow = this.show
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
        hideToastr() {
            this.innerShow = false
        }
    },
    sto: null,
    watch: {
        show(newVal) {
            this.innerShow = newVal
        },
        innerShow(newVal) {
            if (newVal) {
                if (this.sto) {
                    clearTimeout(this.sto)
                }
                this.sto = setTimeout(this.hideToastr, this.timeOut)
            }
            this.$emit('show-change', newVal)
        }
    }
}

</script>

<style src="toastr/build/toastr.css"></style>
<style src="animate.css/animate.css"></style>
