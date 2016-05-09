import koaRouter from 'koa-router'
const router = koaRouter()

router
  .get('/', async ctx => ctx.render('index'))
  .get('/city', async ctx => ctx.render('index'))
  .get('/square/*', async ctx => ctx.render('index'))

export default router
