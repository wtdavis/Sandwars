import "./hero.css"
import "/assets/excavator_swamp.jpg"

function Hero () {
    return (
        <>
        <div className="hero">
            <div className="hero-banner-container">
                <div id="test"> incredible</div>
                <div className="hero-banner-text-container">
                    <p className="hero-line hero-banner-line hero-banner-line-0">Stop</p>
                    <p className="hero-line hero-banner-line hero-banner-line-1">Corporate</p>
                    <p className="hero-line hero-banner-line hero-banner-line-1">Soil</p>
                    <p className="hero-line hero-banner-line hero-banner-line-1">Destruction</p>
                </div>
                {/* <img className="large-image hero-banner-image" src="/assets/cesspool.jpg"/>  */}
            </div>
            <div className="hero-ask-container">
                <p className="hero-line hero-ask-line hero-ask-line-0">Developers are destroying the ancient sandy soil of Southeastern Massachusetts.</p>
                <p className="hero-line hero-ask-line hero-ask-line-1">Sand mining, solar-farm clearcutting, and reckless development will destroy the globally rare Pine Barrens ecosystem forever.</p> 
                <p className="hero-line hero-ask-line hero-ask-line-2">We must save them. Will you help?</p>
            </div>
        </div>
        </>
    )


}

export default Hero