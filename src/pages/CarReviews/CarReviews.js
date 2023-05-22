import carReviews from "../../assets/CarReviewsData"
import VideoCarousel from "../../components/VideoCarousel/VideoCarousel"

export default function CarReviews() {

    return (
        <main className="carReviewsMain">     
            <h2>Car Reviews</h2>
            <div>
                <p>Check out our collection of car reviews over the years!</p>
            </div>
            <div className="carReviewCarousel">
                <VideoCarousel videos={carReviews} />
            </div>
            
        </main>
    )
}