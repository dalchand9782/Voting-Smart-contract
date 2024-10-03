import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import './DisplyWinner.css'; // Importing custom CSS for styling

const DisplyWinner = () => {
    const { web3State } = useWeb3Context();
    const { contractInstance } = web3State;
    const [winner, setWinner] = useState("No Winner declared");

    useEffect(() => {
        const getWinner = async () => {
            try {
                const winningCandidateAddress = await contractInstance.winner();
                
                if (winningCandidateAddress !== "0x0000000000000000000000000000000000000000") {
                    setWinner(winningCandidateAddress);
                }
            } catch (error) {
                console.error("Error fetching winner:", error);
            }
        };

        if (contractInstance) {
            getWinner();
        }
    }, [contractInstance]);

    return (
        <div className="winner-container">
            <h1 className="winner-title">Winner: {winner}</h1>
        </div>
    );
};

export default DisplyWinner;
