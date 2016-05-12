import koaRouter from 'koa-router'
import roomModel from '../models/room'
import buildingModel from '../models/building'

const router = koaRouter()

async function renderIndex(ctx) {
  ctx.render('index', { env: process.env.NODE_ENV })
}

const apiRoom = async ctx => {
  ctx.body = await roomModel.getById(ctx.params.roomId)
}

const apiBuildings = async ctx => {
  ctx.body = await buildingModel.fetch(ctx.params.roomId)
}

router
  .get('/', renderIndex)
  .get('/city', renderIndex)
  .get('/external', renderIndex)
  .get('/square/*', renderIndex)
  .get('/api/room/:roomId', apiRoom)
  .get('/api/building', apiBuildings)

export default router
