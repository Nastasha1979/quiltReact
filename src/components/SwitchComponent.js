import React, { Component } from "react";
import{ Switch, Route, Redirect} from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./FooterComponent";
import Classes from "./ClassesComponent";
import Inspiration from "./InspirationComponent";
import QUICK_TIPS from "../shared/QuickTips";
import ARTICLES_DATA from "../shared/ArticleData";
import CAROUSEL_DATA from "../shared/CarouselData";
import FREQUENTLY_ASKED from "../shared/FrequentlyAsked";
import CLASSES_DATA from "../shared/ClassesData";


class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES_DATA,
            carousels: CAROUSEL_DATA,
            quickTips: QUICK_TIPS,
            faqs: FREQUENTLY_ASKED,
            classes: CLASSES_DATA
        };
        
    }


    render() {
        return(
            <React.Fragment>
                <Navigation />
                <Switch>
                    <Route exact path="/classes" render={() => <Classes classes={this.state.classes} />} />
                    <Route exact path="/inspiration" render={() => <Inspiration inspiration={this.state.carousels}/>} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default SwitchComponent;