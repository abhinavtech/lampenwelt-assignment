export interface ICrypto {
    name: string,
    symbol: string,
    quote: number
}

export interface IQuote {
    currency: string,
    price: number,
    volume24h: number,
    marketCap: number
}
