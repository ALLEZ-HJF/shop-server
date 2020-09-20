const mySend = (option = {}) => {
    return async (ctx, next) => {
        ctx.success = (code, msg, data, type) => {
            ctx.type = type || option.type || 'json'
            ctx.body = {
                code: code || option.code || '200',
                msg: msg || option.msg || 'success',
                data
            }
        }
        ctx.fail = (code,msg) => {
            ctx.type = option.type || 'json'
            ctx.body = {
                code: code || option.code || '201',
                msg: msg || option.msg || 'fail'
            }
        }
        await next()
    }
}
module.exports = mySend