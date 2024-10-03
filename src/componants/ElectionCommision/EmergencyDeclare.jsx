import { useWeb3Context } from "../../context/useWeb3Context";
import './EmergencyDeclare.css'; // Importing custom CSS for styling

const EmergencyDeclare = () => {

    const { web3State } = useWeb3Context();
    const { contractInstance } = web3State;

    const emergencyStop = async () => {
        try {
            await contractInstance.emergencyStopVoting(); // Call the contract method
            alert("Voting has been stopped successfully.");
        } catch (error) {
            console.error("Error stopping voting:", error);
            alert("Failed to stop voting.");
        }
    };

    return (
        <div className="emergency-container">
            <button onClick={emergencyStop} className="emergency-btn">Stop Voting</button>
        </div>
    );
};

export default EmergencyDeclare;
