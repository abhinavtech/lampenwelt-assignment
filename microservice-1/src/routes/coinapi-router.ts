import coinApiService from '@services/coinapi-service'
import {Request, Response, Router} from "express";
import StatusCodes from "http-status-codes";

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/'
} as const

router.get(p.get, async (_: Request, res: Response): Promise<unknown> => {
    const result = await coinApiService.getListing()
    res.header('content-type', 'application/json')
    return res.status(OK).end(result)
})

export default router
