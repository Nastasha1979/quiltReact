import React, {Component} from "react";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand } from "reactstrap";
import { NavLink } from "react-router-dom";


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
            </React.Fragment>

        );
    }
}

export default Navigation;