import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import './VotingStatus.css'; // Importing custom CSS for styling

const VotingStatus = () => {

    const { web3State } = useWeb3Context();
    const { contractInstance } = web3State;
    const [votingStatus, setVotingStatus] = useState('');

    useEffect(() => {
        const getVotingStatus = async () => {
            try {
                const currentVotingStatus = await contractInstance.getVotingStatus();
                setVotingStatus(currentVotingStatus); // Setting the current voting status
            } catch (error) {
                console.error(error);
            }
        };

        if (contractInstance) {
            getVotingStatus();
        }
    }, [contractInstance]);

    return (
        <div className="status-container">
            <h1 className="status-title">Voting Status</h1>
            <div className={`status-display ${votingStatus ? 'active' : 'inactive'}`}>
                {votingStatus ? "Voting is Active" : "Voting is Inactive"}
            </div>
        </div>
    );
};

export default VotingStatus;
