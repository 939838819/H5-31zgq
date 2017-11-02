import axios from 'axios'
let apiUrl = 'https://cnodejs.org/api/v1/topics'
export function getTopicList (param) {
  var top = {
    page: 1,
    tab: 'all',
    limit: 50
  }
  // console.log(top)
  let paramsData = Object.assign({}, top, param)
  return axios.get(apiUrl, {
    params: paramsData
  })
}
