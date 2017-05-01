const API_BASE = 'http://minesweeper-api.herokuapp.com/'
const TOKEN = 'explode'

const get = (path, params = {}) => {
  const url = [API_BASE, path, '?', qs(params)].join('')
  return window.fetch(url).then(r => r.json())
  console.log(r)
}

const post = (path, params = {}) => {
  const url = [API_BASE, path, '?', qs()].join('')
  return window.fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(r => r.json())
}

const qs = (params = {}) => {
  const opt = Object.assign(params, { access_token: TOKEN })
  const esc = encodeURIComponent
  return Object.keys(opt)
    .map(k => [esc(k), esc(opt[k])].join('='))
    .join('&')
}

export { get, post }
