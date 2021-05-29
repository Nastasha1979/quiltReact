import { render } from "@testing-library/react";
import React, {Component, useState} from "react";
import { Media, Fade } from "reactstrap";
import CLASSES_DATA from "../shared/ClassesData";



/****************To Do************************
 * 
 * Consider making the whole thing a carousel for button functionality
 * 
 *******************************************************/
class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: CLASSES_DATA,
            fadeIn: true,
            first: true,
            second: false,
        }
        this.getSecondCard = this.getSecondCard.bind(this);
        this.getFirstClasses = this.getFirstClasses.bind(this);
        this.getSecondClasses = this.getSecondClasses.bind(this);
    }

    getFirstClasses(){

        const showClass = this.state.classes.map(classRoom => {
            if(this.state.first && classRoom.key < 3) {
                return( 
                    <div class="col-12 col-md-4 w-100 mx-auto classMediaContainer" id="classesComp">
                        <Fade in={this.state.fadeIn} >
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
                    </div>
                ); 
            } else {
                return <div />
            }
        
        });

        return showClass;
    }

    getSecondClasses() {
        const showClass = this.state.classes.map(classRoom => {
            if(this.state.second && classRoom.key >= 3){
                return(
                    <div class="col-12 col-md-4 w-100 mx-auto classMediaContainer" id="classesComp">
                        <Fade in={this.state.fadeIn} >
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
                    </div>
                );
            } else {
                return <div/>
            }
        });

        return showClass;
    }


    getSecondCard() {
        this.setState({
                first: !this.state.first,
                second: !this.state.second
        });
    }



    render() {

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
                    {this.state.first ?
                        <div className="row py-5 mx-auto"> 
                                {this.getFirstClasses()}
                        </div>
                        :
                        <div className="row py-5 mx-auto">
                                {this.getSecondClasses()}
                        </div>
                    }
                    
                    <div className="row mb-3">
                        <div className="col text-center">
                            <button className="btn btn-lg btnStyles" onClick={this.getSecondCard}>See More</button>
                        </div>
                    </div>
                </div>

        );
    }
}


export default Classes;




