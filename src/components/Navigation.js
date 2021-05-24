import React, {Component} from "react";
import NavItems from "../shared/NavBarItems";
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, NavbarBrand, Container } from "reactstrap";
import { NavLink } from "react-router-dom";


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
            navItems: NavItems
        };
        this.getNavList = this.getNavList.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    getNavList() {
        const navTime = this.state.navItems.map(navItem =>  { 
            return(
                <React.Fragment>
                    <NavItem key={navItem.key}>
                        <NavLink className={navItem.classN} to={navItem.to}>{navItem.name}</NavLink>
                    </NavItem>
                    <span className="navItem d-none d-lg-block">|</span>
                </React.Fragment>
            );
        });
        
        return navTime;
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
                                {this.getNavList()} 
                            </Nav>
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
                
            </React.Fragment>

        );
    }
}

export default Navigation;