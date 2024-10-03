import toast from "react-hot-toast"; // Optional

export const handleChainChange = async (setWeb3State) => {
    try {
        if (!window.ethereum) {
            toast.error("MetaMask not found. Please install MetaMask.");
            throw new Error("Ethereum provider not found.");
        }

        const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
        const chainId = BigInt(chainIdHex);

        setWeb3State((prevState) => ({ ...prevState, chainId }));

        toast.success(`Switched to chain ID: ${chainId}`);
    } catch (error) {
        console.error("Error handling chain change:", error);
        toast.error("Failed to change chain.");
    }
};
