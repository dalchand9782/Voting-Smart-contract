import { useRef } from "react";
import { useWeb3Context } from "../../context/useWeb3Context"

const CastVote = () => {
    const { web3State} = useWeb3Context();
    const { contractInstance} = web3State;

    const voterIdRef = useRef(null);
    const candidateIdRef = useRef(null);

    const handleCastVote = async(e) => {

        
        e.preventDefault();

        try {
            const voterId = voterIdRef.current.value;
            const candidateId = candidateIdRef.current.value;

            await contractInstance.castVote(voterId,candidateId);


        }catch(error){
            console.error(error)
        }

        

    }

    return(
        <>
        <form onSubmit={handleCastVote}>
            <label>Voter Id<input type="text" ref={voterIdRef} ></input></label>
            <label>Candidate Id<input type="text" ref={candidateIdRef}></input></label>
            <button type="Submit">Cast Vote</button>
        </form>
        </>
    )

}
export default CastVote;