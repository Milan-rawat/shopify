import React, { Component } from "react";
import "./Main.css";
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
