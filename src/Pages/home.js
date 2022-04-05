export default function HomePage() {
    return (
        <div className="homeDiv" id="page-home">
            {/* HELLO */}
            <div className="home-main col-12 col-md-5">
                <h3 className="home-hello">HELLO</h3>
                <h1 className="home-hazel">I'M HAZEL</h1>
                <h2 className="home-software">SOFTWARE ENGINEER</h2>
                <button className="home-btn">MY WORKS &gt;&gt;</button>
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