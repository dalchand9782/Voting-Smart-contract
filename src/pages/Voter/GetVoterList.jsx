import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import './GetVoterList.css'; // Importing the CSS

const GetVoterList = () => {

    const { web3State } = useWeb3Context();
    const { contractInstance } = web3State;

    const [voterList, setVoterList] = useState([]);

    useEffect(() => {

        const fetchVoterList = async () => {
            try {

                const list = await contractInstance.getVoterList();
                setVoterList(list);
                console.log(list);

            } catch (error) {

                console.log(error)

            }
        }

        contractInstance && fetchVoterList(); // Fetch the list if contract instance exists


    }, [contractInstance]);

    return (
        <div className="voter-list-container">
            <h1 className="voter-list-title">Registered Voters</h1>
            <table className="voter-table">
                <thead>
                    <tr>
                        <th>Voter ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Voter Address</th>
                    </tr>
                </thead>
                <tbody>
                    {voterList.length > 0 ? (
                        voterList.map((voter, index) => (
                            <tr key={index}>
                                <td>{voter.voterId}</td>
                                <td>{voter.name}</td>
                                <td>{voter.age}</td>
                                <td>{["Not Specified", "Male", "Female", "Other"][voter.gender]}</td>
                                <td>{voter.voterAddress}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="no-voters">
                                No voters have registered yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default GetVoterList;