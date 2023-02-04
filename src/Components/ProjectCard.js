import "./ProjectCard.css";
import { useState } from "react";

function ProjectCard(props) {
    const [hover, setHover] = useState({display: "none"});
    const [display, setDisplay] = useState({display: "block"});

    return (
        <div className="Project-card-container">
            <a href={props.href} className="Project-card" target={props.href === "#" ? "_self" : "_blank"} rel="noreferrer"
            onMouseEnter={
                () => {
                    setHover({display: "block"});
                    setDisplay({display: "none"});
                }
            }
            onMouseLeave={
                () => {
                    setHover({display: "none"});
                    setDisplay({display: "block"});
                }
            }>
                <div className="Project-card-display" style={display}>
                    <i className={props.icon}></i>
                    <h3 className="Project-title">{props.title}</h3>
                    <img className="Project-image" src={props.src} alt={props.alt} />
                </div>
                <div className="Project-card-hover" style={hover}>
                    <p className="Project-description">{props.description}</p>
                    <p className="Project-link">Click to see the repo</p>
                </div>
            </a>
        </div>
    );
}

export default ProjectCard;
