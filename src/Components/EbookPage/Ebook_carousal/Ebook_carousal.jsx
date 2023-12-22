import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../Ebook_carousal/Ebook_carousal.css'

import { Link } from 'react-router-dom';



const Slide = ({ imageSrc, title, subtitle }) => (
  <>
  <div className="image-carousalcontent-container">
    <img src={imageSrc} alt={title} />
    <div className="carousel-caption">
      <h3 className="carousel-caption-title">{title}</h3>
      <p className="carousel-caption-subtitle">{subtitle}</p>
      <Link>Get Yours Now</Link>
    </div></div>
  </>
);

const CarouselButton = ({ useTriangle, color, disabled, clickHandler, icon, isLeftIcon }) => (
  <div className={`carousel-${isLeftIcon ? 'left' : 'right'}-arrow carousel-control`}>
    <div
      className={useTriangle ? `${isLeftIcon ? 'left' : 'right'}-triangle` : ''}
      style={{
        ...(isLeftIcon
          ? { borderLeftColor: useTriangle ? color : '' }
          : { borderRightColor: useTriangle ? color : '' }),
      }}
    />
    <button
      className={!useTriangle ? `padding-${isLeftIcon ? 'left' : 'right'}-15` : ''}
      disabled={disabled}
      onClick={clickHandler}
    >
      {icon}
    </button>
  </div>
);

const CarouselIndicators = ({
  position,
  nextActiveIndex,
  indicatorsColor,
  clickHandler,
  slides,
}) => (
  <ol className={`carousel-indicators ${position}`}>
    {slides.map((el, i) => (
      <li
        key={i}
        className={i === nextActiveIndex ? 'active' : ''}
        //eslint-ignore-next-line
        style={{ '--indicatorsColor': indicatorsColor }}
        onClick={() => {
          if (slides.length !== 1 && i !== nextActiveIndex) {
            return clickHandler(i);
          }
          return null;
        }}
      />
    ))}
  </ol>
);

const Ebook_carousal = ({
  autoPlay = false,
  activeSlideDuration = 300000, //how long a slide will be displayed
  interactionMode = 'swipe', //swipe or hover
  indicatorsColor = '#ffffff',
  alignIndicators = 'center', //center, left, right
  alignCaption = 'center', //center, left, right
  useRightLeftTriangles = false,
  leftTriangleColor = '#ffffff',
  leftIcon,
  rightTriangleColor = '#ffffff',
  rightIcon,
  slides = [],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextActiveIndex, setNextActiveIndex] = useState(0);
  const [activeIndexClasses, setActiveIndexClasses] = useState(['active-slide']);
  const [nextActiveIndexClasses, setNextActiveIndexClasses] = useState([]);
  const [disablePrevNext, setDisablePrevNext] = useState(false);
  const [xCoordinate, setXCoordinate] = useState(null);

  const [indicatorPosition, setIndicatorPosition] = useState('position-center');

  const animationDuration = 600;

  const autoSlide = useRef(null);

  const direction = useRef('to-left');

  useEffect(() => {
    if (alignIndicators === 'right') {
      setIndicatorPosition('position-right');
    } else if (alignIndicators === 'left') {
      setIndicatorPosition('position-left');
    }
  }, [alignIndicators]);

  // show the next slide in the view port based on the direction
  const animateSliding = useCallback(() => {
    let newActiveIndexClasses = [];
    let newNextActiveIndexClasses = [];

    // attach the following classes if the user click the next button
    if (direction.current === 'to-left') {
      newActiveIndexClasses.push('active-slide', 'exit-to-left');
      newNextActiveIndexClasses.push('active-slide', 'next-active-slide', 'enter-to-left');
    } else {
      // attach the following classes if the user click the prev button
      newActiveIndexClasses.push('active-slide', 'exit-to-right');
      newNextActiveIndexClasses.push('active-slide', 'next-active-slide', 'enter-to-right');
    }

    setActiveIndexClasses(newActiveIndexClasses);
    setNextActiveIndexClasses(newNextActiveIndexClasses);
  }, []);

  const setActiveSlide = (nextActiveI) => {
    setActiveIndex(nextActiveI);
    setActiveIndexClasses(['active-slide']);
    setNextActiveIndexClasses([]);
    setDisablePrevNext(false);
  };

  // used to restart auto sliding when user click prev, next button or on the carousel indicator
  const restartAutoSliding = useCallback(
    (nextAcIn) => {
      setNextActiveIndex(nextAcIn);
      setDisablePrevNext(true);

      // attach the required classes to animate the transition between slides
      animateSliding();

      let startId = null;
      // reset classes and enable prev & next btns after the animation duration
      startId = setTimeout(() => {
        setActiveSlide(nextAcIn);
        clearInterval(startId);
      }, animationDuration);

      // restart auto sliding
      autoSlide.current = autoPlay
        ? setInterval(() => {
          //stop auto sliding (so that when user click the next button we can reset the timer for auto sliding)
          stopAutoSliding();

          // set direction to left because slide is coming from the right side to the view port
          direction.current = 'to-left';

          // set the next active index
          let nextActiveI = activeIndex + 1;

          // if we reach the last slide reset the next active index to 0
          if (nextActiveI === slides.length) {
            nextActiveI = 0;
          }

          // restart auto sliding
          restartAutoSliding(nextActiveI);
        }, activeSlideDuration)
        : null;
    },
    [animateSliding, activeSlideDuration, activeIndex, autoPlay, slides.length]
  );

  const nextSlide = useCallback(() => {
    //stop auto sliding (so that when user click the next button we can reset the timer for auto sliding)
    stopAutoSliding();

    // set direction to left because slide is coming from the right side to the view port
    direction.current = 'to-left';

    // set the next active index
    let nextActiveI = activeIndex + 1;

    // if we reach the last slide reset the next active index to 0
    if (nextActiveI === slides.length) {
      nextActiveI = 0;
    }

    // restart auto sliding
    restartAutoSliding(nextActiveI);
  }, [activeIndex, slides.length, restartAutoSliding]);

  const startAutoSliding = useCallback(() => {
    autoSlide.current = autoPlay ? setInterval(nextSlide, activeSlideDuration) : null;
  }, [autoPlay, activeSlideDuration, nextSlide]);

  const stopAutoSliding = () => {
    clearInterval(autoSlide.current);
  };

  useEffect(() => {
    startAutoSliding();
    return () => stopAutoSliding();
  }, [startAutoSliding]);

  // used to unify the touch and click cases
  const unify = (e) => (e.changedTouches ? e.changedTouches[0] : e);

  // get and set the x coordinate
  const getSetXCoordinate = (e) => setXCoordinate(unify(e).clientX);

  // move the slide based on the swipe direction
  const moveSlide = (e) => {
    if (xCoordinate || xCoordinate === 0) {
      const dx = unify(e).clientX - xCoordinate;
      const s = Math.sign(dx);

      if (s < 0) {
        nextSlide();
      } else if (s > 0) {
        prevSlide();
      }
    }
  };

  const prevSlide = () => {
    //stop auto sliding (so that when user click the prev button we can reset the timer for auto sliding)
    stopAutoSliding();

    // set direction to right because slide is coming from the left side to the view port
    direction.current = 'to-right';

    // set the next active index
    let nextActiveI = activeIndex - 1;

    // if we are at the first slide set the next active index to the last slide
    if (nextActiveI < 0) {
      nextActiveI = slides.length - 1;
    }

    // restart auto sliding
    restartAutoSliding(nextActiveI);
  };

  const onCarouselIndicator = (index) => {
    //stop auto sliding
    stopAutoSliding();

    // set the next active index
    let nextActiveI = index;

    // set the direction of the carousel based on the clicked indicator index
    if (nextActiveI < activeIndex) {
      direction.current = 'to-right';
    } else {
      direction.current = 'to-left';
    }

    // restart auto sliding
    restartAutoSliding(nextActiveI);
  };

  return (
    <div
      className="carousel-slider-wrapper"
      style={{
        cursor: interactionMode === 'swipe' ? 'pointer' : '',
      }}
      onMouseDown={(e) => {
        if (interactionMode !== 'swipe') {
          return;
        }
        getSetXCoordinate(e);
      }}
      onTouchStart={(e) => {
        if (interactionMode !== 'swipe') {
          return;
        }
        getSetXCoordinate(e);
      }}
      onMouseUp={(e) => {
        if (disablePrevNext || interactionMode !== 'swipe') {
          return;
        }
        moveSlide(e);
      }}
      onTouchEnd={(e) => {
        if (disablePrevNext || interactionMode !== 'swipe') {
          return;
        }
        moveSlide(e);
      }}
      onMouseMove={(e) => {
        if (interactionMode !== 'swipe') {
          return;
        }
        e.preventDefault();
      }}
      onTouchMove={(e) => {
        if (interactionMode !== 'swipe') {
          return;
        }
        e.preventDefault();
      }}
    >
      {/*(onMouseDown & onTouchStart) & (onMouseUp & onTouchEnd) used to detect the motion direction*/}
      {/*(onMouseMove & onTouchMove) used to prevent edge from navigating the
                 opposite motion direction (also sometimes on chrome)*/}
      {slides.map((el, i) => {
        let classes = '';

        if (i === activeIndex) {
          classes = activeIndexClasses.join(' ');
        } else if (i === nextActiveIndex) {
          classes = nextActiveIndexClasses.join(' ');
        }

        return (
          <div
            key={i}
            className={`carousel-slide ${classes} ${interactionMode === 'swipe' ? 'swipe' : ''}`}
            style={{ textAlign: alignCaption }}
            // the following events to pause the auto slide on hover
            onMouseEnter={() => {
              if (interactionMode !== 'hover') {
                return;
              }
              stopAutoSliding();
            }}
            onMouseLeave={() => {
              if (interactionMode !== 'hover') {
                return;
              }
              startAutoSliding();
            }}
          >
            <Slide imageSrc={el.image} title={el.title} subtitle={el.subtitle} />
          </div>
        );
      })}
      {/* carousel controls*/}
      <CarouselButton
        useTriangle={useRightLeftTriangles}
        color={leftTriangleColor}
        disabled={disablePrevNext}
        clickHandler={() => {
          if (slides.length !== 1) {
            return prevSlide()
          }
          return null;
        }}
        icon={
          leftIcon ? (
            leftIcon
          ) : (
            <></>
          )
        }
        isLeftIcon
      />
      <CarouselButton
        useTriangle={useRightLeftTriangles}
        color={rightTriangleColor}
        disabled={disablePrevNext}
        clickHandler={() => {
          if (slides.length !== 1) {
            return nextSlide();
          }
          return null;
        }}
        icon={
          rightIcon ? (
            rightIcon
          ) : (
            <></>
          )
        }
      />
      {/*carousel indicators*/}
      <CarouselIndicators
        position={indicatorPosition}
        nextActiveIndex={nextActiveIndex}
        indicatorsColor={indicatorsColor}
        clickHandler={onCarouselIndicator}
        slides={slides}
      />
    </div>
  );
};



export default Ebook_carousal
