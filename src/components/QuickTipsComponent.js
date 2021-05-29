import React, { useState } from "react";
import { Fade } from 'reactstrap';


/*******toDo**********
 * Fix the styling
 *****************/
function GetTips({quickTip}){
    const [isOpen, setIsOpen] = useState(false);
    const [fadeIn] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <React.Fragment>
            <Fade in={fadeIn}>
                <div className="accordion-item" key={quickTip.key}>
                    <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                        <div>{quickTip.topTitle} {isOpen ? "-" : "+"}</div>
                    </div>
                    {isOpen && 
                        <div className="accordion-content quickTipsInner py-2">{quickTip.innerTitle}</div>
                    }
                    {isOpen && 
                        <div className="accordion-content">{quickTip.videoFrame}</div>
                    }
                </div>
            </Fade>
        </React.Fragment>
    );
}


function QuickTips(props){

    const newAccord = props.quickTips.map(quickTip => {
        return (
            <GetTips quickTip={quickTip} />
        );
    })
    
        return(
            <React.Fragment>
                <div className="container-fluid pb-3" id="quickTipsComp">
                    <div className="row">
                        <div class="col-12 text-center my-4">
                            <h2 className="mainHeader">Quick Tips</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-8 m-auto text-center text-muted pb-5">
                            <h5 className="subHeader">Need some quick help? Browse our collection of hand-picked videos to help you cut through those rough patches.</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="accordion quickTipsStyles">
                                {newAccord}
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <button href="" className="btn btn-lg btnStyles my-3">See More</button>
                    </div>
                </div>
            </React.Fragment>

        );
    

}

export default QuickTips;