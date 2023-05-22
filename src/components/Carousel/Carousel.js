import { useState } from "react";

export default function ImageCarousel({images}){

    const [currentImage, setCurrentImage] = useState(0)
    
    let length = images && images.length;

    const nextSlide = () => {  // Switch the displayed image to the next image in the array.
        setCurrentImage(currentImage === length-1 ? 0 : currentImage + 1);
    }

    const prevSlide = () => {  // Switch the displayed image to the previous image in the array.
        setCurrentImage(currentImage === 0 ? length-1 : currentImage - 1)
    }

    console.log("images", images)
    console.log(typeof images)
    //console.log(images && images.length)
    console.log(currentImage)
    //console.log(length)
    if(images){
        return(
            <section className="imgCarouselContainer">
                <div className="imageArrow" id="imageArrowLeft" onClick={prevSlide}>&lt;</div>
                <div className="imageArrow" id="imageArrowRight" onClick={nextSlide}>&gt;</div>
                {images?.map((image, idx) => {  // For each image, create the image and check to see if it should be displayed as current Image.
                    return(
                        <div className={idx === currentImage ? 'imgActive' : 'imgInactive'} key={idx}>
                            {idx === currentImage && (<img className="carouselImg" src={image.url} alt="Super awesome thing" />)}
                            
                        </div>
                        
                )
            })}
            </section>
            
        )
    }
    
}