
const app = require('./router')

const handlers = require('./handlers')

app.handle('GET', '', handlers.home)

app.handle('GET', '/articles', handlers.listArticles) // FIXME: curl -siSL '0.0.0.0:2200/articles' 

app.handle('GET', '/articles/:id', handlers.getArticle)

app.handle('POST', '/articles', handlers.addArticle)

app.handle('PUT', '/articles/:id', handlers.updateArticle)

app.handle('DELETE', '/articles/:id', handlers.deleteArticle)

module.exports = app
