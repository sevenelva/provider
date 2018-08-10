import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import ("@/views/home/Home.vue");
const OrderList = () =>
    import ("@/views/orderList/OrderList.vue");
const OrderDetail = () =>
    import ("@/views/orderDetail/OrderDetail.vue");
const MyLogistics = () =>
    import ("@/views/myLogistics/MyLogistics.vue");
const MyReport = () =>
    import ("@/views/myReport/MyReport.vue");
const SystemNotice = () =>
    import ("@/views/systemNotice/SystemNotice.vue");
const MyProduct = () =>
    import ("@/views/myProduct/MyProduct.vue");
const Invoice = () =>
    import ("@/views/invoice/Invoice.vue"); // 发票信息
const Allot = () =>
    import ("@/views/allot/Allot.vue"); // 酒店分配
const Honor = () =>
    import ("@/views/honor/Honor.vue"); //荣誉
const Login = () =>
    import ("@/views/login/Login.vue"); //登录
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '*',
            redirect: '/Home',
        },
        {
            path: '/Home',
            name: 'Home',
            component: Home,
            meta: {
                title: "供应商系统",
                keep: false,
            }
        },
        {
            path: '/orderList',
            name: 'OrderList',
            component: OrderList,
            meta: {
                title: "供应商系统1",
                keep: false
            }
        },
        {
            path: '/orderDetail',
            name: 'OrderDetail',
            component: OrderDetail,
            meta: {
                title: "供应商系统2",
                keep: false
            }

        }, {
            path: '/myLogistics',
            name: 'MyLogistics',
            component: MyLogistics,
            meta: {
                title: "供应商系统3",
                keep: false
            }
        }, {
            path: '/myReport',
            name: 'MyReport',
            component: MyReport,
            meta: {
                title: "供应商系统4",
                keep: false
            }
        },
        { // 发票
            path: '/invoice',
            name: 'Invoice',
            component: Invoice,
            meta: {
                title: "发票",
                keep: false
            }
        },
        { // 酒店分配
            path: '/allot',
            name: 'Allot',
            component: Allot,
            meta: {
                title: "酒店分配",
                keep: false
            }

        },
        { // 荣誉
            path: '/honor',
            name: 'Honor',
            component: Honor,
            meta: {
                title: "荣誉",
                keep: false
            }

        },
        {
            path: '/systemNotice',
            name: 'SystemNotice',
            component: SystemNotice,
            meta: {
                title: "供应商系统5",
                keep: false
            }
        },
        {
            path: '/myProduct',
            name: 'MyProduct',
            component: MyProduct,
            meta: {
                title: "供应商系统6",
                keep: false
            }
        },
        {
            path: '/Login',
            name: 'Login',
            component:Login,
            meta: {
                title: "登录",
                keep: false
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }

        }
    }
})
