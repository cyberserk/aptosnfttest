export const candyMachineAddress = "0x162d76d6ff8502d2031f428a7c99ad283c6dc9a0cc12d11b22cf421632d2be5a";
export const collectionName = "Dragons Test"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/Qmey47Zotefxm235matzsEwLmk9GDyev51UYJW97pmq8co";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}