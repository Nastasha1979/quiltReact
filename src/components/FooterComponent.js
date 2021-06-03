import React, {Component} from "react";
import { Modal, ModalBody, ModalHeader, Button, Form, FormGroup, Label, Input, FormFeedback, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";


/************TO DO**************
 * Fix the footer links to use Link
 * Pin footer to bottom of page when only home screenshows
 ********************************/
class Footer extends Component {
    constructor(props){
        super(props);
        this.state ={
            fName: "",
            phone: "",
            email: "",
            contactText: "",
            isTermsModalOpen: false,
            isPrivacyModalOpen: false,
            isContactModalOpen: false,
            touched: {
                fName: false,
                phone: false,
                email: false,
            }
        }
        this.toggleTerms = this.toggleTerms.bind(this);
        this.togglePrivacy = this.togglePrivacy.bind(this);
        this.toggleContact = this.toggleContact.bind(this);
        this.handleEmailClick = this.handleEmailClick.bind(this);
        this.handlePhoneClick = this.handlePhoneClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    toggleTerms() {
        this.setState({
            isTermsModalOpen: !this.state.isTermsModalOpen
        });
    }

    togglePrivacy() {
        this.setState({
            isPrivacyModalOpen: !this.state.isPrivacyModalOpen
        });
    }

    toggleContact() {
        this.setState({
            isContactModalOpen: !this.state.isContactModalOpen
        });
    }

    handleEmailClick() {
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

    handlePhoneClick() {
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

    handleSubmit(event) {
        alert(`You input: ${this.state.fName}, ${this.state.phone}, ${this.state.email}, ${this.state.contactText}. Thanks!`);
        event.preventDefault();
    }

    validate(fName, phone, email) {
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

        const reg = /^\d+$/;
        if(this.state.touched.phone && !reg.test(phone)) {
            errors.phone = "The phone number must contain only numbers";
        }

        if(this.state.touched.email && !email.includes("@")){
            errors.email = "Email should contain an @";
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

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    render(){

        const errors = this.validate(this.state.fName, this.state.phone, this.state.email);

        return (
            <React.Fragment>
                <footer>
                    <Container fluid className="footerStyles pb-4">
                        <Row className="pt-3">
                            <Col xs="12" className="text-center">
                                <h1 class="logoStyle">Needle & Thread</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6" className="text-center">
                                    <a className="btn" href="https://www.pinterest.com" target="_blank" rel="noreferrer"><i class="fa fa-pinterest"></i></a>
                                    <a className="btn" href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fa fa-instagram"></i></a>
                                    <a className="btn" href="https://www.twitter.com" target="_blank" rel="noreferrer"><i class="fa fa-twitter"></i></a>
                                    <a className="btn" href="https://www.youtube.com" target="_blank" rel="noreferrer"><i class="fa fa-youtube"></i></a>
                            </Col>
                            <Col xs="6" className="text-center">
                                    <Link className="footerLink" to="/about#aboutComp">About </Link>
                                    <span className="footBarSpan">|</span>
                                    <Link className="footerLink" onClick={this.toggleContact}> Contact </Link>
                                    <span className="footBarSpan">|</span>
                                    <Link className="footerLink" onClick={this.togglePrivacy}> Privacy </Link>
                                    <span className="footBarSpan">|</span>
                                    <Link className="footerLink" onClick={this.toggleTerms}> Terms</Link>
                            </Col>
                        </Row>
                    </Container>
                </footer>
                
                <Modal isOpen={this.state.isTermsModalOpen} toggle={this.toggleTerms}>
                    <ModalHeader toggle={this.toggleTerms}>
                        <h1 className="logoStyle">Needle & Thread</h1>
                            Terms And Conditions
                    </ModalHeader>
                    <ModalBody>
                        <Container fluid>
                            <p>Welcome to Needle & Thread!</p>

                            <p>These terms and conditions outline the rules and regulations for the use of Needle & Thread's Website, located at Needle & Thread.com.</p>
                            
                            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Needle & Thread if you do not agree to take all of the terms and conditions stated on this page.</p>
                            
                            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same. Our Terms and Conditions were created with the help of the <a href="https://www.privacypolicyonline.com/terms-conditions-generator/">Terms & Conditions Generator</a> and the <a href="https://www.generateprivacypolicy.com">Privacy Policy Generator</a>.</p>
                            
                            <h3><strong>Cookies</strong></h3>
                            
                            <p>We employ the use of cookies. By accessing Needle & Thread, you agreed to use cookies in agreement with the Needle & Thread's Privacy Policy.</p>
                            
                            <p>Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
                            
                            <h3><strong>License</strong></h3>
                            
                            <p>Unless otherwise stated, Needle & Thread and/or its licensors own the intellectual property rights for all material on Needle & Thread. All intellectual property rights are reserved. You may access this from Needle & Thread for your own personal use subjected to restrictions set in these terms and conditions.</p>
                            
                            <p>You must not:</p>
                            <ul>
                                <li>Republish material from Needle & Thread</li>
                                <li>Sell, rent or sub-license material from Needle & Thread</li>
                                <li>Reproduce, duplicate or copy material from Needle & Thread</li>
                                <li>Redistribute content from Needle & Thread</li>
                            </ul>
                            
                            <p>This Agreement shall begin on the date hereof.</p>
                            
                            <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Needle & Thread does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Needle & Thread,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Needle & Thread shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
                            
                            <p>Needle & Thread reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
                            
                            <p>You warrant and represent that:</p>
                            
                            <ul>
                                <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                                <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                                <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                                <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                            </ul>
                            
                            <p>You hereby grant Needle & Thread a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
                            
                            <h3><strong>Hyperlinking to our Content</strong></h3>
                            
                            <p>The following organizations may link to our Website without prior written approval:</p>
                            
                            <ul>
                                <li>Government agencies;</li>
                                <li>Search engines;</li>
                                <li>News organizations;</li>
                                <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                            </ul>
                            
                            <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.</p>
                            
                            <p>We may consider and approve other link requests from the following types of organizations:</p>
                            
                            <ul>
                                <li>commonly-known consumer and/or business information sources;</li>
                                <li>dot.com community sites;</li>
                                <li>associations or other groups representing charities;</li>
                                <li>online directory distributors;</li>
                                <li>internet portals;</li>
                                <li>accounting, law and consulting firms; and</li>
                                <li>educational institutions and trade associations.</li>
                            </ul>
                            
                            <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Needle & Thread; and (d) the link is in the context of general resource information.</p>
                            
                            <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>
                            
                            <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Needle & Thread. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
                            
                            <p>Approved organizations may hyperlink to our Website as follows:</p>
                            
                            <ul>
                                <li>By use of our corporate name; or</li>
                                <li>By use of the uniform resource locator being linked to; or</li>
                                <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                            </ul>
                            
                            <p>No use of Needle & Thread's logo or other artwork will be allowed for linking absent a trademark license agreement.</p>
                            
                            <h3><strong>iFrames</strong></h3>
                            
                            <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p>
                            
                            <h3><strong>Content Liability</strong></h3>
                            
                            <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
                            
                            <h3><strong>Reservation of Rights</strong></h3>
                            
                            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>
                            
                            <h3><strong>Removal of links from our website</strong></h3>
                            
                            <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p>
                            
                            <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
                            
                            <h3><strong>Disclaimer</strong></h3>
                            
                            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
                            
                            <ul>
                                <li>limit or exclude our or your liability for death or personal injury;</li>
                                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                            </ul>
                            
                            <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                            
                            <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                            
                            <p>Source: <a href="https://www.privacypolicyonline.com/" target="_blank" rel="noreferrer">https://www.privacypolicyonline.com/</a></p>
                            
                            
                        </Container>
                        <Button onClick={this.toggleTerms}>Close</Button>
                    </ModalBody>    
                </Modal>

                <Modal isOpen={this.state.isPrivacyModalOpen} toggle={this.togglePrivacy}>
                    <ModalHeader toggle={this.togglePrivacy}>
                        <h1 className="logoStyle">Needle & Thread</h1>
                            Privacy Policy
                    </ModalHeader>
                    <ModalBody>
                        <Container fluid>
                            <p>At Needle & Thread, accessible from Needle & Thread.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Needle & Thread and how we use it.</p>

                            <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                            <h2>Log Files</h2>

                            <p>Needle & Thread follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/">Privacy Policy Generator</a> and the <a href="https://www.generateprivacypolicy.com">Privacy Policy Generator</a>.</p>

                            <h2>Privacy Policies</h2>

                            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of Needle & Thread.</p>

                            <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Needle & Thread, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

                            <p>Note that Needle & Thread has no access to or control over these cookies that are used by third-party advertisers.</p>

                            <h2>Third Party Privacy Policies</h2>

                            <p>Needle & Thread's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

                            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>

                            <h2>Children's Information</h2>

                            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>

                            <p>Needle & Thread does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

                            <h2>Online Privacy Policy Only</h2>

                            <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Needle & Thread. This policy is not applicable to any information collected offline or via channels other than this website.</p>

                            <h2>Consent</h2>

                            <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>

                            <p>Source: <a href="https://www.privacypolicyonline.com/" target="_blank" rel="noreferrer">https://www.privacypolicyonline.com/</a></p>      
                    </Container>
                    <Button onClick={this.togglePrivacy}>Close</Button>
                    </ModalBody>
                </Modal>

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
                                <Label htmlFor="contactText">Message</Label><br/>
                                <textarea name="contactText" id="contactText" rows="6" cols="48" placeholder="How can we help you?" 
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

export default Footer;