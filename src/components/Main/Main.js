import React, { Component } from "react";
import "./Main.css";
import bannerSlider1 from "../Images/bannerSlider1.jpg";
import bannerSlider2 from "../Images/bannerSlider2.jpg";
import bannerSlider3 from "../Images/bannerSlider3.jpg";
import bannerSlider4 from "../Images/bannerSlider4.jpg";
import bannerSlider5 from "../Images/bannerSlider5.jpg";
import Slider from "infinite-react-carousel";

class Main extends Component {
  render() {
    const bannerSettings = {
      autoplay: true,
      // dots: true,
      duration: 100,
    };
    return (
      <>
        <div className="homeMain">
          <div className="categoryBox">
            {/* <div className="categories"> */}
            <div className="category">
              <h1>1</h1>
            </div>
            <div className="category">
              <h1>2</h1>
            </div>
            <div className="category">
              <h1>3</h1>
            </div>
            <div className="category">
              <h1>4</h1>
            </div>
            <div className="category">
              <h1>5</h1>
            </div>
            <div className="category">
              <h1>6</h1>
            </div>
            <div className="category">
              <h1>7</h1>
            </div>
            <div className="category">
              <h1>8</h1>
            </div>
            <div className="category">
              <h1>9</h1>
            </div>
            <div className="category">
              <h1>10</h1>
            </div>
            <div className="category">
              <h1>11</h1>
            </div>
            <div className="category">
              <h1>12</h1>
            </div>
            {/* </div> */}
          </div>
          <div className="bannerSlider">
            <Slider {...bannerSettings}>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider1} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider2} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider3} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider4} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider5} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider1} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider2} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider3} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider4} alt="Banner image" />
              </div>
              <div className="banner">
                <img id="bannerImage" src={bannerSlider5} alt="Banner image" />
              </div>
            </Slider>
          </div>

          <div className="homeFeaturedProductsBox">
            <span className="featuredHeading">
              <h3>Featured</h3>
            </span>
            <div className="homeFeaturedProducts">
              <div className="featuredProducts">
                <h1>1</h1>
              </div>
              <div className="featuredProducts">
                <h1>2</h1>
              </div>
              <div className="featuredProducts">
                <h1>3</h1>
              </div>
              <div className="featuredProducts">
                <h1>4</h1>
              </div>
              <div className="featuredProducts">
                <h1>5</h1>
              </div>
              <div className="featuredProducts">
                <h1>6</h1>
              </div>
              <div className="featuredProducts">
                <h1>7</h1>
              </div>
              <div className="featuredProducts">
                <h1>8</h1>
              </div>
              <div className="featuredProducts">
                <h1>9</h1>
              </div>
            </div>
          </div>

          <div className="mayLikeProductBox">
            <span className="mayLikeProductsHeading">You may like</span>
            <div className="mayLikeProducts">
              <div className="mayLikeProduct">
                <h1>1</h1>
              </div>
              <div className="mayLikeProduct">
                <h1>2</h1>
              </div>
              <div className="mayLikeProduct">
                <h1>3</h1>
              </div>
              <div className="mayLikeProduct">
                <h1>4</h1>
              </div>
            </div>
          </div>

          <div className="homeFeaturedProductsBox">
            <span className="featuredHeading">
              <h3>Featured</h3>
            </span>
            <div className="homeFeaturedProducts">
              <div className="featuredProducts">
                <h1>1</h1>
              </div>
              <div className="featuredProducts">
                <h1>2</h1>
              </div>
              <div className="featuredProducts">
                <h1>3</h1>
              </div>
              <div className="featuredProducts">
                <h1>4</h1>
              </div>
              <div className="featuredProducts">
                <h1>5</h1>
              </div>
              <div className="featuredProducts">
                <h1>6</h1>
              </div>
              <div className="featuredProducts">
                <h1>7</h1>
              </div>
              <div className="featuredProducts">
                <h1>8</h1>
              </div>
              <div className="featuredProducts">
                <h1>9</h1>
              </div>
            </div>
          </div>

          <div className="homeFeaturedProductsBox">
            <span className="featuredHeading">
              <h3>Featured</h3>
            </span>
            <div className="homeFeaturedProducts">
              <div className="featuredProducts">
                <h1>1</h1>
              </div>
              <div className="featuredProducts">
                <h1>2</h1>
              </div>
              <div className="featuredProducts">
                <h1>3</h1>
              </div>
              <div className="featuredProducts">
                <h1>4</h1>
              </div>
              <div className="featuredProducts">
                <h1>5</h1>
              </div>
              <div className="featuredProducts">
                <h1>6</h1>
              </div>
              <div className="featuredProducts">
                <h1>7</h1>
              </div>
              <div className="featuredProducts">
                <h1>8</h1>
              </div>
              <div className="featuredProducts">
                <h1>9</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
