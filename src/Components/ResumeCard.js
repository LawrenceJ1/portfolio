import "./ResumeCard.css";

function ResumeCard(props) {
    return (
        <div className="Resume-card-container rounded">
            <h3 className="Resume-card-title">{props.title}</h3>
            <p className="Resume-card-company">{props.company}</p>
            <p className="Resume-card-date">{props.date}</p>
            <p className="Resume-card-description">{props.description}</p>
        </div>
    );
}

export default ResumeCard;