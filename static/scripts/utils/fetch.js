import fetch from 'isomorphic-fetch'

const fetchWrapped = (url, option) => {
  option = Object.assign({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'get',
    mode: 'no-cors'
  }, option)

  if (option.method.toLowerCase() === 'get' && option.body) {
    const suffix = Object.keys(option.body)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(option.body[key])}`)
            .join('&')
            .replace(/%20/g, '+')
    url += `?${suffix}`
    delete option.body
  }
  if (option.body) {
    option.body = JSON.stringify(option.body)
  }
  return fetch(url, option)
}

export const fetchJSON = (...args) => fetchWrapped(...args).then(res => res.json())
export default fetchWrapped
