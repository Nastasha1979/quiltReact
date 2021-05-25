import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";


class Newsletter extends Component {
    constructor(props){
        super(props);
        
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(event) {
        alert(`First Name: ${this.fname.value}  Email: ${this.email.value}`);
        event.preventDefault();
    }

    render() {
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
                <Form className="justify-content-center mx-auto" onSubmit={this.handleLogin}>
                    <Row className="justify-content-center">
                        <Col lg={3}>
                            <FormGroup>
                                <Label className="d-none" htmlFor="fname" />
                                <Input type="text" name="fname" id="fname" placeholder="First Name" 
                                innerRef={input => this.fname = input} />
                            </FormGroup>
                        </Col>
                        <Col lg={3}>
                            <FormGroup>
                                <Label className="d-none" htmlFor="email" />
                                <Input type="email" name="email" id="email" placeholder="Email" required 
                                innerRef={input => this.email = input}/>
                            </FormGroup>   
                        </Col>
                        <Col lg={3}>
                            <Button type="submit" value="submit" className="btn btn-primary">Sign Up</Button>
                        </Col>
                    </Row> 
                </Form>
            </div>
        </React.Fragment>
    );
    }
}

export default Newsletter;
