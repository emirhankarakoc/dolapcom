import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import ProductManager from "../services/ProductManager";
import { Container, Image } from "semantic-ui-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ResimGalerisi() {
  const { urun_id } = useParams();

  const [product, setProducts] = useState({});
  useEffect((id) => {
    let productService = new ProductManager();
    productService
      .getProductById(urun_id)
      .then((result) => setProducts(result.data));
  });
  const images = [
    {
      id: 0,
      url: product.fotografLink1,
    },
    {
      id: 1,
      url: product.fotografLink2,
    },
    {
      id: 2,
      url: product.fotografLink3,
    },
    {
      id: 3,
      url: product.fotografLink4,
    },
  ];

  const [index, setIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState(images[0].url);

  const increase = () => {
    setIndex(index + 1);
    if (index === images.length - 1) setIndex(0);
    getImage(images, index);
  };

  const decrease = () => {
    setIndex(index - 1);
    if (index <= 0) setIndex(0);
    getImage(images, index);
  };

  
  const getImage = (arr, id) => {
    const object = arr.find((item) => item.id === id && item.url != null);;

    setImageUrl(object.url);
  };


  console.log(index);

  return (
    <div onChange={increase} className="wrapper-fakabasti">
      <div>
        <img className="image-fakabasti" alt="" src={imageUrl} />
        <div className="buttons-bakabasti">
          <button onClick={decrease}>Ilerle</button>
          <button onClick={increase}>Right</button>
        </div>
      </div>
    </div>
  );
}

