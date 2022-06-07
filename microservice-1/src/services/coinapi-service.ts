import request from 'request'

async function getListing(): Promise<unknown> {
    const options = {
        'method': 'GET',
        'url': 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD',
        'headers': {
            'X-CMC_PRO_API_KEY': '7fe4315c-6eb7-4473-9f75-0ee159d7d20f'
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
