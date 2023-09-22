import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Grid, Table,Image } from 'semantic-ui-react';
import ProductManager from '../services/ProductManager';

export default function Liste() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    let productService = new ProductManager();
    productService
      .getAll()
      .then((result) => setProducts(result.data));
  });
  return (
    <div className='backgroundfotosu'>

      <Container className='margin-top-30px'>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Link to='/admin/sila_emirhan/ekle'>
                <h3>ADMIN PANEL ICIN TIKLA -----</h3>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <h1 style={{textAlign:'center'}}>ÜRÜNLER SAYFASI</h1>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Kucuk Resim</Table.HeaderCell>
              <Table.HeaderCell>Urun baslik</Table.HeaderCell>
              <Table.HeaderCell>Urun Fiyat</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {products.map((product) => (
              <Table.Row key={product.id}>
                <Table.Cell>
                  
                  
                  <Image src={product.fotografLink1} size='medium' />
                </Table.Cell>
                <Table.Cell>
                <a href={`/${product.id}`}>

                                     {product.urunBaslik}

                  </a>
<br />ürünün ismine tıkla ve ürün sayfasına git.
                </Table.Cell>
                <Table.Cell>
                  
                Ürünün fiyatı:  {product.urununFiyati} <br />
                Ürünün kargosunu kim ödeyecek: {product.kargoUcretiniKimOder}<br />
                Yenilik durumu:  {product.yeniVeEtiketli}<br />
                Kaynak yolu:  {product.ustMenuUrunYollari}<br />
                Beğeni Sayısı:  {product.begeniSayisi}<br />
                Satıcının kullanıcıadı: {product.saticininKullaniciAdi}<br />
                Satıcının puanı:  {product.saticiPuani}<br />

                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
