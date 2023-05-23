import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

export default function RequestsNav({ user, setUser }) {

  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  console.log("User for requests:", user)

  return (
    <nav className="requestsNav">
      
      <h4>Welcome, {user.name}</h4>
      <Link to="" onClick={handleLogOut}><h4>Log Out</h4></Link>
    </nav>
  );
}