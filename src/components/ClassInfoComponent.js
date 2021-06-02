import React from "react";
import {Container, Row, Col} from "reactstrap";

function RenderStuff({classInfo}){
    const materials = classInfo.materialsProvided.map(material => {
        return (
            <li>{material}</li>
        );
    });

    return (
        
            <div key={classInfo.id}>
                <h1>{classInfo.title}</h1>
                <h2>{classInfo.instructor}</h2>
                <h4>{classInfo.level}</h4>
                <h4>{classInfo.date}</h4>
                <h4>{classInfo.location}</h4>
                <p>{classInfo.description}</p>
                <ul>{materials}</ul>
            </div>
        
    );
}

function ClassInfoComponent(props) {
    console.log(`this is props.classInfo: ${props.classInfo}`)
    if(props.classInfo) {
        return(
            
            <Container>
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