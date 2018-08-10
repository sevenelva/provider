'use strict'
import axios from 'axios'
import qs from 'qs'
//import { Object } from 'core-js';

axios.interceptors.request.use(config => {
    // 发送请求  所有的请求都会走这里
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

function checkStatus(response, This, obj) {
    if (obj.isLoading == true) {
        This.$root.isLoading = true
    }
    // 如果http状态码正常，则直接返回数据
    if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
        This.$root.isLoading = false
        return response
    }

    // 异常状态下，把错误信息返回去
    return {
        status: -404,
        msg: '网络异常'
    }
}

function checkCode(res, This) {
    if (res.status === -404) {
        // 请求超时
        This.$root.isLoading = false
        This.$router.push({ path: '/err', query: { 'Msg': encodeURIComponent('请求超时') } })
        return
    }
    // token 过期  或则错误
    if (res.status === 99) {
        // 请求超时
        This.$router.push({ path: '/login'})
        return
    }
    return res
}

export default {
    post(url, data, This, obj) {
        return axios({
            method: 'post',
            baseURL: 'http://172.23.101.83/',
            url,
            data: qs.stringify(data),
            timeout: 40000,
            headers: {
                'token': This.getCookie('token')
            }
        }).then(
            (response) => {
                return checkStatus(response, This, obj)
            }
        ).then(
            (res) => {
                return checkCode(res, This, obj)
            }
        )
    },
    get(url, params, This, obj) {
        return axios({
            method: 'get',
            baseURL: 'http://172.23.101.83/',
            url,
            data: qs.stringify(params), // get 请求时带的参数
            timeout: 10000,
            headers: {
                 'token': This.getCookie('token')
            }
        }).then(
            (response) => {
                return checkStatus(response, This, obj)
            }
        ).then(
            (res) => {
                return checkCode(res, This, obj)
            }
        )
    }
}

// 用法
// async function aaa() {
//     let params = {
//         'code': this.arg
//     }
//     const res = await this.$root.http.post('/mvc/pay/QueryPayInfos', params, this,obj)
// }
