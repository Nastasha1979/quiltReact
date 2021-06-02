import React, { Component } from "react";
import{ Switch, Route, Redirect} from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./FooterComponent";
import Classes from "./ClassesComponent";
import Inspiration from "./InspirationComponent";
import Articles from "./ArticlesComponent";
import QuickTips from "./QuickTipsComponent";
import FrequentlyAsked from "./FrequentlyAsked";
import Newsletter from "./NewsletterComponent";
import About from "./AboutComponent";
import ClassInfoComponent from "./ClassInfoComponent";
import QUICK_TIPS from "../shared/QuickTips";
import ARTICLES_DATA from "../shared/ArticleData";
import CAROUSEL_DATA from "../shared/CarouselData";
import FREQUENTLY_ASKED from "../shared/FrequentlyAsked";
import CLASSES_DATA from "../shared/ClassesData";
import CLASS_INFO from "../shared/ClassInfoData";
import {TransitionGroup, CSSTransition} from "react-transition-group";





class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES_DATA,
            carousels: CAROUSEL_DATA,
            quickTips: QUICK_TIPS,
            faqs: FREQUENTLY_ASKED,
            classes: CLASSES_DATA,
            classInfoData: CLASS_INFO
        };
        
    }

    


    render() {
        const classInfos = ({match}) => {
            
            return(
                <ClassInfoComponent classInfo={this.state.classInfoData.filter(classInfo => classInfo.id === +match.params.classInfoId)[0]} />
            );
        };
        
        return(
            <React.Fragment>
                <Navigation />
                
                        <Switch>                 
                            <Route exact path="/classes" render={() => <Classes classes={this.state.classes}/>} />                   
                            <Route exact path="/inspiration" render={() => <Inspiration inspiration={this.state.carousels}/>} />
                            <Route exact path="/articles" render={() => <Articles articles={this.state.articles} />} />
                            <Route exact path="/quickTips" render={() => <QuickTips quickTips={this.state.quickTips} />} />
                            <Route exact path="/faq" render={() => <FrequentlyAsked faqs={this.state.faqs} />} />
                            <Route exact path="/classInfo/:classInfoId" component={classInfos} />               
                        </Switch>                      
                <Newsletter />
                <Switch>
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
                {/* <TodoList /> */}
            </React.Fragment>
        );
    }
}

export default SwitchComponent;