import request from '@/utils/request'


/**
 * 获取近期热门电影
 * @returns {AxiosPromise}
 */
export function getRecentlyHotMovies() {
  return request({
    url: '/movie/hot',
    method: 'get'
  })
}

/**
 * 获取历史热门电影
 * @returns {AxiosPromise}
 */
export function getHistoryHotMovies() {
  return request({
    url: '/movie/rate',
    method: 'post',
  })
}

/**
 * 获取冷启动时用户偏好的电影
 * @returns {AxiosPromise}
 */
export function getWishMovies() {
  return request({
    url: '/movie/wish',
    method: 'get'
  })
}

/**
 * 获取推荐的电影
 * @returns {AxiosPromise}
 */
export function getRecommendedMovies() {
  return request({
    url: '/movie/guess',
    method: 'get'
  })
}

/**
 * 获取电影详请页面相似的电影集合
 * @param data
 * @returns {AxiosPromise}
 */
export function getSimilarMovies(data) {
  return request({
    url: '/same',
    method: 'get',
    params: data
  })
}

/**
 * 获取单个电影的信息
 * @param id
 * @returns {*}
 */
export function getMovieInfo(id) {
  return request({
    url: '/info',
    method: 'get',
    param: id
  })
}

/**
 * 获取模糊查询的电影
 * @param query
 * @returns {*}
 */
export function getSearchMovies(query) {
  return request({
    url: '/search',
    method: 'get',
    param: query
  })
}

/**
 * 根据电影类别获取电影
 * @param genre
 * @returns {*}
 */
export function getGenresMovies(genre) {
  return request({
    url: '/genres',
    method: 'get',
    param: genre
  })
}

/**
 * 获取用户评分过的电影
 * @param username
 * @returns {*}
 */
export function getMyRateMovies(username) {
  return request({
    url: '/myrate',
    method: 'get',
    param: username
  })
}

/**
 * 对电影评分
 * id : 电影id
 * score : 评分
 * username : 用户名
 * @param params
 * @returns {*}
 */
export function rateToMovie(params) {
  return request({
    url: '/myrate',
    method: 'get',
    param: params
  })
}


