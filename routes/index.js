import koaRouter from 'koa-router'
const router = koaRouter()

async function renderIndex(ctx) {
  ctx.render('index', { env: process.env.NODE_ENV })
}

router
  .get('/', renderIndex)
  .get('/city', renderIndex)
  .get('/square/*', renderIndex)
  .get('/ip', ctx => ctx.render('ip', { ip: ctx.ip }))

export default router
