import React from "react";
import { Media } from "reactstrap";

/****************To Do************************
 * Fix the image issue
 * Consider making the whole thing a carousel for button functionality
 * Get the row centered
 *******************************************************/
function GetFirstClasses({classRoom}) {
    if(classRoom.key < 3) {
        return(
            
                <div class="col-12 col-md-4 w-100 mx-auto classMediaContainer">
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
                </div>
            
        );
    } else {
        return <div />
    }
}



function Classes(props){
    const showClass = props.classes.map(classRoom => {
        return(
            <div key={classRoom.id}>
                <GetFirstClasses classRoom={classRoom}/>
            </div>
        );
    });


    return(
        <div className="container-fluid">
            <div className="row">
                <div class="col-12 text-center my-4">
                    <h2 className="mainHeader">Classes</h2>
                </div>
            </div>
            <div className="row">
                <div class="col-8 m-auto text-center text-muted">
                    <h5 className="subHeader">Take one of our courses, in person or virtually, and receive individual attention while learning new skills and making new quilt friends.</h5>
                </div>
            </div>
            <div className="row py-5 mx-auto">
                    {showClass}
            </div>
            <div className="row mb-3">
                <div className="col text-center">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        
        </div>
      
    );
}


export default Classes;




