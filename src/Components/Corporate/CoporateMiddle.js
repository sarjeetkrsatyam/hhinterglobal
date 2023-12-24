import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CorporateMiddle.css";

const CoporateMiddle = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid p-0">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="caro-img-container">
            <img
              src="https://www.hughes.in/sites/hughes.in/files/banking_0.jpg" alt="images"
              className="caro-img-cont"
            />
          </div>
          <Carousel.Caption className="text-cente">
            <h1 className="carosoul-text-h1">
              Business <br /> Beyond Borders
            </h1>
            <h2>
              Asia Safest Bank * is now in <br /> Gift City Chennai{" "}
            </h2>
            {/* <p>Hinter Global Bank works around your schedule, offering innovative products <br/> that is better, faster and affordable.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <div className="caro-img-container">
            <img
              src="https://de.statebank/documents/1904296/1910068/shutterstock_519378679-Personal-and-Corporate-Banking.jpg/7f91898b-d1ba-6b20-8a83-afa0330439e0?t=1574059894106" alt="images"
              className="caro-img-cont"
            />
          </div>
          <Carousel.Caption className="text-cente">
            <h1 className="carosoul-text-h1">
              Accelerating our <br />
              net zero commitment
            </h1>
            <h2>A responsible, pragmatic and impactful approach </h2>
            {/* <p>Hinter Global Bank works around your schedule, offering innovative products <br/> that is better, faster and affordable.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <div className="caro-img-container">
            <img
              src="https://av.sc.com/hk/content/images/hk-gba-business-and-enterprises-banner.jpg" alt="images"
              className="caro-img-cont"
            />
          </div>

          <Carousel.Caption className="text-cente">
            <h1 className="carosoul-text-h1">Corporate Banking</h1>
            <h2>Transform your business with our industry experties. </h2>
            {/* <p>Hinter Global Bank works around your schedule, offering innovative products <br/> that is better, faster and affordable.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}

          <div className="caro-img-container">
            <img
              src="https://www.cimb.com.sg/content/dam/cimbsg/business/images/home/1920x800-homepage-hero-rotatet2-bizgo-lite-20210225-1.jpg" alt="images"
              className="caro-img-cont"
            />
          </div>
          <Carousel.Caption className="text-cente">
            <h1 className="carosoul-text-h1">
              {" "}
              Hinter Global Bank India completes maiden active loan switch <br /> ahead of
              LIBOR transition
            </h1>

            {/* <p>Hinter Global Bank works around your schedule, offering innovative products <br/> that is better, faster and affordable.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <div className="caro-img-container">
            <img
              src="https://www.indusind.com/iblogs/wp-content/uploads/personal-loan.png" alt="images"
              className="caro-img-cont"
            />
          </div>
          <Carousel.Caption className="text-cente">
            <h1 className="carosoul-text-h1">
              Financing green initiative att Hinter Global
            </h1>
            <h2>
              Companies are actively transitioning to a net-zero future and
              financiers have a critical role to play in enabling this .{" "}
            </h2>
            {/* <p>Hinter Global Bank works around your schedule, offering innovative products <br/> that is better, faster and affordable.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=f5f5f5"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
};

export default CoporateMiddle;
