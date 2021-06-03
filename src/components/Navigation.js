import React, {Component} from "react";
import NavItems from "../shared/NavBarItems";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, Container, Modal, 
    ModalBody, ModalHeader, Button, Form, FormGroup, Input, Label, FormFeedback } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            navItems: NavItems,
            isModalOpenLog: false,
            isModalOpenCreate: false,
            firstName: "",
            lastName:  "",
            username: "",
            password: "",
            newsletter: false,
            touched: {
                username: false,
                password: false
            }
          
        };
        this.getNavList = this.getNavList.bind(this);
        this.toggleModalLog = this.toggleModalLog.bind(this);
        this.toggleModalCreate = this.toggleModalCreate.bind(this);
        this.handleSubmitLog = this.handleSubmitLog.bind(this);
        this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
        this.switchModal = this.switchModal.bind(this);

        
    }
    

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    switchModal(event) {
        if(this.toggleModalCreate){
            this.setState({
                isModalOpenCreate: !this.state.isModalOpenCreate
            });

            this.setState({
                isModalOpenLog: !this.state.isModalOpenLog
            });

        } else {
            this.setState({
                isModalOpenLog: !this.state.isModalOpenLog
            });

            this.setState({
                isModalOpenCreate: !this.state.isModalOpenCreate
            });
            
        }
        event.preventDefault();
    }

    toggleModalLog() {
        this.setState({
            isModalOpenLog: !this.state.isModalOpenLog
        });
        
    }

    toggleModalCreate() {
        this.setState({
            isModalOpenCreate: !this.state.isModalOpenCreate
        });
    }
    

    handleSubmitLog(event){
        alert(`Username: ${this.username.value}\nPassword: ${this.password.value}`);
        this.toggleModalLog();
        event.preventDefault();
    }

    handleSubmitCreate(event){
        alert(`First Name: ${this.state.firstName}\n
               Last Name: ${this.state.lastName}\n
               Username: ${this.state.username}\n
               Password: ${this.state.password}\n
               Newsletter Sign Up: ${this.state.newsletter}`    
            );
        this.toggleModalCreate();
        event.preventDefault();
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate(username, password) {
        const errors = {
            username: "",
            password: ""
        };

        if(this.state.touched.username && !username.includes("@")){
            errors.username = "Username should contain a @";
        }

        const regPass = /^\w*[^_\s]{5,}$/;
        if(this.state.touched.password && !regPass.test(password)){
            errors.password = "Only lower case, upper case, numbers, and special characters allowed and must be at least 5 characters";
        }

        return errors;
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    getNavList() {
        const navTime = this.state.navItems.map(navItem =>  {
            return(
                <React.Fragment>
                    <NavItem key={navItem.key}>
                        <Link      //This link is from react router hash link, not the react Router
                            className={navItem.classN} 
                            to={navItem.to}
                            smooth
                            scroll={(el) => el.scrollIntoView({ block: 'center' })}                        
                        >
                            {navItem.name}
                        </Link>
                    </NavItem>                    
                    <span className="navItem d-none d-lg-block">|</span>
                </React.Fragment>
            );
        });
        
        return navTime;
    }
        

    render() {
        const errors = this.validate(this.state.username, this.state.password);  

        return(
            <React.Fragment>
                <Navbar sticky="top" expand="lg" className="navbarStyles-container">
                    <Container fluid>
                        <NavbarBrand className="logoStyle" href="/">Needle & Thread</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}><i class="fa fa-chevron-circle-down fa-3x"></i></NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            
                                <Nav navbar className="ml-auto">
                                    {this.getNavList()}                                
                                </Nav>
                            
                            <Link className="navItem mx-2" onClick={this.toggleModalLog}>Log In</Link><br/>
                            <span className="navItem d-none d-lg-block">|</span> 
                            <Link className="navItem mx-2" onClick={this.toggleModalCreate}>Create Account</Link>   
                        </Collapse>
                    </Container>
                </Navbar>
                <Container fluid className="topImageCont px-0 d-none d-md-block">
                    <img className="topImage" src="/assets/quilt2.jpg" alt="Sewing a Quilt close up" />
                    <div className="textCont">
                        <h1>Learn the Timeless Art of Quilting</h1>
                        <h5 className="d-none d-lg-block">You too can provide warmth, protection, and love to friends and family in the tradition of men and women for hundreds of years. Come join us as we celebrate the art, beauty, and functionality of quilt-making.</h5>
                    </div>
                </Container>
                <Container fluid className="d-md-none phoneHeader">
                    <div>
                        <h1>Learn the Timeless Art of Quilting</h1>
                        <h5 className="d-none d-lg-block">You too can provide warmth, protection, and love to friends and family in the tradition of men and women for hundreds of years. Come join us as we celebrate the art, beauty, and functionality of quilt-making.</h5>
                    </div>
                </Container>

                <Modal isOpen={this.state.isModalOpenLog} toggle={this.toggleModalLog}>
                    <ModalHeader toggle={this.toggleModalLog}>
                        <h1 className="logoStyle">Needle & Thread</h1>
                        Log In
                        </ModalHeader>
                    <ModalBody >
                        <Form onSubmit={this.handleSubmitLog}>
                            <FormGroup>
                                <Label htmlFor="username">Username: </Label>
                                <Input type="text" id="username" name="username" 
                                innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password: </Label>
                                <Input type="password" id="password" name="password" 
                                innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup>
                                <p>Don't have an account?<Link onClick={this.switchModal}> Create Account</Link> here.</p>
                            </FormGroup>
                            <FormGroup className="text-right">
                                <Button type="submit" value="submit">Log In</Button>
                            </FormGroup>
                        </Form>    
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalOpenCreate} toggle={this.toggleModalCreate}>
                    <ModalHeader toggle={this.toggleModalCreate} className="text-center d-block">
                        <h1 className="logoStyle text-center">Needle & Thread</h1>
                        Create Account
                        </ModalHeader>
                    <ModalBody >
                        <Form onSubmit={this.handleSubmitCreate}>
                            <FormGroup>
                                <Label htmlFor="firstName">First Name: </Label>
                                <Input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    value={this.state.firstName} 
                                    onChange={this.handleInputChange}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastName">Last Name: </Label>
                                <Input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName" 
                                    value={this.state.lastName} 
                                    onChange={this.handleInputChange}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="username">Email: <small>Email will become your username</small></Label>
                                <Input 
                                    type="text" 
                                    name="username" 
                                    id="username"  
                                    value={this.state.username}
                                    onBlur={this.handleBlur("username")}
                                    invalid={errors.username}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.username}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password: </Label>
                                <Input 
                                    type="text" 
                                    name="password" 
                                    id="password"  
                                    value={this.state.password}
                                    onBlur={this.handleBlur("password")}
                                    invalid={errors.password}
                                    onChange={this.handleInputChange}
                                />
                                <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>
                            <FormGroup check className="text-right">
                                <Label check>
                                <Input type="checkbox"
                                        name="newsletter"
                                        checked={this.state.newsletter}
                                        onChange={this.handleInputChange} /> {' '}
                                    Sign Up for Newsletter? (It's free!)
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <p>Already a member?<Link onClick={this.switchModal}> Log In</Link> here.</p>
                            </FormGroup>
                            <FormGroup className="text-right">
                                <Button type="submit" value="submit" className="btnStyles">Create Account</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
                
            </React.Fragment>

        );
    }
}

export default Navigation;