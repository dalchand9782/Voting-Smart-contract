import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import './VotingTimePeriod.css'; // Importing custom CSS for styling

const VotingTimePeriod = () => {

    const { web3State } = useWeb3Context();
    const { contractInstance } = web3State;

    const startTimeRef = useRef(null);
    const endTimeRef = useRef(null);

    const handleTimePeriod = async (e) => {
        e.preventDefault();
        try {
            const startTime = startTimeRef.current.value;
            const endTime = endTimeRef.current.value;

            await contractInstance.setVotingPeriod(startTime, endTime);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleTimePeriod} className="voting-form">
                <h2 className="form-title">Set Voting Period</h2>

                <div className="input-group">
                    <label htmlFor="start-time" className="input-label">Start Time</label>
                    <input
                        type="text"
                        id="start-time"
                        ref={startTimeRef}
                        className="form-input"
                        placeholder="Enter start time"
                        required
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="end-time" className="input-label">End Time</label>
                    <input
                        type="text"
                        id="end-time"
                        ref={endTimeRef}
                        className="form-input"
                        placeholder="Enter end time"
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Set Time</button>
            </form>
        </div>
    );
};

export default VotingTimePeriod;
