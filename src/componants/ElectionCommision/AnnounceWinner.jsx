import { useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import './AnnounceWinner.css'; // Importing custom CSS for styling

const AnnounceWinner = () => {
    const { web3State } = useWeb3Context();
    const { contractInstance } = web3State;
    const [winner, setWinner] = useState("No winner announced yet.");

    const getWinner = async () => {
        try {
            const result = await contractInstance.announceVotingResult();
            setWinner(result);
            console.log(result);
        } catch (error) {
            console.error("Error announcing winner:", error);
            setWinner("Error fetching winner.");
        }
    };

    return (
        <div className="announce-container">
            <button className="announce-btn" onClick={getWinner}>Announce Winner</button>
            <label className="winner-label">Winner is: {winner}</label>
        </div>
    );
};

export default AnnounceWinner;
