import { Link } from "react-router-dom";
import './Navigation.css'; // Import the CSS

const Navigation = ()=>{

   return(
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/register-voter">Register Voter</Link></li>
      <li><Link to="/register-candidate">Register Candidate</Link></li>
      <li><Link to="/voter-list">Voter List</Link></li>
      <li><Link to="/candidate-list">Candidate List</Link></li>
      <li class="dropdown">
          <Link  class="arrow-flex">Election Commission <div class="dropdown-arrow" ></div> </Link> 
          
          <ul class="dropdown-content">
              <li><Link to="/voting-time-period">Voting Time Period</Link></li>
              <li><Link to="/voting-status">Voting Status</Link></li>
              <li><Link to="/emergency-declare">Emergency Declare</Link></li>
              <li><Link to="/disply-winner">Disply Winner</Link></li>
              <li><Link to="/announce-winner">Announce Winner</Link></li>
          </ul>
      </li>
  </ul>
  
   )
    
}
export default Navigation;