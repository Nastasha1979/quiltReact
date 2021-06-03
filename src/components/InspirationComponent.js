import React, { useState } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselCaption, Container, Row, Col } from 'reactstrap';
import { GlassMagnifier, MOUSE_ACTIVATION, TOUCH_ACTIVATION } from "react-image-magnifiers";
  
  

 const Inspiration = ({inspiration}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === inspiration.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? inspiration.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
  
    const slides = inspiration.map((inspire) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={inspire.src}
        >
          <GlassMagnifier
            imageSrc={inspire.src}
            imageAlt={inspire.altText}
            mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK}
            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
            className="carouselImg"
          />
          
          <CarouselCaption captionText={inspire.caption} captionHeader={inspire.header} />
        </CarouselItem>
      );
    });
  
    return (
      <React.Fragment>
        <Container fluid className="carouselContainer text-center pb-3" id="inspirationComp">
          <Row>
            <Col xs="12" className="text-center my-4">
              <h2 className="mainHeader">Inspiration</h2>
            </Col>
            <Col xs="8" className="m-auto text-center text-muted my-4">
              <h5 className="subHeader">Take a stroll through quilts submitted by our teachers, students, and friends to gather inspiration for your own quilts.</h5>
            </Col>
          </Row>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="carouselStyle mx-auto"
            pause="hover"
          >
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Container>
      </React.Fragment>
    );
  }

export default Inspiration;