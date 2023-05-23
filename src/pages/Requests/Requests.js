import RequestForm from "../../components/RequestForm/RequestForm";
import RequestsNav from "../../components/RequestsNav/RequestsNav";


export default function Requests({user, setUser}) {
    return (
        <main className="requestsPage">  
            <RequestsNav user={user} setUser={setUser}/>   
            <h2>Whaddya want?</h2>
            <RequestForm />
           
        </main>
    )
}