import { Router } from 'express';
import userRouter from './user-router';
import coinapiRouter from "@routes/coinapi-router";


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter)
baseRouter.use('/coins', coinapiRouter)
// Export default.
export default baseRouter;
