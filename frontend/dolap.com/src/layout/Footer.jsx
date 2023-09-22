import React from "react";
import { Container, Image, Grid, Button } from "semantic-ui-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {
  return (
    <div className="background-image-dolapfooter">
      <Container>
        <Grid>
          <Grid.Row className="margin-bot-50px">
            <Grid.Column width={8}>
              <Image
                floated="right"
                src="https://cdn.dolap.com/web/images/btn-apple.png"
              ></Image>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image
                floated="left"
                src="https://cdn.dolap.com/web/images/btn-google.png"
              ></Image>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/*GRID 2 */}
        {/*GRID 2 */}
        {/*GRID 2 */}
        {/*GRID 2 */}
        {/*GRID 2 */}
        {/*GRID 2 */}
        {/*GRID 2 */}
        {/*GRID 2 */}
        {/*GRID 2 */}
        {/*GRID 2 */}

        <Grid className="footer-textcolor-white">
          <Grid.Row>
            <Grid.Column width={2}></Grid.Column>
            <Grid.Column width={4} style={{ textAlign: "right" }}>
              <Grid>
                <Grid.Row floated="right">
                  <Grid.Column style={{ textAlign: "left" }}>
                    <p className="footer-renklendir-h3">Kategoriler</p>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row className="padding-bot-yok">
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Kol Çantası
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Hamile
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row className="padding-bot-yok">
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Mont
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Bebek
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row className="padding-bot-yok">
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Kazak
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Erkek Çocuk
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row className="padding-bot-yok">
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Çizme
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Kız Çocuk
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row className="padding-bot-yok">
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Bot
                  </Grid.Column>
                  <Grid.Column style={{ textAlign: "left" }} width={8}>
                    Tesettür
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width={4} style={{ textAlign: "right" }}>
              <Grid>
                <Grid.Row>
                  <Grid.Column style={{ textAlign: "left" }}>
                    <p className="footer-renklendir-h3">Popüler Aramalar</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid>
                <Grid.Row className="padding-bot-yok" columns={2}>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    Zara
                  </Grid.Column>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    Louis Vuitton
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row className="padding-bot-yok" columns={2}>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    Mango
                  </Grid.Column>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    Michael Kors
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className="padding-bot-yok" columns={2}>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    Nike
                  </Grid.Column>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    Gucci
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className="padding-bot-yok" columns={2}>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    H&M
                  </Grid.Column>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    Chanel
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className="padding-bot-yok" columns={2}>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    İpekyol
                  </Grid.Column>
                  <Grid.Column width={6} style={{ textAlign: "left" }}>
                    Prada
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width={4} style={{ textAlign: "center" }}>
              <Grid>
              <Grid.Row floated="right">
                  <Grid.Column style={{ textAlign: "left" }}>
                    <p className="footer-renklendir-h3">Dolap hakkında</p>
                  </Grid.Column>
                </Grid.Row>
              
              <Grid.Row className="padding-bot-yok" >
                  <Grid.Column  style={{ textAlign: "left" }}>
                    Kullanıcı Sözleşmesi
                  </Grid.Column>
                </Grid.Row>
                
              <Grid.Row className="padding-bot-yok" >
                  <Grid.Column  style={{ textAlign: "left" }}>
                    İletişim
                  </Grid.Column>
                </Grid.Row>
                
              <Grid.Row className="padding-bot-yok" >
                  <Grid.Column  style={{ textAlign: "left" }}>
                    Destek
                  </Grid.Column>
                </Grid.Row>
                
              <Grid.Row className="padding-bot-yok" >
                  <Grid.Column  style={{ textAlign: "left" }}>
                    Satıcı Soruları
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row className="padding-bot-yok" >
                  <Grid.Column style={{ textAlign: "left" }}>
                    Alıcı Soruları
                  </Grid.Column>
                </Grid.Row>
                
              <Grid.Row className="padding-bot-yok" >
                  <Grid.Column  style={{ textAlign: "left" }}>
                    Kişisel Verilerin Korunması
                  </Grid.Column>
                </Grid.Row>
                
              <Grid.Row className="padding-bot-yok" >
                  <Grid.Column  style={{ textAlign: "left" }}>
                    Dahili İletişim Sistemi
                  </Grid.Column>
                </Grid.Row>
                </Grid>
            </Grid.Column>

            <Grid.Column width={2}></Grid.Column>
          </Grid.Row>
          </Grid>
          


          {/*EN ALT SOCIAL ICONS */}
          <Grid columns={3} textAlign="center" className="social-media-icons">
      <Grid.Row>
        <Grid.Column>
        <a href="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="xl" className="footer-icon-renklendirici footer-icon-sagsol-margin footer-icon-border" />
          </a>


          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebookF} size="xl" className="footer-icon-renklendirici footer-icon-sagsol-margin footer-icon-border" />
          </a>
        

       
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="xl" className="footer-icon-renklendirici footer-icon-sagsol-margin footer-icon-border" />
          </a>
        </Grid.Column>
      </Grid.Row>
    </Grid>
       
      </Container>
    </div>
  );
}
