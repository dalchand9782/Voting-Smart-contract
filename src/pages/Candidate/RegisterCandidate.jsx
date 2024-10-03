import { useRef, useState } from "react"
import { useWeb3Context } from "../../context/useWeb3Context"
import axios from "axios";
import { uploadCandidateImage } from "../../utils/uploadCandidateImage";
import './RegisterCandidate.css'; // Importing the CSS

const RegisterCandidate = () => {

    const [file, setFile] = useState("");

    const { web3State } = useWeb3Context();
    const { contractInstance } = web3State;

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);
    const partyRef = useRef(null);

    const handleCandidateRegisteration = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "x-access-token": token
                }
            }
            await uploadCandidateImage(file);
            // const res =await axios.post("http://localhost:3000/api/postCandidateImage", {}, config)


            // const name = nameRef.current.value;
            // const age = ageRef.current.value;
            // const gender = genderRef.current.value;
            // const party = partyRef.current.value;

            // await contractInstance.registerCandidate(name, party, age, gender)

            // console.log("Registration is successful")

        } catch (error) {

            console.log(error)
        }
    }

    return (
        <div className="register-container">
            <h1 className="register-title">Candidate Registration</h1>
            <form className="register-form" onSubmit={handleCandidateRegisteration}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" ref={nameRef} placeholder="Enter candidate name" required />
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" ref={ageRef} placeholder="Enter candidate age" required />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <select ref={genderRef} required>
                        <option value="">Select Gender</option>
                        <option value="0">Not Specified</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Party:</label>
                    <input type="text" ref={partyRef} placeholder="Enter party name" required />
                </div>

                <div className="form-group file-input">
                    <label>Upload Candidate Image:</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
                </div>

                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    )



}
export default RegisterCandidate;