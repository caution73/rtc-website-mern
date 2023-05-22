import NPSinterface from "../../components/NPSinterface/NPSinterface";

export default function PlanYourTrip() {
    return (
        <main className="planYourTripMain">     
            <h2>Let's plan your trip!</h2>
            <div className="planTripText">
                <p>One of the most exciting parts of a well-planned road trip is the amazingly beautiful sights along your route! 
                We strongly recommend that you take some time to stop at a National Park/Monument on your next road trip, even 
                if it's a bit of a detour. We promise it's worth it!
                </p>
            </div>
            
            <NPSinterface />
        </main>
    )
}