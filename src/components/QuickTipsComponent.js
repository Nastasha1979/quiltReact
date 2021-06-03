import React, { useState } from "react";
import { Fade, Container, Row, Col } from 'reactstrap';


function GetTips({quickTip}) {
    const [isOpen, setIsOpen] = useState(false);
    const [fadeIn] = useState(true);


    return(
        <React.Fragment>
            <Fade in={fadeIn}>
                <div className="accordion-item" key={quickTip.key}>
                    <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                        <div>{quickTip.topTitle}  {isOpen ? "-" : "+"}</div>
                    </div>
                    {isOpen && 
                        <div className="accordion-content quickTipsInner py-2">{quickTip.innerTitle}</div>
                    }
                    {isOpen && 
                        <div className="accordion-content">{quickTip.videoFrame}</div>
                    }
                    {isOpen &&
                    <div className="d-block d-md-none text-center">
                        <a href={quickTip.videoLink} target="_blank" rel="noreferrer">Click Link for Video</a>
                    </div>
                    }
                </div>
            </Fade>
        </React.Fragment>
    );
}


function QuickTips(props) {

    const newAccord = props.quickTips.map(quickTip => {
        return (
            <GetTips quickTip={quickTip} />
        );
    })
    
        return(
            <React.Fragment>
                <Container fluid className="pb-3" id="quickTipsComp">
                    <Row>
                        <Col xs="12" className="text-center my-4">
                            <h2 className="mainHeader">Quick Tips</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="8" className="m-auto text-center text-muted pb-5">
                            <h5 className="subHeader">Need some quick help? Browse our collection of hand-picked videos to help you cut through those rough patches.</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12">
                            <div className="accordion quickTipsStyles">
                                {newAccord}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

        );

}

export default QuickTips;