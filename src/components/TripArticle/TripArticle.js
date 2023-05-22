export default function TripArticle(props) {
    return(
        <article>
            <h4>{props.videoTitle}</h4>
            <iframe {...props.videoElement}></iframe>
            <div className="articleText">{props.text}</div>
        </article>
        
    )
}