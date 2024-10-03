import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import './GetCandidateList.css'; // Import the CSS for styling


const GetCandidateList = () => {
    const { web3State} = useWeb3Context();
    const { contractInstance} = web3State;
    const [candidateList,setCandidateList] = useState([]);

    useEffect(() => {

        const fetchCandidateList = async () => {
            try {
                const list = await contractInstance.getCandidateList();
                setCandidateList(list);
                console.log(candidateList)
                

            }catch (error) {
                console.error(error)
            }
        }
        contractInstance && fetchCandidateList(); 
    },[contractInstance])

    return(
        <div className="candidate-list-container">
            <h1 className="candidate-list-title">Registered Candidates</h1>
            <table className="candidate-table">
                <thead>
                    <tr>
                        <th>Candidate ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Candidate Address</th>
                    </tr>
                </thead>
                <tbody>
                    {candidateList.length > 0 ? (
                        candidateList.map((candidate, index) => (
                            <tr key={index}>
                                <td>{candidate.candidateId}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.age}</td>
                                <td>{["Not Specified", "Male", "Female", "Other"][candidate.gender]}</td>
                                <td>{candidate.candidateAddress}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="no-candidates">
                                No candidates have registered yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default GetCandidateList;