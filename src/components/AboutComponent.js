import React from "react";
import { Media } from "reactstrap";




function About () {
    return(
        <React.Fragment>
            <Media>
                <Media body className="mediaBodyStyle">
                    <h2 className="mainHeader pt-3">About</h2>
                    <h5 className="subHeader text-muted">I am Nastasha Leach. Originally from Central Texas, I have lived in San Antonio since 2012.
                    I served in the US Air Force before graduating college and working as an Auditor with the City of San Antonio.
                    I hope to become a web developer in the future. </h5>  
                    
                    <h3>Contact</h3>
                    <address>
                        8715 Datapoint Dr <br />
                        San Antonio, TX 78229
                    </address>
                    <address>
                        <a href= "tel: 210-763-9873">Call Us</a> <br />
                        <a href= "mailto: Nastasha.leach@outlook.com">Send us an Email</a>
                        <p>Contact Us</p>
                    </address>
                </Media>
                <Media object src="/assets/noel.jpg" alt="Picture of Nastasha" className="myImage"/>

            </Media>
        </React.Fragment>
    );
}

export default About;