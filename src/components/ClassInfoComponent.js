import React from "react";
import {Container, Row, Col, Media, Button, Breadcrumb, BreadcrumbItem} from "reactstrap";

function RenderStuff({classInfo}){
    const materials = classInfo.materialsProvided.map(material => {
        return (
            <li>{material}</li>
        );
    });

    return (
        <div>
            {/* <Breadcrumb>
                <BreadcrumbItem to="/classes">Back to Classes</BreadcrumbItem>
            </Breadcrumb> */}
            <Media key={classInfo.id}>
                    <Media object src={classInfo.picUrl} alt={classInfo.title} className="img-thumbnail d-none d-lg-block classInfoImg"/>
                <Media body className="ml-2">
                    <h1 className="text-center">{classInfo.title}</h1>
                    <h3 className="text-center">Instructor: {classInfo.instructor}</h3>
                    <h4 className="text-center">Level: {classInfo.level}</h4>
                    <h4 className="text-center">Class Date: {classInfo.date}</h4>
                    <h4 className="text-center">Location: {classInfo.location}</h4>
                    <p className="text-center">{classInfo.description}</p>
                    <h5>Materials Provided</h5>
                    <ul>{materials}</ul>
                    <div className="text-center mt-3">
                        <Button>Sign Up</Button>
                    </div>
                </Media>
                
            </Media>
            
        </div>
        
    );
}

function ClassInfoComponent(props) {
    console.log(`this is props.classInfo: ${props.classInfo}`)
    if(props.classInfo) {
        return(
            
            <Container fluid className="classInfo">
                <Row>
                    <Col sm="12">
                        
                        {<RenderStuff classInfo={props.classInfo} />}
                    </Col>
                </Row>
            </Container>
        );
    } else {
        return <div />
    }
} 
    


export default ClassInfoComponent;