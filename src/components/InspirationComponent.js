import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
  Container
} from 'reactstrap';



/*****************************************************
 * What you have now isn't working. Try what is at this link
 * https://react-bootstrap.github.io/components/carousel/
 *******************************************************/

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
          <img src={inspire.src} alt={inspire.altText} className="carouselImg"  />
          <CarouselCaption captionText={inspire.caption} captionHeader={inspire.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <React.Fragment>
        <Container fluid className="carouselContainer text-center pb-3">
          <h2>Inspiration</h2>
          <h5>Take a stroll through quilts submitted by our teachers, students, and friends to gather inspiration for your own quilts.</h5>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="carouselStyle mx-auto"
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