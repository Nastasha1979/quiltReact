import React from "react";
import { Media } from "reactstrap";

/****************To Do************************
 * Fix the image issue
 * Consider making the whole thing a carousel for button functionality
 * Get the row centered
 *******************************************************/
function GetFirstClasses({classRoom}) {
    return(
        <React.Fragment>
            <div class="col-8 col-md-4 mx-auto">
                <Media>
                    <Media left href="#" className="pr-2 mediaStyles">
                        <Media object className="imgStyles" src={classRoom.pic} alt={classRoom.title} />
                    </Media>
                    <Media body className="mediaStyles text-center">
                        <Media heading>
                            {classRoom.title}
                        </Media>
                        {classRoom.description}
                    </Media>
                </Media>
            </div>
        </React.Fragment>
    );
}


function Classes(props){
    const showClass = props.classes.filter(classRoom => classRoom.key < 3).map(classRoom => {
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
                    <h2>Classes</h2>
                </div>
            </div>
            <div className="row">
                <div class="col-8 m-auto text-center text-muted">
                    <h5>Take one of our courses, in person or virtually, and receive individual attention while learning new skills and making new quilt friends.</h5>
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




