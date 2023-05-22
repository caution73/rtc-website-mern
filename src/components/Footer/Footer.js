export default function Footer() {
    return(
        <footer>
            <h4>Contact Us!</h4>
            <p>Email: roadtripcentral@gmail.com</p>
            <p>Fake Phone: 123-456-7890</p>
            <div id="socialLinks">
                <div id="socialUpper">Follow us on social media!</div>
                <div id="socialLower">
                    <a href="https://www.instagram.com/devin.roadtripcentral/">
                        <img className="socialIcon" src="/Instagram.png" target="_blank" alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/devin.roadtripcentral/">
                        <img className="socialIcon" src="/facebook.png" target="_blank" alt="Facebook" />
                    </a>
                </div>
            </div>
        </footer>
        
    )
}