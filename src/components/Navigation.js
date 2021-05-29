import React, {Component} from "react";
import NavItems from "../shared/NavBarItems";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, Container, Modal, 
    ModalBody, ModalHeader, Button, Form, FormGroup, Input, Label } from "reactstrap";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";







/********************************
 * To Do List
 * fix the text over image on small/phone viewports
 **********************************/
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            navItems: NavItems,
            isModalOpenLog: false,
            isModalOpenCreate: false
          
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
        alert(`First Name: ${this.firstName.value}\n
               Last Name: ${this.lastName.value}\n
               Username: ${this.username.value}\n
               Password: ${this.password.value}\n
               Newsletter Sign Up: ${this.news.checked}`    
            );
        this.toggleModalCreate();
        event.preventDefault();
    }

    getNavList() {
        const navTime = this.state.navItems.map(navItem =>  {
            
            return(
                <React.Fragment>
                    <NavItem key={navItem.key}>
                        <Link 
                            className={navItem.classN} 
                            to={navItem.to}
                            smooth                          
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
          

        return(
            <React.Fragment>
                <Navbar sticky="top" expand="lg" className="navbarStyles-container">
                    <div className="container-fluid">
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
                    </div>
                </Navbar>
                <Container fluid className="topImageCont px-0 d-none d-md-block">
                    <img className="topImage" src="/assets/quilt2.jpg" alt="Quilt Picture Error" />
                    <div className="textCont">
                        <h1>Learn the Timeless Art of Quilting</h1>
                        <h5 className="d-none d-lg-block">You too can provide warmth, protection, and love to friends and family in the tradition of men and women for hundreds of years. Come join us as we celebrate the art, beauty, and functionality of quilt-making.</h5>
                    </div>
                </Container>
                <Container fluid className="d-md-none phoneHeader">
                    <div >
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
                                <Input type="text" id="firstName" name="firstName" 
                                innerRef={input => this.firstName = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastName">Last Name: </Label>
                                <Input type="text" id="lastName" name="lastName" 
                                innerRef={input => this.lastName = input} />
                            </FormGroup>
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
                            <FormGroup check className="text-right">
                                <Label check>
                                    <Input type="checkbox" name="news" innerRef={input => this.news = input} />
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