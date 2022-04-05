import ProjCarousel from "../Components/projCarousel";
import ProjComp from "../Components/projects";
import { useEffect, useState } from "react";

export default function PortfolioPage() {

    const projectsArray = [{
        name: 'My Portfolio',
        f_end: "ReactJS",
        b_end: "NodeJS (For Sending Email)",
        desc: "This website! I have created this website as my portfolio. The design also allows mobile responsiveness!",
        link: "(This website)",
        logo: "myportfolio.JPG"
    }, {
        name: 'Hermosa',
        f_end: "ReactJS",
        b_end: "NodeJS, MongoDB",
        desc: "Hermosa is an Ecommerce website for selling hair products. This website was created using React, HTML, CSS and Javascript for front-end. For back-end, I used MongoDB, NodeJS and ExpressJS. I am still in the process of adding additional features, updating the design and mobile responsiveness.",
        link: "https://capstone3-vercel.vercel.app",
        logo: "hermosa.JPG"
    }, {
        name: 'Time Tracker App',
        f_end: "ReactJS",
        b_end: "NodeJS, MongoDB",
        desc: "Time Tracker App is one of my ongoing projects. When working for a project it is important to monitor the steps taken to fix issues and create features. The time tracker app will help determine which tag and activity took the most time todo.",
        link: "https://time-tracker-app-alpha.vercel.app",
        logo: "timetracker.JPG"
    },
    ]

    return (
        <div className="portfolioDiv" id="page-project">
            <div className="port-1">
                <h1 className="port-h1">PROJECTS</h1>
            </div>
            <div className="port-projects">
                <ProjCarousel projects={projectsArray} />
                <ProjComp projects={projectsArray} />
            </div>
        </div>
    )
}