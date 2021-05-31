import React, { useState } from "react";
import { Fade, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


/*******toDo**********
 * Fix the styling
 *****************/
function GetFAQ({faq}){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [fadeIn] = useState(true);

    return(
        <React.Fragment>
            <Fade in={fadeIn}>
                <div className="accordion-item" key={faq.key}>
                    <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                        <div>{faq.question} {isOpen ? "-" : "+"}</div>
                    </div>
                    {isOpen && 
                        <div className="accordion-content faqInner py-2">{faq.answer}</div>
                    }  
                </div>
            </Fade>
        </React.Fragment>
    );
}



/*Here, we're inverting the isActive state value when we click on the accordion-title div. If the value of isActive is false, we're setting it to true and vice-versa.
We're also showing the + or - sign depending on the value of isActive using the ternary operator.
And if the isActive state value is true then we're only showing the accordion content as shown below*/ 

function FrequentlyAsked(props){
    const [isFirst, setFirst] = useState(true);

    const toggleFAQ = () => setFirst(!isFirst);

    const facts = props.faqs.filter(faq => faq.key < 4).map(faq => {
        return (
            <GetFAQ faq={faq} />
        );
    })

    const facts2 = props.faqs.filter(faq => faq.key >= 4).map(faq => {
        return (
            <GetFAQ faq={faq} />
        );
    })
    
        return(
            <React.Fragment>
                <div className="container-fluid pb-3" id="FAQComp">
                    <div className="row">
                        <div class="col-12 text-center my-4">
                            <h2 className="mainHeader">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-8 m-auto text-center text-muted pb-5">
                            <h5 className="subHeader">Check our FAQ's for answers to commonly asked questions</h5>
                        </div>
                    </div>                             
                        <div className="row">
                            <div className="col-12">
                                { isFirst ? 
                                    <div className="accordion faqStyles">
                                        {facts}
                                    </div>
                                :
                                    <div className="accordion faqStyles">
                                        {facts2}
                                    </div>
                                }
                            </div>
                        </div>                                                                
                    <div className="row justify-content-center">
                        <button href="" className="btn btn-lg btnStyles my-3" onClick={toggleFAQ}>See More</button>
                    </div>
                    
                </div>
            </React.Fragment>

        );
    

}

export default FrequentlyAsked;