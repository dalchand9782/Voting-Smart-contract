import { useEffect, useState } from "react";
import { Web3Context } from "./Web3Context";
import { getWeb3State } from "../utils/getWeb3State";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";
import toast from "react-hot-toast"; // Assuming you're using react-hot-toast for notifications

const Web3Provider = ({ children }) => {
  const [web3State, setWeb3State] = useState({
    contractInstance: null,
    selectedAccount: null,
    chainId: null,
  });

  const handleWallet = async () => {
    if (!window.ethereum) {
      toast.error("MetaMask is not installed");
      return; // Stop execution if MetaMask is not installed
    }

    try {
      const { contractInstance, selectedAccount, chainId } = await getWeb3State();
      setWeb3State({ contractInstance, selectedAccount, chainId });

      if (chainId !== "0x1") { // Assuming 0x1 is Ethereum mainnet
        toast.warning("Please switch to Ethereum mainnet");
      } else {
        toast.success("MetaMask is connected");
      }

    } catch (error) {
      toast.error(`Error connecting MetaMask: ${error.message}`);
    }
  };

  const handleAccountChangeWithToast = (setWeb3State) => {
    handleAccountChange(setWeb3State);
    toast.info("Account changed");
  };

  const handleChainChangeWithToast = (setWeb3State) => {
    handleChainChange(setWeb3State);
    toast.info("Network changed");
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => handleAccountChangeWithToast(setWeb3State));
      window.ethereum.on("chainChanged", () => handleChainChangeWithToast(setWeb3State));

      return () => {
        window.ethereum.removeListener("accountsChanged", () => handleAccountChangeWithToast(setWeb3State));
        window.ethereum.removeListener("chainChanged", () => handleChainChangeWithToast(setWeb3State));
      };
    }
  }, [setWeb3State]);

  return (
    <Web3Context.Provider value={{ web3State, handleWallet }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
