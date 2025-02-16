import { useState } from "react";
import { checkNFTExists, mintNFT } from "../contract/contract";

export default function MintForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleMint = async () => {
    if (!name || !description || !image) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    // Generate random token ID
    let tokenId = Math.floor(Math.random() * 10000);
    while (await checkNFTExists(tokenId)) {
      tokenId = Math.floor(Math.random() * 10000);
    }

    // Store metadata (Assuming backend API exists)
    const metadataUrl = `https://your-backend.com/nft/${tokenId}`;

    // Mint NFT
    const txHash = await mintNFT(tokenId, metadataUrl);
    if (txHash) {
      setMessage(`Minted successfully! TX Hash: ${txHash}`);
    } else {
      setMessage("Minting failed.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg text-white">
      <h2 className="text-xl mb-4">Mint NFT</h2>
      <input
        type="text"
        placeholder="NFT Name"
        className="w-full p-2 mb-2 bg-gray-700 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="w-full p-2 mb-2 bg-gray-700 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 mb-4 bg-gray-700 rounded"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button
        className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleMint}
        disabled={loading}
      >
        {loading ? "Minting..." : "Mint NFT"}
      </button>
      {message && <p className="mt-3 text-sm">{message}</p>}
    </div>
  );
}
