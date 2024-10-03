import { ethers } from "ethers";
import abi from "../constant/abi.json";
import axios from "axios";
import toast from "react-hot-toast"; // Import toast for notifications
require('dotenv').config();


export const getWeb3State = async () => {
    try {
        // Check if MetaMask is installed
        if (!window.ethereum) {
            toast.error("MetaMask is not installed. Please install MetaMask and try again.");
            throw new Error("MetaMask is not installed");
        }

        // Get user accounts from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const selectedAccount = accounts[0];

        toast.success(`Connected to account: ${selectedAccount}`);

        // Get chainId in hexadecimal and convert to BigInt for better compatibility
        const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
        const chainId = BigInt(chainIdHex);

        if (chainId !== 11155111n) { // 11155111 is Sepolia test network
            toast.warning("Please switch to Ethereum mainnet");
        } else {
            toast.success("Connected to Ethereum mainnet");
        }

        // Initialize ethers provider and signer
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        // Use configuration for contract address and API URL
        const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
        const apiUrl = process.env.REACT_APP_API_URL;

        // Generate a secure message for signing (with nonce)
        const nonce = Math.floor(Date.now() / 1000); // Timestamp-based nonce
        const message = `Welcome to Voting Dapp. Nonce: ${nonce}`;
        const signature = await signer.signMessage(message);

        toast.success("Message signed successfully");

        // Post the signature for authentication
        const dataSignature = { signature };
        const res = await axios.post(`${apiUrl}?accountAddress=${selectedAccount}`, dataSignature, { timeout: 10000 });

        // Store token securely in localStorage (consider encrypting or using sessionStorage)
        localStorage.setItem("token", res.data.token);
        toast.success("Token saved to localStorage");

        // Initialize contract instance
        const contractInstance = new ethers.Contract(contractAddress, abi, signer);

        toast.success("Contract instance initialized");

        return { contractInstance, selectedAccount, chainId };
    } catch (error) {
        console.error(error);
        toast.error(`Failed to get Web3 state: ${error.message}`);
        throw new Error(`Failed to get Web3 state: ${error.message}`);
    }
};
