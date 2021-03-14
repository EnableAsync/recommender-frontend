import {movieService} from '@/utils/request'
import getMoviePoster from "../utils/get-movie-poster";

/**
 * @returns {AxiosPromise}
 */
async function transformMovies(response) {
    const result = await response
    // TODO 应检测请求是否成功，这里先省略
    result.data.movies = result.data.movies.map(m => {
        m.score = Number(m.score.toFixed(1))
        m.image = getMoviePoster(m.mid)
        return m
    })
    return result
}

/**
 * @returns {AxiosPromise}
 */
async function transformMovie(response) {
    const result = await response
    // TODO 应检测请求是否成功，这里先省略
    result.data.movie.score = Number(result.data.movie.score.toFixed(1))
    result.data.movie.image = getMoviePoster(result.data.movie.mid)
    return result
}

/**
 * 获取近期热门电影
 * @returns {AxiosPromise}
 */
export function getRecentlyHotMovies(num) {
    return transformMovies(movieService({
        url: '/hot',
        method: 'get',
        params: num
    }))
}

/**
 * 获取历史热门电影
 * @returns {AxiosPromise}
 */
export function getHistoryHotMovies(num) {
    return transformMovies(movieService({
        url: '/rate',
        method: 'get',
        params: num
    }))
}

/**
 * 获取冷启动时用户偏好的电影
 * @returns {AxiosPromise}
 */
export function getWishMovies() {
    return transformMovies(movieService({
        url: '/wish',
        method: 'get'
    }))
}

/**
 * 获取推荐的电影
 * @returns {AxiosPromise}
 */
export function getRecommendedMovies(data) {
    return transformMovies(movieService({
        url: '/guess',
        method: 'get',
        params: data
    }))
}

/**
 * 获取电影详请页面相似的电影集合
 * id:电影id
 * num:相似电影的数量
 * @returns {AxiosPromise}
 * @param id
 * @param num
 */
export function getSimilarMovies(id, num) {
    return transformMovies(movieService({
        url: `/same/${id}`,
        method: 'get',
        params: num
    }))
}

/**
 * 获取单个电影的信息
 * @param id
 * @returns {*}
 */
export function getMovieInfo(id) {
    return transformMovie(movieService({
        url: `/info/${id}`,
        method: 'get',
    }))
}

/**
 * 获取模糊查询的电影
 * @param query
 * @returns {*}
 */
export function getSearchMovies(query) {
    return transformMovies(movieService({
        url: '/search',
        method: 'get',
        params: {query: query}
    }))
}

/**
 * 根据电影类别获取电影
 * @returns {*}
 * @param data
 */
export function getGenresMovies(data) {
    return transformMovies(movieService({
        url: '/genres',
        method: 'get',
        params: data
    }))
}

export function getTopAllMovies(data) {
    return transformMovies(movieService({
        url: '/topAll',
        method: 'get',
        params: data
    }))
}


/**
 * 获取用户评分过的电影
 * @param username
 * @returns {*}
 */
export function getMyRateMovies(username) {
    return transformMovies(movieService({
        url: '/myrate',
        method: 'get',
        params: username
    }))
}

/**
 * 对电影评分
 * id : 电影id
 * score : 评分
 * username : 用户名
 * @returns {*}
 * @param id
 * @param score
 * @param username
 */
export function rateToMovie(id, score, username) {
    return movieService({
        url: `/rate/${id}`,
        method: 'get',
        params: {score: score, username: username}
    })
}

export function getStreamMovie(username, num) {
    return transformMovies(movieService({
        url: `/stream`,
        method: 'get',
        params: {username: username, num: num}
    }))
}


