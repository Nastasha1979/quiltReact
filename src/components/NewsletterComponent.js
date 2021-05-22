import React from "react";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";


function Newsletter() {
    return(
        <React.Fragment>
            <div className="container-fluid newsletterStyles py-5">
                <div className="row">
                    <div className="col-12 thirdFont text-center my-4">
                        <h2 className="mainHeader">Newsletter</h2>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-8 m-auto text-center text-muted secondaryFont">
                        <h5 className="subHeader">Sign-up for our free newsletter to get tips, articles, and course notifications straight to you inbox. It's like your own personal quilt instructor.</h5>
                    </div>
                </div>
                <Row form className="justify-content-center mx-auto">
                    <Col lg={3}>
                        <FormGroup>
                            <Input type="text" name="fname" id="fname" placeholder="First Name" />
                        </FormGroup>
                    </Col>
                    <Col lg={3}>
                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="Email" required />
                        </FormGroup>   
                    </Col>
                    <Col lg={3}>
                        <Button type="submit" className="btn btn-primary">Sign Up</Button>
                    </Col> 
                </Row>
            </div>
        </React.Fragment>
    );
}

export default Newsletter;
