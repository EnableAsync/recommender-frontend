import {movieService} from '@/utils/request'


/**
 * 获取近期热门电影
 * @returns {AxiosPromise}
 */
export function getRecentlyHotMovies(num) {
  return movieService({
    url: '/hot',
    method: 'get',
    params: num
  })
}

/**
 * 获取历史热门电影
 * @returns {AxiosPromise}
 */
export function getHistoryHotMovies(num) {
  return movieService({
    url: '/rate',
    method: 'get',
    params: num
  })
}

/**
 * 获取冷启动时用户偏好的电影
 * @returns {AxiosPromise}
 */
export function getWishMovies() {
  return movieService({
    url: '/wish',
    method: 'get'
  })
}

/**
 * 获取推荐的电影
 * @returns {AxiosPromise}
 */
export function getRecommendedMovies(data) {
  return movieService({
    url: '/guess',
    method: 'get',
    params: data
  })
}

/**
 * 获取电影详请页面相似的电影集合
 * id:电影id
 * num:相似电影的数量
 * @returns {AxiosPromise}
 * @param id
 * @param num
 */
export function getSimilarMovies(id,num) {
  return movieService({
    url: `/same/${id}`,
    method: 'get',
    params: num
  })
}

/**
 * 获取单个电影的信息
 * @param id
 * @returns {*}
 */
export function getMovieInfo(id) {
  return movieService({
    url: `/info/${id}`,
    method: 'get',
  })
}

/**
 * 获取模糊查询的电影
 * @param query
 * @returns {*}
 */
export function getSearchMovies(query) {
  return movieService({
    url: '/search',
    method: 'get',
    params: query
  })
}

/**
 * 根据电影类别获取电影
 * @returns {*}
 * @param data
 */
export function getGenresMovies(data) {
  return movieService({
    url: '/genres',
    method: 'get',
    params: data
  })
}
export function getTopAllMovies(data) {
  return movieService({
    url: '/topAll',
    method: 'get',
    params: data
  })
}



/**
 * 获取用户评分过的电影
 * @param username
 * @returns {*}
 */
export function getMyRateMovies(username) {
  return movieService({
    url: '/myrate',
    method: 'get',
    params: username
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
  return movieService({
    url: '/myrate',
    method: 'get',
    params: params
  })
}


