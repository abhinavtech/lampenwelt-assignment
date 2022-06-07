export interface ICrypto {
    name: string,
    symbol: string,
    quote: IQuote
}

export interface IQuote {
    currency: string,
    price: number,
    volume24h: number,
    marketCap: number
}


export function map(result: any): ICrypto[] {
    const crypto = []
    result = JSON.parse(result)
    for (const item of result.data) {
        crypto.push({
            name: item.name,
            symbol: item.symbol,
            quote: {
                currency: 'USD',
                price: item.quote["USD"].price,
                volume24h: item.quote["USD"].volume_24h,
                marketCap: item.quote["USD"].market_cap
            } as IQuote
        } as ICrypto)
    }
    return crypto
}
