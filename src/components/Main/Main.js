import React, { Component } from "react";
import "./Main.css";
import Slider from "infinite-react-carousel";

class Main extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      duration: 100,
    };
    return (
      <>
        <div className="homeMain">
          <div className="bannerSlider">
            <Slider {...settings}>
              <div className="banner">
                <h3>1</h3>
              </div>
              <div className="banner">
                <h3>2</h3>
              </div>
              <div className="banner">
                <h3>3</h3>
              </div>
              <div className="banner">
                <h3>4</h3>
              </div>
              <div className="banner">
                <h3>5</h3>
              </div>
              <div className="banner">
                <h3>6</h3>
              </div>
              <div className="banner">
                <h3>7</h3>
              </div>
              <div className="banner">
                <h3>8</h3>
              </div>
              <div className="banner">
                <h3>9</h3>
              </div>
              <div className="banner">
                <h3>10</h3>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
