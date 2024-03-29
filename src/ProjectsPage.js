import "./ProjectsPage.css";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./Components/ProjectCard";
import Minesweeper from "./Images/Minesweeper.jpg";
import Space from "./Images/Space.png";
import IPTracker from "./Images/IPTracker.jpg";
import Sudoku from "./Images/Sudoku.jpg";

function ProjectsPage() {
    return (
        <section id="Projects" className="Projects-page">
            <h1 className="Projects-header">Projects</h1>
            <Container>
                <Row>
                    <Col>
                        <ProjectCard 
                        href="https://github.com/LawrenceJ1/minesweeper-bot"
                        title="Minesweeper Bot"
                        icon="fa-solid fa-land-mine-on"
                        description="A bot that can beat games of minesweeper on minsweeperonline.com. 
                        Built using Python, PyAutoGui (a computer vision library), and a lot of math."
                        alt="Minesweeper Project"
                        src={Minesweeper}/>
                        <ProjectCard
                        href="https://github.com/LawrenceJ1/space-tourism"
                        title="Space Tourism"
                        icon="fa-solid fa-rocket"
                        description="A website that displays information about space tourism. Built using React and
                        React Router. Deployed on Github pages."
                        alt="Space Tourism Project"
                        src={Space}/>
                    </Col>
                    <Col>
                        <ProjectCard 
                        href="https://github.com/LawrenceJ1/ip-tracker"
                        title="IP Tracker"
                        icon="fa-solid fa-network-wired"
                        description="An IP Tracker that displays the users IP Address, Location, Timezone, and 
                        ISP. Created using React, Leaflet, and GeoIpAPI. Deployed on Github pages."
                        alt="IPTracker Project"
                        src={IPTracker}/>
                        <ProjectCard
                        href="#"
                        title="Coming Soon"
                        icon="fa-solid fa-spinner"
                        description="More projects coming soon!"/>
                    </Col>
                    <Col>
                        <ProjectCard
                        href="https://github.com/LawrenceJ1/sudoku-solver"
                        title="Sudoku Solver"
                        icon="fa-solid fa-table-cells"
                        description="A Sudoku Solver that can solve any solvable Sudoku puzzle through backtracking. Built 
                        using Python and Tkinter."
                        alt="Sodoku Solver"
                        src={Sudoku}/>
                        <ProjectCard
                        href="#"
                        title="Coming Soon"
                        icon="fa-solid fa-spinner"
                        description="More projects coming soon!"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ProjectsPage;