import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import CarSus from '../assets/images/CarSus.jpg';
import Plane from '../assets/images/Plane.jpg';
import Drone from '../assets/images/Drone.jpg';
import FEA from '../assets/images/cab.jpg';
import accumulator from '../assets/images/accumulator.jpg';
import Temp from '../assets/images/Temp.jpg';
import Car from '../assets/images/Car.jpg';
import Truss from '../assets/images/Truss.png';
import '../assets/styles/Project.scss';


function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://sites.google.com/view/linefollowingcar/home?authuser=2" target="_blank" rel="noreferrer"><img src={Car} className="zoom" alt="thumbnail" width="100%" /></a>
                <a href="https://sites.google.com/view/linefollowingcar/home?authuser=2" target="_blank" rel="noreferrer"><h2>Line Followiing Car</h2></a>
                <p>Designed a line following car that can follow a line, stop when faced with an obstacle or finish line, begin when activated by a touchless sensor, and carry a load of 250g.</p>
            </div>
            <div className="project">
                <a href="https://sites.google.com/view/tempaturesensorbox/home?authuser=2" target="_blank" rel="noreferrer"><img src={Temp} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sites.google.com/view/tempaturesensorbox/home?authuser=2" target="_blank" rel="noreferrer"><h2>Temperature Sensor Box</h2></a>
                <p>Designed and developed a temperature sensor that can not only display the current temperature, but can also alert you when the room temperature changes.</p>
            </div>
            <div className="project">
                <a href="https://sites.google.com/view/control-arm-bracket/home?authuser=2" target="_blank" rel="noreferrer"><img src={FEA} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sites.google.com/view/control-arm-bracket/home?authuser=2" target="_blank" rel="noreferrer"><h2>Control Arm Bracket</h2></a>
                <p>Developed a Control Arm Bracket on SOLIDWORKS, and used FEA to determine if it was safe to use.</p>
            </div>
            <div className="project">
                <a href="https://sites.google.com/view/truss-design/home?authuser=2" target="_blank" rel="noreferrer"><img src={Truss} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sites.google.com/view/truss-design/home?authuser=2" target="_blank" rel="noreferrer"><h2>Acrylic Truss</h2></a>
                <p>Created a truss capable withstanding 57 oz, given restrictions, such as limited supplies and strict dimensions.</p>
            </div>
            <div className="project">
                <a href="https://sites.google.com/view/accumulator-cart/home?authuser=2" target="_blank" rel="noreferrer"><img src={accumulator} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sites.google.com/view/accumulator-cart/home?authuser=2" target="_blank" rel="noreferrer"><h2>Accumulator Cart</h2></a>
                <p>This is a accumulator cart, designed to lift the battery into the car for Terrier Motorsports.</p>
            </div>
            <div className="project">
                <a href="https://sites.google.com/view/quadplane/home?authuser=2" target="_blank" rel="noreferrer"><img src={Plane} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sites.google.com/view/quadplane/home?authuser=2" target="_blank" rel="noreferrer"><h2>QuadPlane</h2></a>
                <p>Currently in the works with Boston University UAV Club.</p>
            </div>
            <div className="project">
                <a href="https://sites.google.com/view/car-suspension/home?authuser=2" target="_blank" rel="noreferrer"><img src={CarSus} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sites.google.com/view/car-suspension/home?authuser=2" target="_blank" rel="noreferrer"><h2>Car Suspension</h2></a>
                <p>Currently in the works on improving the electric car with Boston University Terrier Motorsports.</p>
            </div>
            <div className="project">
                <a href="https://sites.google.com/view/drone-michael/home?authuser=2" target="_blank" rel="noreferrer"><img src={Drone} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sites.google.com/view/drone-michael/home?authuser=2" target="_blank" rel="noreferrer"><h2>Drone</h2></a>
                <p>Built drones from scratch, including soldering electronic components and assembling flight systems. Flying it over 200 feet above the air with consistent stability. </p>
            </div>
        </div>
    </div>
    );
}

export default Project;