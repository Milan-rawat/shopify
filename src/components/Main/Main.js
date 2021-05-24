import React, { Component } from "react";
import "./Main.css";

import sliderBanner1 from "../Images/sliderBanner1.jpg";
import sliderBanner2 from "../Images/sliderBanner2.jpg";
import sliderBanner3 from "../Images/sliderBanner3.jpg";
import sliderBanner4 from "../Images/sliderBanner4.jpg";
import sliderBanner5 from "../Images/sliderBanner5.jpg";
import sliderBanner6 from "../Images/sliderBanner6.jpg";
import categoryImg1 from "../Images/categoryImg1.png";
import categoryImg2 from "../Images/categoryImg2.png";
import categoryImg3 from "../Images/categoryImg3.png";
import categoryImg4 from "../Images/categoryImg4.png";
import categoryImg5 from "../Images/categoryImg5.png";
import categoryImg6 from "../Images/categoryImg6.png";
import categoryImg7 from "../Images/categoryImg7.png";
import Slider from "infinite-react-carousel";

class Main extends Component {
  constructor(props) {
    super(props);

    this.loop = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.state = {
      productOverviewDetails: {
        image: { categoryImg1 },
        productName: "Mens Shoes",
        productDescription:
          "this is such a nice product, everyone should buy it.",
        productRating: "4",
      },
    };
  }

  render() {
    const bannerSettings = {
      autoplay: true,
      // dots: true,
      duration: 100,
    };
    return (
      <div className="homeMain">
        <div className="categoryBox">
          {/* <div className="categories"> */}
          <div className="category">
            <img id="categoryImage" src={categoryImg1} alt="category" />
          </div>
          <div className="category">
            <img id="categoryImage" src={categoryImg2} alt="category" />
          </div>
          <div className="category">
            <img id="categoryImage" src={categoryImg3} alt="category" />
          </div>
          <div className="category">
            <img id="categoryImage" src={categoryImg4} alt="category" />
          </div>
          <div className="category">
            <img id="categoryImage" src={categoryImg5} alt="category" />
          </div>
          <div className="category">
            <img id="categoryImage" src={categoryImg6} alt="category" />
          </div>
          <div className="category">
            <img id="categoryImage" src={categoryImg7} alt="category" />
          </div>
        </div>
        <div className="bannerSlider">
          <Slider {...bannerSettings}>
            <div className="banner">
              <img id="bannerImage" src={sliderBanner1} alt="Product Offer" />
            </div>
            <div className="banner">
              <img id="bannerImage" src={sliderBanner2} alt="Product Offer" />
            </div>
            <div className="banner">
              <img id="bannerImage" src={sliderBanner3} alt="Product Offer" />
            </div>
            <div className="banner">
              <img id="bannerImage" src={sliderBanner4} alt="Product Offer" />
            </div>
            <div className="banner">
              <img id="bannerImage" src={sliderBanner5} alt="Product Offer" />
            </div>
            <div className="banner">
              <img id="bannerImage" src={sliderBanner6} alt="Product Offer" />
            </div>
          </Slider>
        </div>

        <div className="homeFeaturedProductsBox">
          <span className="featuredHeading">
            <h3>Featured</h3>
          </span>
          <div className="homeFeaturedProducts">
            {this.loop.map((serial) => (
              <div className="homeFeaturedProduct" key={serial}>
                <img
                  id="homeFeaturedProductImage"
                  src={categoryImg1}
                  alt="product"
                />
                <h3 id="homeFeaturedProductName">Mens Shoes</h3>
                <span id="homeFeaturedProductDescription">
                  this shoes is the best, please purchase this shoes.
                </span>
                <span id="homeFeaturedProductRating">Rating: 4.9 (14363)</span>
              </div>
            ))}
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
    );
  }
}

export default Main;
