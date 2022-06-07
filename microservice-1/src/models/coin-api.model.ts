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

export enum SortKeys {
    PRICE = 'price',
    MARKET_CAP = 'market_cap',
    VOLUME_24H = 'volume_24h'
}

export const quoteKeys = {
    price: 'price',
    market_cap: 'marketCap',
    volume_24h: 'volume24h'
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
