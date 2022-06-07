import request from 'request'
import {ICrypto, map, quoteKeys, SortKeys} from '@models/coin-api.model'

async function getListing(sortKey: SortKeys = SortKeys.MARKET_CAP): Promise<unknown> {
    const options = {
        'method': 'GET',
        // eslint-disable-next-line max-len
        'url': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD',
        'headers': {
            'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY
        }
    };

    let result: ICrypto[] = await new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) reject(new Error(error))
            resolve(map(response.body))
        });
    })

    // @ts-ignore
    // eslint-disable-next-line max-len
    result.sort((a: ICrypto, b: ICrypto) => b.quote[quoteKeys[sortKey]] - a.quote[quoteKeys[sortKey]])
    return result.slice(0,10)
}

export default { getListing } as const
