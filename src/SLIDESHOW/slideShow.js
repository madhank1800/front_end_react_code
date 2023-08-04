import React from "react";
import './slideShow.css';
const SlideShow = () => {



  

    
    return (
      <>
        {/* <div className="slideShowClass ">
          <div
            id="carouselExampleIndicators shadow-lg"
            className="carousel slide carouselSlideClassMain  carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" >
                <img
                  src="/images/slideShowImage.jpg"
                  className="d-block w-100"
                  alt="slide"
                />
              </div>
              <div className="carousel-item" >
                <img
                  src="/images/slideShowImage2.jpg"
                  className="d-block w-100"
                  alt="slide"
                />
              </div>
              <div className="carousel-item" >
                <img
                  src="/images/slideShowImage3.jpg"
                  className="d-block w-100"
                  alt="slide"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev carouselButtonClass"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon iconColor"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carouselButtonClass1"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon iconColor"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}

        <div id="slideShowClass">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide shadow-lg   carouselSlideClassMain"
            data-bs-ride="carousel"
            data-bs-interval="1000"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div
              class="carousel-inner"
              data-bs-interval="1000"
             
            >
              <div class="carousel-item active" data-bs-interval="1000">
                <img
                  src="/images/slideShowImage3.jpg"
                  class="d-block w-100"
                  alt="slide"
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="/images/slideShowImage2.jpg"
                  class="d-block w-100"
                  alt="slide"
                />
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img
                  src="/images/slideShowImage.jpg"
                  class="d-block w-100"
                  alt="slide"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev carouselButtonClass"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon iconColor"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next carouselButtonClass1"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon iconColor"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </>
    );

}

export default SlideShow;