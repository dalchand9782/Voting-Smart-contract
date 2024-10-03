import { useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useNavigate } from "react-router-dom";
import './Wallet.css'; // Import custom styles

const Wallet = () => {
  const { handleWallet, web3State } = useWeb3Context();
  const { selectedAccount } = web3State;
  const navigateTo = useNavigate();

  useEffect(() => {
    if (selectedAccount) {
      navigateTo('/register-candidate');
    }
  }, [selectedAccount, navigateTo]);

  return (
    <div className="wallet-container">
      <h2 className="wallet-title">Welcome to Election DApp</h2>
      <p className="wallet-description">Please connect your wallet</p>
      <button className="connect-wallet-btn" onClick={handleWallet}>
        {selectedAccount ? "Wallet Connected" : "Connect Wallet"}
      </button>
    </div>
  );
};

export default Wallet;
