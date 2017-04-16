# cxlt-vue2-toastr
**cxlt-vue2-toastr**是弹出提示的Vue2组件，基于[toastr](https://github.com/CodeSeven/toastr)的样式和[animate.css](https://github.com/daneden/animate.css)的动画效果。

## 安装

使用npm
```bash
npm install cxlt-vue2-toastr --save
```
或者yarn
```bash
yarn add cxlt-vue2-toastr
```

## 用法
### 注册组件
```bash
import CxltToastr from 'cxlt-vue2-toastr'

Vue.use(CxltToastr)
```
也可以传入一个全局配置对象
```bash
var toastrConfigs = {
    position: 'top right',
    showDuration: 2000
}
Vue.use(CxltToastr, toastrConfigs)
```
### 引入样式
```bash
import 'cxlt-vue2-toastr/dist/cxlt-vue2-toastr.css'
```
或在.vue文件中使用style
```bash
<style src="cxlt-vue2-toastr/dist/cxlt-vue2-toastr.css"></style>
```
### 使用组件
```bash
<cxlt-toastr :show="show" :toastr="toastr" @show-change="showChange"></cxlt-toastr>
```



