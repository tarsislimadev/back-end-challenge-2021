const router = require('./lib/router')

const api = require('./api')

router.handle('GET', '/', (_, res) => res.html('Back-end Challenge 2021 🏅 - Space Flight News'))

router.handle('GET', '/articles', (_, res) => res.json(api.articles.list()))

router.handle('GET', '/articles/{id}', ({ params: { id } }, res) => res.json(api.articles.read(id)))

router.handle('POST', '/articles', ({ body }, res) => res.json(api.articles.create(body)))

router.handle('PUT', '/articles/{id}', ({ params: { id }, body }, res) => res.json(api.articles.update(id, body)))

router.handle('DELETE', '/articles/{id}', ({ params: { id } }, res) => res.json(api.articles.delete(id)))

module.exports = router
