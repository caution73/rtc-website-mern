
//The
export default function Home() {
    return (
        <main className="homeTrueMain">  
           <video autoPlay muted loop id="myVideo" src="/RTC-Home.mp4" type="video/mp4">
                    </video>
            <div id="homeMain">                
            </div>
            <div id="homeText">
                    <div id="logoContainer">
                        <img id="rtcLogo" src="/rtcLogo.png" alt="RTC Logo"/>
                    </div>
                    <h2>Welcome to RoadTripCentral!</h2>
                    <p>Check out our latest - and best - video of all time!</p>
                    <div className="frame">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/lGdMJ4C9Wdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    
                    
            </div>
        </main>
    )
}

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/J2yfW5ff6nw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<video autoPlay muted loop id="myVideo" src="/carsandcantina 11-2-19.mp4" type="video/mp4">
                    </video>   */