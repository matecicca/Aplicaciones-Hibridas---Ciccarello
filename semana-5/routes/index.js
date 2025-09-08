import userRouter from './UserRouter.js'; 

const routerApi = (app) => {
    app.use('/api/usuario', userRouter);
}

export default routerApi;