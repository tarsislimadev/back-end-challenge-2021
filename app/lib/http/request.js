
function Request({
  query,
  route,
  headers,
  method,
  path,
  body,
}) {
  this.query = query
  this.route = route
  this.headers = headers
  this.method = method
  this.path = path
  this.body = body
}

module.exports = Request
