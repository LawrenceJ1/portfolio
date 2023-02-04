import "./MainPage.css"

function MainPage() {
    return (
    <section id="Main" className="Main">
        <p className="Main-name">
          Weclome to my Website<br/>
        </p>
        <p className="Main-description">
          I'm a passionate software engineer who occasionally goes outside.
        </p>
        <a
          className="Main-link"
          href="mailto:lawrencejuottawa@email.com" 
          target="_blank" 
          rel="noreferrer"
        >
          Hire Me
        </a>
        <a href="#Projects" className="Main-arrow">
          <span className="Main-arrow-down" />
        </a>
    </section>
    );
}

export default MainPage;