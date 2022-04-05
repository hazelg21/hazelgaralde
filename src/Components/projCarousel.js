import { Carousel } from "react-bootstrap"

export default function ProjCarousel({ projects }) {

    return (
        // <h1>hello</h1>
        <Carousel className="proj-carousel">
            {projects.map((proj, idx) => {
                return (
                    < Carousel.Item key={idx}>
                        <div className="proj-ImgDiv">
                            <a className="contactIcons" href={proj.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    className="proj-Img d-block"
                                    src={require(`../images/projects/${proj.logo}`)}
                                    alt={proj.name}
                                />
                            </a>
                        </div>
                        <Carousel.Caption className="proj-caption">
                            <h3 className="proj-name">{proj.name.toUpperCase()}</h3>
                            {/* <p className="proj-desc">{proj.desc}</p> */}
                            <p className="proj-desc">{proj.f_end}, {proj.b_end}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel >
    )
}