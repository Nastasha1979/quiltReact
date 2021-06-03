import React, { useState } from "react";
import { Fade, Container, Row, Col } from 'reactstrap';


function GetFAQ({faq}) {
    const [isOpen, setIsOpen] = useState(false);
    const [fadeIn] = useState(true);

    return(
        <React.Fragment>
            <Fade in={fadeIn}>
                <div className="accordion-item" key={faq.key}>
                    <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                        <div>{faq.question} {isOpen ? "-" : "+"}</div>
                    </div>
                    {isOpen && 
                        <div className="accordion-content faqInner py-2">{faq.answer}</div>
                    }  
                </div>
            </Fade>
        </React.Fragment>
    );
}


function FrequentlyAsked(props) {
    const [isFirst, setFirst] = useState(true);

    const toggleFAQ = () => setFirst(!isFirst);

    const facts = props.faqs.filter(faq => faq.key < 4).map(faq => {
        return (
            <GetFAQ faq={faq} />
        );
    })

    const facts2 = props.faqs.filter(faq => faq.key >= 4).map(faq => {
        return (
            <GetFAQ faq={faq} />
        );
    })
    
    return(
        <React.Fragment>
            <Container fluid className="pb-3" id="FAQComp">
                <Row>
                    <Col xs="12" className="text-center my-4">
                        <h2 className="mainHeader">Frequently Asked Questions</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs="8" className="m-auto text-center text-muted pb-5">
                        <h5 className="subHeader">Check our FAQ's for answers to commonly asked questions</h5>
                    </Col>
                </Row>                             
                    <Row>
                        <Col xs="12">
                            { isFirst ? 
                                <div className="accordion faqStyles">
                                    {facts}
                                </div>
                            :
                                <div className="accordion faqStyles">
                                    {facts2}
                                </div>
                            }
                        </Col>
                    </Row>                                                                
                <Row className="justify-content-center">
                    <button href="" className="btn btn-lg my-3" onClick={toggleFAQ}>See More</button>
                </Row> 
            </Container>
        </React.Fragment>

    );    

}

export default FrequentlyAsked;