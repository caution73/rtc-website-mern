import { useState } from "react";

export default function VideoCarousel({videos}){

    const [current, setCurrent] = useState(0)
    
    let length = videos && videos.length;

    const nextSlide = () => {
        setCurrent(current === length-1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current - 1)
    }

    //testing
    //console.log("videos", videos)
    //console.log(typeof videos)
    //console.log(videos && videos.length)
    //console.log(current)
    //console.log(length)
    //console.log("videoEl", videos[0].videoElement)
    if(videos){
        return(
            <section className="vidCarouselContainer">
                <div className="imageArrow" id="vidArrowLeft" onClick={prevSlide}>&lt;</div>
                <div className="imageArrow" id="vidArrowRight" onClick={nextSlide}>&gt;</div>
                {videos?.map((video, idx) => { // For each video in the list, create the video element, then display the one that should be displayed.
                    return(
                        <div className={idx === current ? 'imgActive' : 'imgInactive'} key={idx}>
                            {idx === current && (<iframe {...video.videoElement} />)}
                        </div>
                    )
                })}

            </section>
            
        )
    }
    
}

/*
 {videos?.map((video, idx) => {
                    return(
                        <div className={idx === current ? 'imgActive' : 'imgInactive'} key={idx}>
                            {idx === current && (video.videoElement)}
                            
                        </div>
                        
                    )
                })}
                */