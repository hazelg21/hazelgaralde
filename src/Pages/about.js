
export default function AboutPage() {
    return (
        <div className="aboutDiv" id="page-about">
            {/* LOGO */}
            <div className="about-pic col-12 col-md-5">
                <div className="about-img">
                    <img className="about-logo" alt="hazel-logo" variant="top" src={require('../images/logos/logo-pink-nobg.png')}></img>
                </div>
            </div>

            {/* ABOUT ME */}
            <div className="about-me col-12 col-md-6">
                <h1 className="about-hazel">I'M HAZEL</h1>
                <p className="about-note">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at nisl et risus molestie sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque lorem sed tellus suscipit, eu pellentesque tortor finibus. Aliquam molestie lacus ac ante viverra, eget facilisis magna tempus.
                </p>
                {/* 
                <p className='about-note'>
                    I love coding! I have always been passionate about coding. The intricate logic behind it mesmerizes and encouragedme to learn more. I want to be a part of a company where I can contribute my knowledge.
                </p> 
                */}
                <a href="./Hazel-Garalde-CV.pdf" target="_blank" download>
                    <button id="about-btn">DOWNLOAD MY CV</button>
                </a>
            </div>


        </div>

    )
}