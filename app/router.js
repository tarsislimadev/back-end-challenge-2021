
const { Request, Response } = require('./lib/http')
const { parse } = require('./lib/json')

const routes = []

const matchMethod = (inner = '', outter = '') => inner === outter
const matchRoute = (inner = '', outter = '') => {
  const innerParts = inner.split('/')
  const outterParts = outter.replace(/\/$/, '').split('/')

  const match = innerParts.every((part, ix) => (part.charAt(0) === ':')
    ? !!(outterParts[ix])
    : part === outterParts[ix]
  )

  if (!match) return null

  const params = innerParts.reduce((res, part, ix) => {
    if (part.charAt(0) === ':')
      res[part.slice(1)] = outterParts[ix]

    return res
  }, {})

  return Object.keys(params).length === 0 ? null : params
}

const handle = (method, route, handler) => routes.push({ method, route, handler })

const handler = (request, body = '{}') => {
  const { method: oMethod, headers, url: oRoute } = request
  const res = new Response()

  for (const config of routes) {
    const { method: iMethod, route: iRoute, handler: iHandler } = config
    const mMethod = matchMethod(iMethod, oMethod)
    const mRoute = matchRoute(iRoute, oRoute)
    if (mMethod && mRoute)
      return iHandler(new Request({
        query: mRoute,
        route: iRoute,
        headers,
        method: oMethod,
        path: oRoute,
        body: parse(body),
      }), res)
  }

  return res.status(404).text('not found')
}

module.exports = {
  handle,
  handler,
}
