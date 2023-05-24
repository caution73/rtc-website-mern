import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage.js";
import { getUser } from "./utilities/users-service";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import RoadTrips from "./pages/RoadTrips/RoadTrips";
import PlanYourTrip from "./pages/PlanYourTrip/PlanYourTrip";
import CarReviews from "./pages/CarReviews/CarReviews";
import Requests from "./pages/Requests/Requests";

function App() {
  // This code is for testing when setting up server and such.
  // async function testCall () {
  //   const res = await fetch("/test")
  //   const data = await res.json()
  //   console.log(data)
  // }

  // useEffect(() => {
  //   testCall()
  // }, [])
  const [user, setUser] = useState(getUser());
  console.log("current user:", user);

  return (
    <div className="App">
      
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/about" element={<About />} />
          <Route path="/pages/roadtrips" element={<RoadTrips />} />
          <Route path="/pages/carreviews" element={<CarReviews />} />
          <Route path="/pages/planyourtrip" element={<PlanYourTrip />} />
          {user ? (
            <Route path="/pages/requests" element={<Requests user={user} setUser={setUser}/> } />
          ) : (
            <Route path="/pages/login" element={<AuthPage setUser={setUser} /> } />
          )}
        </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
