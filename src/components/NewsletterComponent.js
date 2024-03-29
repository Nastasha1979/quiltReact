import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormFeedback, Row, Col, Container } from "reactstrap";


class Newsletter extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            fName: "",
            touched: {
                email: false
            }
        }
        
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSignUp(event) {
        alert(`First Name: ${this.state.fname}  Email: ${this.state.email}`);
        event.preventDefault();
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate(email) {
        const errors = {
            email: ""
        };

        if(this.state.touched.email && !email.includes("@")){
            errors.email = "Email should contain a @";
        }

        return errors;
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        const errors = this.validate(this.state.email);
        return(
            <React.Fragment>
                <Container fluid className="newsletterStyles py-5" id="newsletterComp">
                    <Row>
                        <Col xs="12" className="text-center my-4">
                            <h2 className="mainHeader">Newsletter</h2>
                        </Col>
                    </Row>
                    <Row className="pb-5">
                        <Col xs="8" className="m-auto text-center text-muted">
                            <h5 className="subHeader">Sign-up for our free newsletter to get tips, articles, and course notifications straight to you inbox. It's like your own personal quilt instructor.</h5>
                        </Col>
                    </Row>
                    <Form className="justify-content-center mx-auto" onSubmit={this.handleSignUp}>
                        <Row className="justify-content-center">
                            <Col lg={3}>
                                <FormGroup>
                                    <Label className="d-none" htmlFor="fname" />
                                    <Input type="text" name="fname" id="fname" placeholder="First Name" 
                                        value={this.state.fname} 
                                        onChange={this.handleInputChange}
                                        />
                                </FormGroup>
                            </Col>
                            <Col lg={3}>
                                <FormGroup>
                                    <Label className="d-none" htmlFor="email" />
                                    <Input type="text" name="email" id="email" placeholder="Quilter@Email.com" 
                                        value={this.state.email}
                                        onBlur={this.handleBlur("email")}
                                        invalid={errors.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>   
                            </Col>
                            <Col lg={3}>
                                <Button type="submit" value="submit" className="btn btn-primary">Sign Up</Button>
                            </Col>
                        </Row> 
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}

export default Newsletter;
