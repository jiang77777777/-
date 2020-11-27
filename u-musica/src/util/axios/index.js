// 引入封装好的axios库
import http from './axios';

// 封装接口
//封装推荐歌单接口
export function recMusic (params) {
  return http.get('/personalized', {
    params
  })
}

//封装推荐新音乐接口
export function newSong () {
  return http.get('/personalized/newsong')
}

//封装轮播图接口
export function banner (params) {
  return http.get('/banner')
}
// 封装一个热搜榜列表接口
export function getPlayList (params) {
  return http.get('/top/list', {
    params
  })
}
// 封装热门搜素接口
// export function hot () {
//   return http.get('/search/hot')
// }
//热搜列表
export function getHotSearch(){
  return http.get('/search/hot/detail')
}

//封装一个搜索接口
export function getSearch(params){
  return http.get('/search',{
      params
  })
}
export function getHotSong(){
  return http.get('/top/list?id=3778678')
}

//封装歌单详情
export function playDetail(params){
  return http.get('/playlist/detail',{
      params
  })
}

//获取歌曲详情
export function songDetail(params){
  return http.get('/song/detail',{
      params
  })
}


//获取音乐URL
export function playUrl(params){
  return http.get('/song/url',{
      params
  })
}
// 获取歌词
export function getLyric(params){
  return http.get('/lyric',{
      params
  })
}

