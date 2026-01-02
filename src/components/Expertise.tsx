import React from "react";
import '@fortawesome/free-regular-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import videoFile from './video.mp4';

function Expertise() {
    return (
    <div className="container" id="machine shop">
        <div className="skills-container">
            <h1>Machine Shop</h1>
            <div className="skills-grid">
                <div className="skill">
                    <img src="https://i.ibb.co/rKP05J4F/TIG-Welding.png" alt="TIG Welding" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}/>
                    <h3>TIG Welding</h3>
                    <p>Semester Welding Training</p>
                </div>

                <div className="skill">
                    <img src="https://i.ibb.co/93sPV032/IMG-3553.jpg" alt="Manual Mill" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }}/>
                    <h3>Manual Mill</h3>
                    <p>Completed handful of personal projects for clubs and classes </p>
                </div>

                <div className="skill">
                    <img src="https://i.ibb.co/ym5Gz1Bc/IMG-4735.jpg" alt="Laser Cutting" style={{ width: "65%", height: "250px", objectFit: "cover", borderRadius: "8px" }}/>
                    <h3>Laser Cutting</h3>
                    <p>Laser Cutting Training</p>
                </div>

                <div className="skill">
                    <img src="https://i.ibb.co/ShbScxR/IMG-4737.jpg" alt="Band Saw" style={{ width: "75%", height: "250px", objectFit: "cover", borderRadius: "8px" }}/>
                    <h3>Band Saw</h3>
                    <p>Operated a band saw to make precise cuts for projects</p>
                </div>

                <div className="skill">
                    <video width="100%" height="250px" controls autoPlay muted loop> 
                        <source src={videoFile} type="video/mp4" />
                    </video>
                    <h3>3D Printing</h3>
                    <p>Print various projects through common software and printers such as Bambu Labs</p>
                </div>

                <div className="skill">
                    <img src="https://i.ibb.co/ZzffPpJS/IMG-4748.jpg" alt="Band Saw" style={{ width: "75%", height: "250px", objectFit: "cover", borderRadius: "8px" }}/>
                    <h3>CNC Mill</h3>
                    <p>Designed and built projects. Comfortable with changing tools and Fusion 360</p>
                </div>
                <div className="skill">
                    <img src="https://i.ibb.co/vvKqrcXG/Brake.jpg" alt="Brake" style={{ width: "75%", height: "350px", objectFit: "cover", borderRadius: "8px" }}/>
                    <h3>Brake Machine</h3>
                    <p>Operated a brake machine.</p>
                </div>
                <div className="skill">
                    <img src="https://i.ibb.co/gbgXSDbr/IMG-5175.jpg" alt="Brake" style={{ width: "75%", height: "350px", objectFit: "cover", borderRadius: "8px" }}/>
                    <p>Engineered using a drill press, CNC Lathe, Injection molding, Laser Cutting, and CNC Mill.</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;