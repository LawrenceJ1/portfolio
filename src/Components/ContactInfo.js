import "./ContactInfo.css"
import { Card, Button } from "react-bootstrap";
import myPicture from "../Images/Me.jpeg";
import resume from "./Resume.pdf"

function ContactInfo() {
    return (
        <Card id="contact-card">
            <Card.Img variant="top" src={myPicture}/>
            <Card.Body>
                <Card.Title>Lawrence Ju</Card.Title>
                <Button id="card-button" href={resume} target="_blank">
                    Check out my Resume!
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ContactInfo;