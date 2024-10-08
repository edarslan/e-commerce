import { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import productsData from "../../../data.json";
import "./Gallery.css";
const Gallery = () => {
  const [activeImg, setActiveImg] = useState(productsData[0].img.singleImage);


  function PrevBtn({ onClick }) {
    return (
      <button
      className="glide__arrow glide__arrow--left"
      data-glide-dir="<" onClick={onClick}
      style={{
        zIndex: "2"
      }}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
    );
  }
  PrevBtn.propTypes = {
    onClick: PropTypes.func,
  };  
  
function NextBtn({ onClick }) {
  return (
    <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">" onClick={onClick}
            style={{
              zIndex: "2"
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
  );
}
NextBtn.propTypes = {
  onClick: PropTypes.func,
};


  
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    
    
    
  };
  
  return (
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`/${activeImg}`} id="single-image" alt="" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol className="gallery-thumbs glide__slides">
           <Slider {...sliderSettings}>
            {productsData[0].img.thumbs.map((itemImg, index) => (
              <li className="glide__slide glide__slide--active" key={index} onClick={()=> setActiveImg(itemImg)}>
              <img
                src={`/${itemImg}`}
                alt=""
                className={`img-fluid ${itemImg === activeImg ? "active" : ""}`}
              />
            </li>
            ))}

           </Slider>
            

          
          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
        
          
        </div>
      </div>
    </div>
  );
};

export default Gallery;
