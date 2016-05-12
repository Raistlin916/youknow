import { fetchJSON } from '../utils/fetch'

let cache
function fetch() {
  if (cache) {
    return Promise.resolve(cache)
  }
  return fetchJSON('/api/building')
    .then(data => {
      cache = data
      return data
    })
}

export default {
  get: name => fetch().then(data => data[name]),
  fetchByKeyword: k => {
    const keyword = k.trim()
    if (!keyword) {
      return Promise.resolve([])
    }
    const result = []
    return fetch().then(data => {
      Object.keys(data).forEach(buildingName =>
        data[buildingName].items.forEach(item => {
          if (item.title.indexOf(keyword) > -1) {
            result.push(item)
          }
        }))
      return result
    })
  }
}
