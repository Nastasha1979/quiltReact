import React, { useState } from "react";
import { Carousel, CarouselIndicators, CarouselControl, CarouselItem, CarouselCaption } from 'reactstrap';

/*****************************************************
 * What you have now isn't working. Try what is at this link
 * https://react-bootstrap.github.io/components/carousel/
 *******************************************************/

function GetInner({inspire}){
    return(
    <CarouselItem>
        <img src={inspire.pic} alt={inspire.title} />
        <CarouselCaption captionText={inspire.author} captionHeader={inspire.title}>   
        </CarouselCaption>
    </CarouselItem>
    );
}

function Inspiration(props){
    const getCar = props.inspiration.map(inspire => {
        return(
            <div key={inspire.id}>
                <GetInner inspire={inspire}/>
            </div>
        );
    });

    return(
        <div class="container-fluid inspirationStyles" id="inspiration">
            <div class="row">
                <div class="col-12 thirdFont text-center my-4">
                    <h2>Inspiration</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-8 m-auto text-center text-muted secondaryFont">
                    <h5>Take a stroll through quilts submitted by our teachers, students, and friends to gather inspiration for your own quilts.</h5>
                </div>
            </div>
            <div class="row py-4">
                <div class="col-md-8 mx-auto">
                    <div>
                        <div>
                            {getCar}
                        </div>
                    </div>
                </div>   
            </div>
            <div class="row pb-4">
                <div class="col-12 text-center">
                    <button class="btn btn-lg btnStyles2" href="#">See More</button>
                </div>
            </div>
    </div>
    );
}

export default Inspiration;