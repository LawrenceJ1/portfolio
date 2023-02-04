import { Container, Col, Row } from "react-bootstrap";
import resume from "./Components/Resume.pdf";
import ResumeCard from "./Components/ResumeCard";
import "./ResumePage.css";

function ResumePage() {
    return (
        <section id="Resume" className="Resume-page">
            <h1 className="Resume-header">
                Resume
            </h1>
            <Container>
                <Row>
                    <Col>
                        <h2 className="Resume-left-header">Education</h2>   
                        <ResumeCard 
                        title="Bachelor's Of Computer Science (Co-op)"
                        company="University of Waterloo"
                        date="Sept. 2022 - May 2026"
                        description={'GPA: 3.93/4.\nAn active member of the Computer Science Club, Chess Club,' +
                        'Badminton Club, Poker Club, as well as an avid rockclimber.'}/>  
                        <ResumeCard 
                        title="Honours Bachelor's of Computer Science"
                        company="Carleton University"
                        date="Sept. 2021 - Aug. 2022"
                        description={'GPA: 3.98/4.\nA member of the Science of Imagination Lab (A cognitive science research group).' +
                        '\nTransferred to UWaterloo as a result of exceptional academic standing.'}/>                  
                    </Col>
                    <Col>
                        <h2 className="Resume-right-header">Experience</h2>
                        <ResumeCard 
                        title="Undergraduate Researcher"
                        company="Laboratory on Innovative Tech in Medical Ultrasound"
                        date="Jan. 2023 - Present"
                        description={'Developing an auto-encoder + CNN model to upscale image quality with the goal of reducing'
                        + ' the channel count of ultrasound probes by over 50%.\nTechnologies: Python, Scipy, Tensorflow, MatLab'}/>
                        <ResumeCard 
                        title="IT Developer"
                        company="Canada Revenue Agency"
                        date="May. 2022 - Aug. 2022"
                        description={'Revamped CRA software using Java and Angular, as well as completed 100+ tickets ' +
                        'related to regression testing and automation.\nTechnologies: Java, Angular, JFrame, JUnit, Jira, Agile methodology, Git/Github'}/>
                        <ResumeCard 
                        title="Data Analyst"
                        company="Digitera.Interactive"
                        date="Feb. 2021 - Aug. 2021"
                        description={'Engineered web scraping bots through Selenium and Beautiful Soup, obtaining 10000+ posts '+
                        'which were fed into machine learning models, generating predictions to aid client\'s in growing their businesses.'
                        + '\nTechnologies: Python, Selenium, Beautiful Soup, Tensorflow, XML and CSV'}/>
                    </Col>
                </Row>
            </Container>
            <a className="Resume-official" href={resume} target="_blank" rel="noreferrer">
                Official Resume
                <i className="fa-solid fa-download" />
            </a>
        </section>
    );
}

export default ResumePage;