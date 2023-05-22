import {useState, setState} from "react"
import TripArticle from "../../components/TripArticle/TripArticle"

export default function RoadTrips() {
    const [roadTrips, setRoadTrips] = useState()

    const trips = [
        {
            videoTitle: "RoadTrip: Maryland to Texas (Part I)",
            destination: "Texas",
            text: "In part 1 of our first feature road trip, we load up the Focus ST with all of our belongings to move from the DMV to Texas!",
            videoElement: {
                width:"560",
                height:"315",
                src:"https://www.youtube.com/embed/EttIOJTi6DQ",
                title:"YouTube video player",
                frameborder:"0",
                allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: true
            }
        },
        {
            videoTitle: "RoadTrip: Maryland to Texas (Part II)",
            destination: "Texas",
            text: "In part 2 of our first feature road trip, we continue the journey from DMV to Texas with a brief detour along a scenic Tennessee route!",
            videoElement: {
                width:"560",
                height:"315",
                src:"https://www.youtube.com/embed/OG6L8yp_xoU",
                title:"YouTube video player",
                frameborder:"0",
                allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: true
            }
        },
        {
            videoTitle: "RoadTrip to Canyonlands",
            destination: "Canyonlands",
            text: "In the final road trip featuring our beloved Focus ST, we had the opportunity to explore the gorgeous Canyonlands National Park (with a quick stop at Mesa Verde, too)!",
            videoElement: {
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/-rPsU4fbdHQ",
                title:"YouTube video player",
                frameborder:"0",
                allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                allowFullScreen: true
            }
        }
    ]

    return (
        <main className="roadTripsMain">     
            <h2>Road Trips</h2>
            <div>
                <p>Check out our content featuring road trips around the U.S.A.!</p>
            </div>
            {trips.map((trip, idx) => {
                return(
                <TripArticle key={idx} {...trip}/>
            )})
        }
            
        </main>
    )
}