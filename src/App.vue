<template>
    <div>
        <cxlt-toastr :show="show"
                     :toastr="toastr"
                     @show-change="showChange"></cxlt-toastr>
        <button @click="switchShow">click me</button>
    </div>
</template>

<script>

export default {
    name: 'App',
    data: () => {
        return {
            show: false,
            toastr: {
                title: '成功提示',
                message: '保存角色成功',
                position: 'top left'
            }
        }
    },
    methods: {
        switchShow() {
            this.show = !this.show
        },
        showChange(show) {
            if (this.show !== show) {
                this.show = show
            }
        }
    }
}

</script>

