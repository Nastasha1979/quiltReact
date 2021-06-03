import React, { useState } from "react";
import { Container, Row, Col, Media, Button, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router-dom";

function RenderStuff({classInfo}) {
    const materials = classInfo.materialsProvided.map(material => {
        return (
            <li>{material}</li>
        );
    });

    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <Media key={classInfo.id}>
                    <Media object src={classInfo.picUrl} alt={classInfo.title} className="img-thumbnail d-none d-lg-block classInfoImg"/>
                <Media body className="ml-2">
                    <h1 className="text-center">{classInfo.title}</h1>
                    <h4 className="text-center">Instructor: {classInfo.instructor}</h4>
                    <h4 className="text-center">Level: {classInfo.level}</h4>
                    <h4 className="text-center">Class Date: {classInfo.date}</h4>
                    <h4 className="text-center">Location: {classInfo.location}</h4>
                    <p className="text-center">{classInfo.description}</p>
                    <h5>Materials Provided</h5>
                    <ul>{materials}</ul>
                    <div className="text-center mt-3">
                        <Button onClick={() => setOpen(!isOpen)}>Sign Up</Button>
                    </div>
                </Media>   
            </Media>

            <Modal isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
                    <ModalHeader toggle={() => setOpen(!isOpen)} className="text-center d-block">                    
                        <h1 className="logoStyle text-center">Needle & Thread</h1>
                        <h2>{`${classInfo.title} Course Sign Up`}</h2>
                    </ModalHeader>
                    <ModalBody className="text-center"><h4>{`You've successfully signed up for ${classInfo.title}. See you there!`}</h4></ModalBody>
                    <ModalFooter><Button onClick={() => setOpen(!isOpen)}>OK</Button></ModalFooter>
            </Modal>  
        </div>
        
    );
}

function ClassInfoComponent(props) {
    
    if(props.classInfo) {
        return(            
            <Container fluid className="classInfo">
                <Row>
                    <Col xs="12">
                        <Breadcrumb className="breadcrumbStyles">
                            <BreadcrumbItem>
                                <Link to="/classes">
                                    <i className="fa fa-chevron-left fa-sm"/> Back to Classes
                                </Link>
                            </BreadcrumbItem>
                        </Breadcrumb>  
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        {<RenderStuff classInfo={props.classInfo} />}
                    </Col>
                </Row>
            </Container>
   
        );
    } else {
        return <div> Error Loading Class </div>
    }
} 
    


export default ClassInfoComponent;