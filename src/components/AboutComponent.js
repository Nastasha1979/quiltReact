import React, { Component } from "react";
import { Media, Fade, Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, FormFeedback } from "reactstrap";




class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: true,
            fname: "",
            email: "",
            phone: "",
            isContactModalOpen: false,
            touched: {
                fName: false,
                email: false,
                phone: false
            }
        
        }
    }
    toggleContact = () => {
        this.setState({
            isContactModalOpen: !this.state.isContactModalOpen
        });
    }
    
   

    handleEmailClick = () => {
        let e = document.getElementById("emailStuff");
        let p = document.getElementById("phoneStuff");

        if(e.classList.contains("d-none")) {
            e.classList.remove("d-none");
            p.classList.add("d-none");
            this.setState({phone: " "});
        } else {
            e.classList.add("d-none");
            p.classList.remove("d-none");
            this.setState({email: " "});
        }
        
    }

    handlePhoneClick = () => {
        let e = document.getElementById("emailStuff");
        let p = document.getElementById("phoneStuff");

        if(p.classList.contains("d-none")) {
            p.classList.remove("d-none");
            e.classList.add("d-none");
            this.setState({email: " "});
        } else {
            p.classList.add("d-none");
            e.classList.remove("d-none");
            this.setState({phone: " "});
        }
    }

    handleSubmit = (event) => {
        alert(`You input: ${this.state.fName}, ${this.state.phone}, ${this.state.email}, ${this.state.contactText}. Thanks!`);
        event.preventDefault();
    }

    validate = (fName, phone, email) => {
        const errors = {
            fName: "",
            phone: "",
            email: ""
        };

        if(this.state.touched.fName) {
            if(fName.length < 2) {
                errors.fName = "First name must be at least 2 characters.";
            } else if (fName.length > 20) {
                errors.fName = "First name must be less than 20 characters.";
            }
        }

        const reg = /^[\d-]+$/;
        if(this.state.touched.phone && !reg.test(phone)) {
            errors.phone = "The phone number must contain only numbers";
        }

        if(this.state.touched.email && !email.includes("@")){
            errors.email = "Email should contain an @";
        }

        return errors;
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }
    


    render(){
        const errors = this.validate(this.state.fName, this.state.phone, this.state.email);

        return(
            <React.Fragment>
                <Fade in={this.state.fadeIn}>
                    <Media id="aboutComp">
                        <Media body className="mediaBodyStyle">
                            <h2 className="mainHeader pt-3">About</h2>
                            <h5 className="subHeader text-muted">I am Nastasha Leach. Originally from Central Texas, I have lived in San Antonio since 2012.
                            I served in the US Air Force before graduating college and working as an Auditor with the City of San Antonio.
                            I hope to become a web developer in the future. </h5>  
                            <h3>Contact</h3>
                            <address>
                                8715 Datapoint Dr <br />
                                San Antonio, TX 78229
                            </address>
                            <address>
                                <a href= "tel: 210-763-9873">Call Us</a> <br />
                                <a href= "mailto: Nastasha.leach@outlook.com">Send us an Email</a>  
                            </address>
                            <div className="text-center">
                                <Button onClick={this.toggleContact}>Contact Us</Button>
                            </div>
                        </Media>
                        <Media object src="/assets/noel.jpg" alt="Picture of Nastasha" className="myImage d-none d-md-block"/>
                    </Media>
                </Fade> 
                
                <Modal isOpen={this.state.isContactModalOpen} toggle={this.toggleContact}>
                        <ModalHeader toggle={this.toggleContact} className="d-block text-center">
                            <h1 className="logoStyle">Needle & Thread</h1>
                                Contact Us
                        </ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="fName">First Name</Label>
                                    <Input type="text" name="fName" id="fName" 
                                    value={this.state.fName}
                                    invalid={errors.fName}
                                    onBlur={this.handleBlur("fName")}
                                    onChange={this.handleInputChange} 
                                    />
                                    <FormFeedback>{errors.fName}</FormFeedback>
                                </FormGroup>
                                <FormGroup role="group" aria-label="How to Contact">
                                    <Label>How should we contact you?</Label>
                                        <FormGroup className="btn-group ml-5">
                                            <button type="button" class="btn btn-secondary" onClick={this.handleEmailClick}>Email</button>
                                            <button type="button" class="btn btn-dark" onClick={this.handlePhoneClick}>Phone</button>
                                        </FormGroup>
                                </FormGroup>
                                <FormGroup className="d-none" id="emailStuff">
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" name="email" id="email" 
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                                <FormGroup className="d-none" id="phoneStuff">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input type="tel" name="phone" id="phone" 
                                        value={this.state.phone}
                                        invalid={errors.phone}
                                        onBlur={this.handleBlur("phone")}
                                        onChange={this.handleInputChange}
                                    />
                                    <FormFeedback>{errors.phone}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="contactText">Message</Label>
                                    <textarea name="contactText" id="contactText" rows="6" placeholder="How can we help you?" 
                                    value={this.state.contactText}
                                    onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                                <Button onClick={this.toggleContact}>Close</Button>
                                <Button type="submit" color="primary" onClick={this.toggleContact}>Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
            </React.Fragment>
        );
    }
}


export default About;