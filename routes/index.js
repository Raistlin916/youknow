import koaRouter from 'koa-router'
const router = koaRouter()

async function renderIndex(ctx) {
  ctx.render('index', { env: process.env.NODE_ENV })
}

router
  .get('/', renderIndex)
  .get('/city', renderIndex)
  .get('/external', renderIndex)
  .get('/square/*', renderIndex)

export default router
