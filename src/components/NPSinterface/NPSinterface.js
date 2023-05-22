import { useState } from "react";
import NPSpopup from "../NPSpopup/NPSpopup";
import ImageCarousel from "../Carousel/Carousel"

export default function NPSinterface() {

    const apiKey = process.env.REACT_APP_API_KEY;


    const [ NPSpark, setNPSpark ] = useState({})

    const [ USstate, setUSstate ] = useState([{fullName: ""}])

    const [ isOpen, setIsOpen ] = useState(false)

    

    const stateSearch = async (searchTerm) => {
        try {
            //if no search term yet...
            if(!searchTerm){
                //Keep USstate value as empty string
                setUSstate("")
                return
            }
        // Query the API using the searchTerm provided by useState.
        const response = await fetch(
            `https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&stateCode=${searchTerm}`
        );
        // Store the api response data in a variable.
        const data = await response.json()
        // set the useState with the data variable.
        setUSstate(data);
        
        // If error, show error.
        }catch (error){
            console.error(error)
        }
    };

    const setPark = (selectedPark) => {
        setNPSpark(selectedPark)
        console.log(NPSpark)
    }

    const openPopup = (selectedPark) => {
        setNPSpark(selectedPark)
        setIsOpen(true)
        return(
            <NPSpopup chosenPark={selectedPark}/>
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        stateSearch(USstate.searchTerm)
    }

    const handleChange = (event) => {
        setNPSpark({})
        setUSstate({...USstate, [event.target.name]: event.target.value})
    }

    return(
        <div id="NPSWindow">
            <h3>Search for National Parks</h3>
            <div id="NPSUpper">By State:
                <form onSubmit={handleSubmit}>
                    <input list="states" name="searchTerm" onChange={handleChange} autoComplete="off"/>
                    <datalist id="states">
                        <option value="AL" />
                        <option value="AK" />
                        <option value="AZ" />
                        <option value="AR" />
                        <option value="CA" />
                        <option value="CO" />
                        <option value="CT" />
                        <option value="DE" />
                        <option value="FL" />
                        <option value="GA" />
                        <option value="HI" />
                        <option value="ID" />
                        <option value="IL" />
                        <option value="IN" />
                        <option value="IO" />
                        <option value="KS" />
                        <option value="KY" />
                        <option value="LA" />
                        <option value="ME" />
                        <option value="MD" />
                        <option value="MA" />
                        <option value="MI" />
                        <option value="MN" />
                        <option value="MS" />
                        <option value="MO" />
                        <option value="MT" />
                        <option value="NE" />
                        <option value="NV" />
                        <option value="NH" />
                        <option value="NJ" />
                        <option value="NM" />
                        <option value="NY" />
                        <option value="NC" />
                        <option value="ND" />
                        <option value="OH" />
                        <option value="OK" />
                        <option value="OR" />
                        <option value="PA" />
                        <option value="RI" />
                        <option value="SC" />
                        <option value="SD" />
                        <option value="TN" />
                        <option value="TX" />
                        <option value="UT" />
                        <option value="VT" />
                        <option value="VA" />
                        <option value="WA" />
                        <option value="WV" />
                        <option value="WI" />
                        <option value="WY" />
                    </datalist>
                    <input type="submit" />
                </form>
            </div>
            <div id="NPSLower">
                <div id="NPSInfoField">
                    <div id="NPSLowerLeft" className="NPSDisplay">
                        <h4 id="parksLabel">NPS Locations</h4>
                        {USstate?.data?.map((park, idx) => {  // If a US state has been selected, display all NPS locations within that US state.
                            return(
                                <div className="park" key={idx}>
                                    <h4 className="parkName">{park.fullName}</h4>
                                    <button onClick={() => {setPark(park)}}>Images</button>
                                    <span>   </span>
                                    <button onClick={() => {openPopup(park)}}>Select</button>
                                        
                                </div>
                                )
                            })}
                    </div>
                    <NPSpopup open={isOpen} onClose={() => setIsOpen(false)} chosenPark={NPSpark}/>
                    <div id="NPSLowerRight" className="NPSDisplay">
                        <h4 id="imagesLabel">{NPSpark.fullName} Images</h4>
                        <ImageCarousel images={NPSpark.images} />
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}



  /*
  keys {id, url, fullName, parkCode, description, latitude, longitude, latLong, activities, topics, 
    states, contacts, entranceFees, entrancePasses, 
    fees, directionsInfo, directionsUrl, operatingHours, addresses, images, weatherInfo, name, designation}
    */

    /* Old NPS image code from line ~144
     {NPSpark?.images?.map((image, idx) => {
                            return(
                                <img className="parkImg" key={idx} src={image.url} alt={`An image from ${NPSpark.fullName}`} />
                            )})
                        } 
                        */