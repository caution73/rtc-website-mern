import { useEffect } from "react"
import { useState, setState } from 'react'
import * as carsApi from '../../utilities/cars-api'


// use useeffect to fetch from database
// export const getRequests = async () => {
//     try{
//         const foundRequests = await carsApi.getAll({})
//         setRequests(foundRequests)
//     }catch(err){
//     }
// }

export default function RequestHistory(user) {
    const [requests, setRequests] = useState()

 
    
// useEffect(() => {
//     getRequests()
// }, [])

    console.log("User:",user)
    return(
        <div className="requestHistory">
            <div className="historyField">
                {user.user.email}
            </div>
            
        </div>
       
    )
}