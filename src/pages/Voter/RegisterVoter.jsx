import { useRef, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";
import './RegisterVoter.css'; // Import the CSS for styling

const RegisterVoter = ()=>{
    const [file,setFile] = useState("");
    const { web3State} = useWeb3Context();
    const { contractInstance} = web3State;

    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);

    const handleVoterRegistration = async (e)=>{

        e.preventDefault();

        try{
            
            const name = nameRef.current.value;
            const age = ageRef.current.value;
            const gender = genderRef.current.value;

            

            await contractInstance.registerVoter(name,age,gender);
            console.log("Registeration is successful")

        }catch(error){
            console.error(error)

        }
    }

    return (

        <div className="register-container">
      <h1 className="register-title">Voter Registration</h1>
      <form className="register-form" onSubmit={handleVoterRegistration}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" ref={nameRef} placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="number" ref={ageRef} placeholder="Enter your age" required />
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

        <div className="form-group file-input">
          <label>Upload Image:</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
    )
}
export default RegisterVoter;