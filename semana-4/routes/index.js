const userRouter = require('./UserRouter.js')

const routerApi = (app) => {
    app.use('/api/usuario', userRouter);
}

module.exports = routerApi;