import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function Nav() {
    return(
            <nav id="navBar">
                <Link to="/">
                    <div className="navLinkContainer">
                        <div className="homeLink">Home</div>
                    </div>
                </Link>
                <Link to="/pages/carreviews">
                    <div className="navLinkContainer">
                        <div className="carReviewsLink">Car Reviews</div>
                    </div>
                </Link>
                <Link to="/pages/roadtrips">
                    <div className="navLinkContainer">
                        <div className="roadTripsLink">Road Trip Videos</div>
                    </div>
                </Link>
                <Link to="/pages/planYourTrip">
                    <div className="navLinkContainer">
                        <div className="planningLink">Plan Your Trip</div>
                    </div>
                </Link>
                <Link to="/pages/about">
                    <div className="navLinkContainer">
                        <div className="aboutLink">About</div>
                    </div>
                </Link>
            </nav>
        
    )
}












// export default function NavBar({ user, setUser }) {

//   function handleLogOut() {
//     userService.logOut()
//     setUser(null)
//   }

//   return (
//     <nav>
//       <Link to="/orders">Order History</Link>
//       &nbsp; | &nbsp;
//       <Link to="/orders/new">New Order</Link>
//       <Link to="" onClick={handleLogOut}><h4>Log Out</h4></Link>
//       <h4>Welcome, {user.name}</h4>
//     </nav>
//   );
// }