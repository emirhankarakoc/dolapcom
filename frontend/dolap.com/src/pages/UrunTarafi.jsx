import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Grid,
  GridRow,
  GridColumn,
  Button,
  Image,
  Icon,
} from "semantic-ui-react";
import ProductManager from "../services/ProductManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faCircleCheck,
  faLock,
  faComments,
  faTruckFast,
  faCreditCard,
  faCircle,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function UrunTarafi() {
  const { urun_id } = useParams();

  const [product, setProducts] = useState({ ustMenuUrunYollari: [] });
  useEffect((id) => {
    let productService = new ProductManager();
    productService
      .getProductById(urun_id)
      .then((result) => setProducts(result.data));
  });

  return (
    <div className="bg-white margin-top-10px">
      <Grid divided="vertically">
        <Grid.Row divided="vertically">
          <Grid.Column
            divided
            width={10}
            className="text-align-left margin-left-5px"
          >
            <p className="buyutulmus-p">{product.urunBaslik}</p>
          </Grid.Column>

          <Grid.Column className="tac-emir" width={5}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "#ff0000" }}
              size="3x"
            />
            <p>{product.begeniSayisi} beğeni</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={10}>
            <Grid>
              <Grid.Row className="padding-YOK">
                <Grid.Column>
                  {" "}
                  <p className="buyutulmus-p float-left ustucizili-metin">
                    {" "}
                    {product.urununYuksekFiyati} TL
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className="padding-YOK">
                <Grid.Column>
                  <p className="urununFiyati "> {product.urununFiyati} TL</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={5}>
            <a href="#">
              {" "}
              <Button fluid className="satinAlButon">
                SATIN AL
              </Button>
            </a>
          </Grid.Column>
        </Grid.Row>

        {/* SATICI NICKI VE ASSAGISI */}
        <Grid.Row>
          <Grid.Column width={3}>
            <Image
              className="margin-left-10px"
              src={product.saticininFotoLinki}
              circular
              size="large"
            />
          </Grid.Column>
          <Grid.Column width={13}>
            <Grid>
              <Grid.Row className="padding-YOK margin-top-30px">
                <Grid.Column>
                  <p className="float-left padding-YOK margin-top-30px satici-kullanici">
                    {product.saticininKullaniciAdi}
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={12}>
                  <p className="float-left padding-YOK">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ffe14d" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ffe14d" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ffe14d" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ffe14d" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#ffe14d" }}
                    />{" "}
                    &#40;{product.saticiPuani}&#41;
                  </p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    style={{ color: "#5dfdcd" }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
</Grid>

        {/**ACIKLAMALAR.! */}
        <Grid divided="vertically">
        <Grid.Row divided>
          <Grid.Column>
            <p className="text-align-left margin-left-25px">
              {product.urunAciklama}
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} className="margin-left-5px">
            <FontAwesomeIcon
              icon={faCircle}
              style={{ color: product.urununRGBKodu }}
            />{" "}
          </Grid.Column>
          <Grid.Column width={13}>
            <p className="float-left">Renk: {product.urunRengi}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid divided="vertically" >
        <Grid.Row>
          <Grid.Column>
                <p className="tac-emir">Dolap Avantajları</p>

          </Grid.Column>

          
        </Grid.Row>
        <Grid.Row divided="vertically" columns={3}>
          <Grid.Column>
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#632d8f" }}
              size="2xl"
            />
            <p> Problemsiz Alışveriş</p>
          </Grid.Column>
          <Grid.Column>
            <FontAwesomeIcon
              icon={faLock}
              size="2xl"
              style={{ color: "#ffde66" }}
            />{" "}
            <p> %100 Güvenli Ödeme</p>
          </Grid.Column>
          <Grid.Column>
            {" "}
            <FontAwesomeIcon
              icon={faComments}
              size="2xl"
              style={{ color: "#ff6b6b" }}
            />
            <p> Dolap Destek Hizmeti</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid divided="vertically">
        <Grid.Row>
          <Grid.Column width={3}>
            <FontAwesomeIcon icon={faTruckFast} size="2xl" />
          </Grid.Column>
          <Grid.Column width={12}>
            <p className="float-left alici-odemeli-kargo">
              Alıcı Ödemeli Kargo
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={3}>
            <FontAwesomeIcon icon={faCreditCard} size="2xl" />
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid>
              <Grid.Row className="padding-YOK margin-left-5px">
                <p className="float-left alici-odemeli-kargo">
                  Ödeme Seçenekleri
                </p>
              </Grid.Row>

              <Grid.Row className="padding-YOK margin-left-5px">
                <p className="text-align-left">
                  Kredi kartı veya banka kartı ile ödeme. Tüm kredi kartlarına 9
                  taksit imkanı! Bilgi için tıklayın!
                </p>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
