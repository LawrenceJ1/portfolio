import "./ContactInfo.css"
import { Card, Button } from "react-bootstrap";
import myPicture from "./Me.jpeg";
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
        // <div class="col-lg-5 col-xl-4">
        //     <div class="ps-lg-4">
        //         <ul class="list-style-2 ">
        //             <li>
        //                 <span class="fw-600 me-2">Name:</span>
        //                 Simone Olivia
        //             </li>
        //             <li>
        //                 <span class="fw-600 me-2">Email:</span>
        //                 <a href="mailto:chat@simone.com">chat@simone.com</a>
        //             </li>
        //             <li>
        //                 <span class="fw-600 me-2">Age:</span>
        //                 28
        //             </li>
        //             <li class="border-0">
        //                 <span class="fw-600 me-2">From:</span>
        //                 Los Angeles, California
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    );
}

export default ContactInfo;