export type Asset = {
    _id: string;
    name: string;
    symbol: string;
    price: number;
    image_url: string;
}

export type Wallet = {
    _id: string;
    assets: Asset[];
}

export type WalletAsset = {
    _id: string;
    asset: Asset;
    shares: number;
}