// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import http from '@/common/js/http'
import '@/common/js/base'
import VueLazyLoad from 'vue-lazyload'
Vue.use(ElementUI)
Vue.config.productionTip = false
    /* eslint-disable no-new */

// title 设置
router.beforeEach((to, form, next) => {
    document.title = to.meta.title
    next()
})

// 图片错误处理
Vue.use(VueLazyLoad, {
    error: './static/error.png',
    loading: './static/loading.png'
})
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    data: {
        isLoading: false,
        eventHub: new Vue(),
        http: http, // 异步请求
        flagrouter:false,
        routerPath:""
    },
    watch:{
        $route(to,from)
        {
            this.routerPath = from.fullPath;
            if(to.name=='Home'){
                this.flagrouter=true
            }else{
                this.flagrouter=false
            }
        }
    }
})