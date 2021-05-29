import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Media, Fade } from 'reactstrap';
import { Link } from "react-router-dom";
import classnames from 'classnames';




function GetPanel({article}) {
  const [fadeIn] = useState(true);
    const fullText = article.text.map(para => {
        return(
            <p className="d-none d-md-block">{para}</p>
        );
    });

    return(
      <Fade in={fadeIn}>
        <Media className="articleMediaStyle" key={article.key}>
            <Media left>
                <Media object src={article.pic} alt="ERROR Loading" className="pr-2 justify-content-center d-none d-lg-block"/>
            </Media>
            <Media body>
                <div >
                    {fullText}
                </div>
                <a href={article.readMoreLink} target="_blank">Read Full Article...</a>
            </Media>
        </Media>
      </Fade>
        
        
    );

}

const Articles = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const texts = props.articles.filter(article => article.key === +activeTab).map(article => {
      return(
        <GetPanel article={article} />
      );
  })

  return (
    
      <div className="container-fluid articleContainer" id="articlesComp">
          <div className="row">
              <div className="col">
                  <h2 className="mainHeader my-2">Articles</h2>
              </div>
          </div>
          <div className="row pb-5">
              <div className="col">
                  <h5 className="text-muted subHeader">Stay up-to-date on the world of quilting with top experts from around the world.</h5>
              </div>
          </div>
          
        <Nav tabs>
          <NavItem className="col-12 col-lg-3">
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Quilt Project Planning
            </NavLink>
          </NavItem>
          <NavItem className="col-12 col-lg-3">
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Straight Line Quilting
            </NavLink>
          </NavItem>
          <NavItem className="col-12 col-lg-3">
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              The 4 Best Quilt Rulers
            </NavLink>
          </NavItem>
          <NavItem className="col-12 col-lg-3">
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => { toggle('4'); }}
            >
              Five Best Sewing Machines
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" className="text-center">
                  <h4>Quilt Project Planning <small>Sherri McConnell</small></h4>
              </Col>
            </Row>
            <Row> 
              <Col sm="12">
                  {texts}
              </Col>   
            </Row>
          </TabPane>
          <TabPane tabId="2">
              <Row>
                  <Col sm="12" className="text-center">
                      <h4>Straight Line Quilting <small>SewCanShe</small></h4>
                  </Col>
              </Row>
              <Row>
                  <Media>
                      <Col sm="12">
                          {texts}
                      </Col>
                  </Media>
              </Row>
          </TabPane>
          <TabPane tabId="3">
              <Row>
                  <Col sm="12" className="text-center">
                      <h4>The 4 Best Quilting Rulers<small> Suzy Williams</small></h4>
                  </Col>
              </Row>
              <Row>
                  <Media>
                      <Col sm="12">
                          {texts}
                      </Col>
                  </Media>
              </Row>
          </TabPane>
          <TabPane tabId="4">
              <Row>
                  <Col sm="12" className="text-center">
                      <h4>Five Best Sewing Machines For Quilting<small> Keri Weichert</small></h4>
                  </Col>
              </Row>
              <Row>
                  <Media>
                      <Col sm="12">
                          {texts}
                      </Col>
                  </Media>
              </Row>
          </TabPane>
        </TabContent>
      </div>
    
  );
}



export default Articles;