import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ProductManager from '../services/ProductManager';

import "./x.css";
export const ResimGalerisi_2 = () => {
    const { urun_id } = useParams();

    const [product, setProducts] = useState({});
    useEffect((id) => {
      let productService = new ProductManager();
      productService
        .getProductById(urun_id)
        .then((result) => setProducts(result.data));
    });





  const imgs = [
    product.fotografLink1,
    product.fotografLink2,
    product.fotografLink3,
    product.fotografLink4   
  ];
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {imgs.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={img} width={"300px"} height={"300px"} alt="..." />
            </div>
          ))}
        </div>
        <div className="carousel-indicator">
          {imgs.map((img, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to={index}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            >
              <img src={img} alt="" width={"60px"} height={"80px"} />
            </button>
          ))}
        </div>
        <div className="carousel-nav">
          <div className="brands">
          <i className="fa-solid fa-share"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div>
            <button
              className="btn"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className="btn"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
