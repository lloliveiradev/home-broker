import { Wallet } from "@/models";

export async function getMyWallet(API_URL: string, walletId: string): Promise<Wallet> {
    const response = await fetch(`${API_URL}/api/wallet/${walletId}`);
    return response.json();
};