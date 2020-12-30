import {userService} from "@/utils/request";

/**
 * 登录
 * username : 用户名
 * password : 密码
 * @param params
 * @returns {AxiosPromise}
 */
export function login(params) {
    return userService({
        url: '/login',
        method: 'get',
        params: params
    })
}

/**
 * 注册
 * username : 用户名
 * password : 密码
 * @param params
 * @returns {AxiosPromise}
 */
export function register(params) {
    return userService({
        url: '/register',
        method: 'get',
        params: params
    })
}


/**
 * 添加用户偏好（解决冷启动问题）
 * username ： 用户名
 * genres ： 电影类别
 * @param params
 * @returns {AxiosPromise}
 */
export function addPrefGenres(params) {
    return userService({
        url: '/pref',
        method: 'get',
        params: params
    })
}

export function checkNew(username) {
    return userService({
        url: '/info',
        method: 'get',
        params: username
    })
}
