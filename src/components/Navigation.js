import React, {Component} from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import Quilt2 from "../public/quilt2.jpg";

/********************************
 * Fix the font on the image header
 **********************************/
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <React.Fragment >
                <Navbar sticky="top" expand="lg" className="navbarStyles-container">
                    <div className="container-fluid">
                        <NavbarBrand className="logoStyle" href="/">Needle & Thread</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav}><i class="fa fa-chevron-circle-down fa-3x"></i></NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/classes">Classes</NavLink>
                                </NavItem>
                                <span className="navItem d-none d-lg-block">|</span>
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/inspiration">Inspiration</NavLink>
                                </NavItem>
                                <span className="navItem d-none d-lg-block">|</span>
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/quickTips">Quick Tips</NavLink>
                                </NavItem>
                                <span className="navItem d-none d-lg-block">|</span>
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/articles">Articles</NavLink>
                                </NavItem>
                                <span className="navItem d-none d-lg-block">|</span>
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/newsletter">Newsletter</NavLink>
                                </NavItem>
                                <span className="navItem d-none d-lg-block">|</span>
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/faq">FAQ</NavLink>
                                </NavItem>
                                <span className="navItem d-none d-lg-block">|</span>
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/about">About</NavLink>
                                </NavItem>
                                <span className="navItem d-none d-lg-block">|</span>
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/logIn">Log In</NavLink>
                                </NavItem>
                                <span className="navItem d-none d-lg-block">|</span>
                                <NavItem>
                                    <NavLink className="navItem mx-2" to="/createAccount">CreateAccount</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Container fluid className="topImageCont px-0">
                    <img className="topImage" src={Quilt2} alt="Quilt Picture Error" />
                    <div className="textCont">
                        <h1>Learn the Timeless Art of Quilting</h1>
                        <h5 className="d-none d-lg-block">You too can provide warmth, protection, and love to friends and family in the tradition of men and women for hundreds of years. Come join us as we celebrate the art, beauty, and functionality of quilt-making.</h5>
                    </div>
                </Container>
                
            </React.Fragment>

        );
    }
}

export default Navigation;