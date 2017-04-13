<template>
    <div>
        <cxlt-toastr :title="'成功了'"
                     :message="'保存角色成功'"
                     :position="'top right'"
                     :type="'info'"
                     :show="show"
                     :showMethod="'bounceIn'"
                     :hideMethod="'bounceOut'"
                     @show-change="showChange"></cxlt-toastr>
        <button @click="switchShow">click me</button>
    </div>
</template>

<script>

export default {
    name: 'App',
    data: () => {
        return {
            show: false
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

