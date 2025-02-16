import { createPublicClient, createWalletClient, custom, http } from "viem";
import { sepolia } from "viem/chains";
import abi from "./abi.json";

export const contractAddress = "0x743f49311a82fe72eb474c44e78da2a6e0ae951c";

// Read contract (for checking NFT existence)
export const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(),
});
if (typeof window !== "undefined" && window.ethereum) {
  console.log("Wallet detected!");
} else {
  console.error("No wallet detected. Please install MetaMask.");
}
// Write contract (for minting NFTs)
export const walletClient = createWalletClient({
  chain: sepolia,
  transport: custom(window.ethereum),
});

// Function to check if an NFT ID exists
export const checkNFTExists = async (tokenId: number) => {
  try {
    const exists = await publicClient.readContract({
      address: contractAddress,
      abi,
      functionName: "checkId",
      args: [tokenId],
    });
    return exists; // true or false
  } catch (error) {
    console.error("Error checking NFT ID:", error);
    return false;
  }
};

// Function to mint an NFT
export const mintNFT = async (tokenId: number, metadataUrl: string) => {
  try {
    const [account] = await walletClient.getAddresses();
    const hash = await walletClient.writeContract({
      address: contractAddress,
      abi,
      functionName: "mint",
      args: [tokenId, metadataUrl],
      account,
    });
    return hash;
  } catch (error) {
    console.error("Minting failed:", error);
    return null;
  }
};
