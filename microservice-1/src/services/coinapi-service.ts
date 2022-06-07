import request from 'request'

async function getListing(): Promise<unknown> {
    const options = {
        'method': 'GET',
        // eslint-disable-next-line max-len
        'url': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD',
        'headers': {
            'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY
        }
    };

    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) reject(new Error(error))
            resolve(response.body)
        });
    })
}

export default { getListing } as const
