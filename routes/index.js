const router = require('koa-router')()
const client = require('../sdk/index').client

// 获取精选商品
router.post('/getRecommendList', async (ctx, next) => {
  try {
    const data = await client.execute('taobao.tbk.dg.optimus.material', ctx.request.body)
    ctx.success(200,'success',data)
  } catch (error) {
    ctx.fail(error.code,error.msg)
  }
})

module.exports = router
