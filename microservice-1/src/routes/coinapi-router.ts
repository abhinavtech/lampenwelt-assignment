import coinApiService from '@services/coinapi-service'
import {Request, Response, Router} from "express";
import StatusCodes from "http-status-codes";
import {SortKeys} from "@models/coin-api.model";

// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/'
} as const

router.get(p.get, async (req: Request, res: Response): Promise<unknown> => {
    const result = await coinApiService.getListing(req.query.sort as SortKeys)
    res.header('content-type', 'application/json')
    return res.status(OK).end(JSON.stringify(result))
})

export default router
