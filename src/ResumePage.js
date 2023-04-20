import resume from "./Components/Resume.pdf";
import { Chrono } from "react-chrono";
import "./ResumePage.css";

function ResumePage() {
    const items = [{
        title: "Jan. 2023 - Present",
        cardTitle: "Undergraduate Researcher",
        cardSubtitle: "Laboratory on Innovative Tech in Medical Ultrasound (LITMUS)",
        media: {
            name: "LITMUS",
            type: "IMAGE",
            source: {
                url: "https://i.ytimg.com/vi/b9YlYFKzq-I/maxresdefault.jpg",
            },
        },
        cardDetailedText: ["Developed an auto-encoder + CNN model to upscale image quality with the goal of reducing the " +
        "channel count on ultrasound probes by over 50% while maintaining high quality images.",
        "Technologies: Python, Scipy, Tensorflow, MatLab, Numpy, Matlplotlib"]
    }, {
        title: "Sept. 2022 - May 2026",
        cardTitle: "Bachelor's Of Computer Science (Co-op)",
        cardSubtitle: "University of Waterloo",
        media: {
            name: "University of Waterloo",
            type: "IMAGE",
            source: {
                url: "https://uwaterloo.ca/brand/sites/ca.brand/files/universityofwaterloo_logo_vert_bk.png",
            },
        },
        cardDetailedText: ["GPA: 3.93/4.", "An active member of the Computer Science Club, Chess Club, Badminton Club, Poker Club" +
        "as well as an avid rockclimber."]
    }, {
        title: "May 2022 - Aug. 2022",
        cardTitle: "Software Developer",
        cardSubtitle: "Canada Revenue Agency",
        media: {
            name: "Canada Revenue Agency",
            type: "IMAGE",
            source: {
                url: "https://wjm.s3.amazonaws.com/cpam/uploads/203_1652727003.png",
            },
        },
        cardDetailedText: ["Revamped CRA software using Java and Angular, as well as completed 100+ tickets " +
        "related to regression testing and automation.",
        "Technologies: Java, Angular, Java Swing, JUnit, Jira, Git/Github"]
    }, {
        title: "Sept. 2021 - Aug.2022",
        cardTitle: "Honours Bachelor's of Computer Science",
        cardSubtitle: "Carleton University",
        media: {
            name: "Carleton University",
            type: "IMAGE",
            source: {
                url: "https://carleton.ca/webservices/wp-content/uploads/logo-th.jpg",
            },
        },
        cardDetailedText: ["GPA: 3.98/4.",
        "A member of the Science of Imagination Lab (A cognitive science research group).",
        "Transferred to UWaterloo as a result of exceptional academic standing."]
    }, {
        title: "Feb. 2021 - Aug. 2021",
        cardTitle: "Software Engineer",
        cardSubtitle: "Digitera.Interactive",
        media: {
            name: "Digitera Interactive",
            type: "IMAGE",
            source: {
                url: "https://i.ytimg.com/vi/EdrrZgTCThI/maxresdefault.jpg",
            },
        },
        cardDetailedText: ["Engineered web scraping bots through Selenium and Beautiful Soup, obtaining 10000+ posts " +
        "which were fed into machine learning models, generating predictions to aid client's in growing their businesses.",
        "Technologies: Python, Selenium, Beautiful Soup, Tensorflow, Pandas, Matplotlib"]
    }];

    return (
        <section id="Resume" className="Resume-page">
            <h1 className="Resume-header">
                Resume
                <a className="Resume-official" href={resume} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-download" />
                </a>
            </h1>
            <div className="Timeline-container">
                <Chrono 
                    items={items} 
                    textOverlay
                    mode="VERTICAL_ALTERNATING"
                    theme={{
                        primary: "#000000",
                        secondary: "#f2e9e4",
                        cardBgColor: "#ffffff",
                        titleColor: "#000000",
                        titleColorActive: "#657490",
                    }}
                    cardHeight={300}
                />
            </div>
        </section>
    );
}

export default ResumePage;