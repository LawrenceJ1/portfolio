import "./MainPage.css"

function MainPage() {
    return (
    <div className="Main">
      <header className="Main-header">
        <p className="Main-name">
          Weclome<br/>
        </p>
        <p className="Main-description">
          INSERT DESCRIPTION
        </p>
        <a
          className="Main-link"
          href="https://www.linkedin.com/in/lawrence-ju-5715111b6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me
        </a>
      </header>
    </div>
    );
}

export default MainPage;