import { defineChain } from "viem";
const rpc = process.env.NEXT_PUBLIC_RPC_URL || "";

export const espresso = defineChain({
  id: 345_678,
  name: "My Espresso Chain",
  network: "Arbitrum Sepolia",
  nativeCurrency: {
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [rpc],
    },
  },
  testnet: true,
});
