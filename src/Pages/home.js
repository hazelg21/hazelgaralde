import { Link } from 'react-scroll';
export default function HomePage() {
    return (
        <div className="homeDiv" id="page-home">
            {/* HELLO */}
            <div className="home-main col-12 col-md-5">
                <h3 className="home-hello">HELLO</h3>
                <h1 className="home-hazel">I'M HAZEL</h1>
                <h2 className="home-software">SOFTWARE ENGINEER</h2>
                <Link to="page-project" smooth={true} duration={500}>
                    <button className="home-btn" to="page-project">MY WORKS &gt;&gt;</button>
                </Link>
            </div>

            {/* IMAGE */}
            <div className="home-pic col-12 col-md-6">
                <div className="home-img">
                    <img className="home-logo" alt="hazel-picture" variant="top" src={require('../images/img-home.jpg')}></img>
                </div>
            </div>
        </div>
    )
}