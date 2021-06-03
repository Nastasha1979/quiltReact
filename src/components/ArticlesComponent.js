import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Media, Fade, Container } from 'reactstrap';
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
              <Media object src={article.pic} alt="Image associated with Article" className="pr-2 justify-content-center d-none d-lg-block"/>
          </Media>
          <Media body>
              <div>
                {fullText}
                <div className="fullArticleLink">
                  <a href={article.readMoreLink} target="_blank" rel="noreferrer">Read Full Article...</a>
                </div>
              </div>  
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
    
      <Container fluid className="articleContainer" id="articlesComp">
        <Row>
            <Col xs="12">
                <h2 className="mainHeader my-2">Articles</h2>
            </Col>
        </Row>
        <Row className="pb-5">
            <Col xs="8" className="m-auto text-center text-muted">
                <h5 className="text-muted subHeader">Stay up-to-date on the world of quilting with top experts from around the world.</h5>
            </Col>
        </Row>
          
        <Nav tabs>
          <NavItem className="col-12 col-xl-3">
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Quilt Project Planning
            </NavLink>
          </NavItem>
          <NavItem className="col-12 col-xl-3">
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Straight Line Quilting
            </NavLink>
          </NavItem>
          <NavItem className="col-12 col-xl-3">
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              The 4 Best Quilt Rulers
            </NavLink>
          </NavItem>
          <NavItem className="col-12 col-xl-3">
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
                      <Col sm="12">
                          {texts}
                      </Col>
              </Row>
          </TabPane>
          <TabPane tabId="3">
              <Row>
                  <Col sm="12" className="text-center">
                      <h4>The 4 Best Quilting Rulers<small> Suzy Williams</small></h4>
                  </Col>
              </Row>
              <Row>
                      <Col sm="12">
                          {texts}
                      </Col>
              </Row>
          </TabPane>
          <TabPane tabId="4">
              <Row>
                  <Col sm="12" className="text-center">
                      <h4>Five Best Sewing Machines For Quilting<small> Keri Weichert</small></h4>
                  </Col>
              </Row>
              <Row>
                      <Col sm="12">
                          {texts}
                      </Col>
              </Row>
          </TabPane>
        </TabContent>
      </Container>
    
  );
}



export default Articles;