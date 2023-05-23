import { Link } from "react-router-dom";


export default function Nav({ user, setUser }) {

    console.log("Nav thinks user is:", user)
  return (
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
      {user ? (
        <Link to="/pages/requests">
          <div className="navLinkContainer">
            <div className="requestsLink">Request Car Content</div>
          </div>
        </Link>
      ) : (
        <Link to="/pages/login" setUser={setUser}>
          <div className="navLinkContainer">
            <div className="authLink">Request Car Content</div>
          </div>
        </Link>
      )}
    </nav>
  );
}
