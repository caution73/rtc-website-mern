import RequestForm from "../../components/RequestForm/RequestForm";
import RequestsNav from "../../components/RequestsNav/RequestsNav";
import RequestHistory from "../../components/RequestHistory/RequestHistory";


export default function Requests({user, setUser}) {
    return (
        <main className="requestsPage">  
            <RequestsNav user={user} setUser={setUser}/>   
            <h2>Which car should we feature next?</h2>
            <RequestForm user={user}/>
            <h4>We may contact you for this opportunity to collaborate!</h4>

            <RequestHistory user={user}/>
           
        </main>
    )
}