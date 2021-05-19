import React, {Component} from "react";
import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <footer>
            <div class="container-fluid footerStyles">
                <div class="row pt-3">
                    <div class="col-12 text-center">
                        <h1 class="logoStyle">Needle & Thread</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6 text-center">
                            <a class="btn btn-social-icon btn-pinterest socialStyles"><i class="fa fa-pinterest"></i></a>
                            <a class="btn btn-social-icon btn-pinterest socialStyles"><i class="fa fa-instagram"></i></a>
                            <a class="btn btn-social-icon btn-pinterest socialStyles"><i class="fa fa-twitter"></i></a>
                            <a class="btn btn-social-icon btn-pinterest socialStyles"><i class="fa fa-youtube"></i></a>
                    </div>
                    <div class="col-6 text-center">
                    
                            <a href="#" class="footerLink mx-2">About</a>
                            <span className="footBarSpan">|</span>
                            <a data-toggle="modal" data-target="#contactUsModal" class="footerLink mx-2">Contact</a>
                            <span className="footBarSpan">|</span>
                            <a data-toggle="modal" data-target="#privacy"class="footerLink mx-2">Privacy</a>
                            <span className="footBarSpan">|</span>
                            <a data-toggle="modal" data-target="#terms"class="footerLink mx-2">Terms</a>
                
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;