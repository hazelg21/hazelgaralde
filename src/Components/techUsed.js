import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

export default function TechUsed() {

    const [techView, setTechView] = useState([])

    const techArray = [{
        logo: 'logo-react.png',
        name: 'React'
    }, {
        logo: 'logo-html5.png',
        name: 'HTML5'
    }, {
        logo: 'logo-css3.png',
        name: 'CSS'
    }, {
        logo: 'logo-nodejs.png',
        name: 'NodeJS'
    }, {
        logo: 'logo-expressjs.png',
        name: 'ExpressJS'
    }, {
        logo: 'logo-rest.png',
        name: 'Rest'
    }, {
        logo: 'logo-git.png',
        name: 'Git'
    }, {
        logo: 'logo-github.png',
        name: 'Github'
    }, {
        logo: 'logo-gitlab.png',
        name: 'Gitlab'
    }, {
        logo: 'logo-javascript.png',
        name: 'Javascript'
    }, {
        logo: 'logo-postman.png',
        name: 'Postman'
    }, {
        logo: 'logo-heroku.png',
        name: 'Heroku'
    }, {
        logo: 'logo-bootstrap.png',
        name: 'Bootstrap'
    }, {
        logo: 'logo-mongodb.png',
        name: 'MongoDB'
    }]

    useEffect(() => {
        setTechView(techArray.map((tech, idx) => {
            return (
                <div key={idx} className="card">
                    <div className='cardImgDiv'>
                        <img className="cardImg" alt={tech.name} variant="top" src={require(`../images/tools/${tech.logo}`)}></img>
                    </div>
                    <p className='cardName'>{tech.name}</p>
                </div>
            )
        }))
    }, [])


    return (
        <div className="techUsedDiv">
            {techView}
        </div>

    )
}