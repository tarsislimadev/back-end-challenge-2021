
function Response() {
  const self = this

  const response = {
    headers: {},
    status: null,
    text: null,
  }

  self.status = function (status) {
    response['status'] = status
    return self
  }

  self.text = function (text) {
    response['text'] = text
    return self
  }

  self.json = function (json) {
    response['text'] = JSON.stringify(json)
    return self
  }

  self.header = function (key, value) {
    response['headers'][key] = value
    return self
  }

  self.end = function (res) {
    res.statusCode = response.status || 200
    res.end(response.text || '')
  }
}

module.exports = Response
