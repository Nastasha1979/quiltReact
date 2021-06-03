import React, {Component} from "react";
import { Media, Container, Row, Col, Button, Fade } from "reactstrap";
import { Link } from "react-router-dom";
import CLASS_INFO from "../shared/ClassInfoData";




class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: true,
            first: true,
            second: false,
            classInfo: CLASS_INFO,
            isOpen: true
        }
        this.toggleState = this.toggleState.bind(this);
        this.getFirstClasses = this.getFirstClasses.bind(this);
        this.getSecondClasses = this.getSecondClasses.bind(this);
    }

    getFirstClasses(){

        const showClass = this.props.classes.map(classRoom => {
            if(this.state.first && classRoom.id < 3) {
                return( 
                    <Col lg="4" className="w-100 mx-auto classMediaContainer " id="classesComp">
                        <Link to={`/classInfo/${classRoom.id}`}>
                            <Fade in>
                                <Media className="mediaStyles">
                                    <Media left href="#" >
                                        <Media object className="classImgStyles" src={classRoom.pic} alt={classRoom.title} />
                                    </Media>
                                    <Media body className="mediaStylesText text-lg-center pl-3">
                                        <Media heading>
                                            {classRoom.title}
                                        </Media>
                                        {classRoom.description}
                                    </Media>
                                </Media> 
                            </Fade>
                        </Link>
                    </Col>
                ); 
            } else {
                return <div />
            }
        
        });

        return showClass;
    }

    getSecondClasses() {
        const showClass = this.props.classes.map(classRoom => {
            if(this.state.second && classRoom.id >= 3){
                return(
                    <Col lg="4" className="w-100 mx-auto classMediaContainer " id="classesComp">
                        <Link to={`/classInfo/${classRoom.id}`}>
                            <Fade in={this.state.fadeIn} key={classRoom.id}>
                                <Media className="mediaStyles">
                                    <Media left href="#" >
                                        <Media object className="classImgStyles" src={classRoom.pic} alt={classRoom.title} />
                                    </Media>
                                    <Media body className="mediaStylesText text-lg-center pl-3">
                                        <Media heading>
                                            {classRoom.title}
                                        </Media>
                                        {classRoom.description}
                                    </Media>
                                </Media>
                            </Fade>
                        </Link>   
                    </Col>
                );
            } else {
                return <div/>
            }
        });

        return showClass;
    }


    toggleState() {
        this.setState({
                first: !this.state.first,
                second: !this.state.second
        });
    }
    

    render() {

        return(
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <Col xs="12" className="text-center my-4">
                            <h2 className="mainHeader">Classes</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="8" className="m-auto text-center text-muted">
                            <h5 className="subHeader">Take one of our courses, in person or virtually, and receive individual attention while learning new skills and making new quilt friends.</h5>
                        </Col>
                    </Row>
                    {this.state.first ?
                        <Row className="py-5 mx-auto"> 
                                {this.getFirstClasses()}
                        </Row>
                        :
                        <Row className="py-5 mx-auto">
                                {this.getSecondClasses()}
                        </Row>
                    }
                    <Row className="mb-3">
                        <Col xs="12" className="text-center">
                            <Button className="btn btn-lg" onClick={this.toggleState}>See More</Button>
                        </Col>
                    </Row>
                </Container>   
            </React.Fragment>
        );
    }
}


export default Classes;




