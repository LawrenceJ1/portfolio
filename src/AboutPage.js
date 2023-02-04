import './AboutPage.css'
import ContactInfo from './Components/ContactInfo';

function AboutPage() {
    return (
      <section id="About" className="About">
        <header className="About-header">
            ABOUT ME
        </header>
        <div className="About-description">
            <div className="About-text">
            <div className="About-title">
                Looking for a summer 2023 internship! 
            </div>
            I'm a second-year CS student at the University of Waterloo, 
            who is driven by my passion for problem-solving and connecting with new people. 
            I have honed my programming skills through various roles, such as front-end developer, 
            data analyst, IT developer, and AI researcher.<br /> <br />
            Skills: Python, Java, C++, C, JavaScript, React, Angular, MATLAB, R <br/>
            Technologies: TensorFlow, PyTorch, OpenCV, NumPy, Pandas, Matplotlib, Selenium, BeautifulSoup, Git, Linux <br/>
            </div>
            <ContactInfo />
        </div>
      </section>  
    );
}

export default AboutPage;