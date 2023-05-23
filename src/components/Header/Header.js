import Nav from "../Nav/Nav"

export default function Header({user, setUser}) {

    console.log("Header thinks user is:", user)
    return(
        <header>
            <Nav user={user} setUser={setUser}/>
        </header>
        
    )
}