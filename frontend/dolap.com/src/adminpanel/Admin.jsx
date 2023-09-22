import React, { useState } from 'react';
import { Form, Button,Label } from 'semantic-ui-react';

export default function Admin() {
  const [formData, setFormData] = useState({
    urunBaslik: '',
    ustMenuUrunYollari: '',
    fotografLink1: '',
    fotografLink2: '',
    fotografLink3: '',
    fotografLink4: '',

    begeniSayisi: 0,
    urununFiyati: 0,
    urununYuksekFiyati: 0,
    saticininFotoLinki: '',
    saticininKullaniciAdi: '',
    saticiPuani: 0,
    saticininYildizSayisi: 0,
    urunAciklama: '',
    urunRengi: '',
    urununRGBKodu: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // formData'yı kendi sunucunuza POST isteği ile gönderin
      const response = await fetch('http://localhost:8080/adminemirhan/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Ürün başarıyla gönderildi.');
        // İşlem başarılıysa burada başka bir işlem yapabilirsiniz.
      } else {
        console.error('Ürün gönderilirken bir hata oluştu.');
        // Hata durumunda burada hata işleme yapabilirsiniz.
      }
    } catch (error) {
      console.error('İstek gönderilirken bir hata oluştu:', error);
    }
  };

  return (
    <div className='padding-100px bgm-saritrak'>
        <a className='margin-top-30px' href="/"><h1>ANA SAYFAYA DON</h1></a>

<h1 style={{textAlign:'center'}}>ADMIN PANEL</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Ürünün Başlığı</label>
          <input
            type="text"
            name="urunBaslik"
            placeholder='Steelseries Mouse vs.'
            value={formData.urunBaslik}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
  <label>Ürünün Üst Menüdeki Yolları Anasayfa - Giyim - Kuşam - Yazacağımız yer burasıdır.</label>
  <input
    type="text"
    name="ustMenuUrunYollari"
    placeholder='Ana sayfa -> Teknoloji -> vs.'
    value={formData.ustMenuUrunYollari}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label>Fotoğraf Linki 1.</label>
  <input
    type="text"
    name="fotografLink1"
    placeholder='fotograf linki'
    value={formData.fotografLink1}
    onChange={handleInputChange}
  />
</Form.Field>
<Form.Field>
  <label>Fotoğraf Linki 2.</label>
  <input
    type="text"
    name="fotografLink2"
    placeholder='fotograf linki2'
    value={formData.fotografLink2}
    onChange={handleInputChange}
  />
</Form.Field>
<Form.Field>
  <label>Fotoğraf Linki 3.</label>
  <input
    type="text"
    name="fotografLink3"
    placeholder='fotograf linki3'
    value={formData.fotografLink3}
    onChange={handleInputChange}
  />
</Form.Field>
<Form.Field>
  <label>Fotoğraf Linki 4.</label>
  <input
    type="text"
    name="fotografLink4"
    placeholder='fotograf linki4'
    value={formData.fotografLink4}
    onChange={handleInputChange}
  />
</Form.Field>
<Label> bu label, src/adminpanel/admin.jsx 122. satirdadir. usttekileri kopyala yapistirla cogaltip , useState yaptigimiz yerde fotoLink'leri arttirabilirsiniz. springde de girip fieldlari kopyala yapistir yapabilirsiniz. 4 tane foto koyarsaniz iyi edersiniz. yoksa ayni fotolari tekrar tekrar koyun.</Label>

<Form.Field>
  <label>Beğeni Sayısını Gir</label>
  <input
    type="number"
    name="begeniSayisi"
    placeholder='SAYI OLARAK GIR'
    value={formData.begeniSayisi}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label>Ürünün Fiyatını Gir</label>
  <input
    type="number"
    name="urununFiyati"
    placeholder='SAYI OLARAK GIR'
    value={formData.urununFiyati}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label>Ürünün indirime girmeden önceki fiyatını gir *dümenden*</label>
  <input
    type="number"
    name="urununYuksekFiyati"
    placeholder='SAYI OLARAK GIR, üstü çizili olan burası'
    value={formData.urununYuksekFiyati}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label>Satıcının fotoğraf linkini buraya gir</label>
  <input
    type="text"
    name="saticininFotoLinki"
    placeholder='LİNK OLARAK GİR.'
    value={formData.saticininFotoLinki}
    onChange={handleInputChange}
  />
</Form.Field>



<Form.Field>
  <label>Satıcının Kullanıcı adını gir</label>
  <input
    type="text"
    name="saticininKullaniciAdi"
    placeholder='METIN OLARAK GIR, BOŞLUK BIRAKMADAN YAZ'
    value={formData.saticininKullaniciAdi}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label> Satıcı Puanını Gir</label>
  <input
    type="number"
    name="saticiPuani"
    placeholder='SAYI OLARAK GIR'
    value={formData.saticiPuani}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label>Satıcının YILDIZ Sayısını Gir</label>
  <input
    type="number"
    name="saticininYildizSayisi"
    placeholder='1-5 arası bir SAYI gir'
    value={formData.saticininYildizSayisi}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label>AÇIKLAMA YAZ</label>
  <input
    type="text"
    name="urunAciklama"
    placeholder=' kafana gore. 255 karakter siniri yok yaz gitsin.'
    value={formData.urunAciklama}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label>Rengini yazıver SİYAH BEYAZ MAVİ BOKRENGİ şeklinde</label>
  <input
    type="text"
    name="urunRengi"
    placeholder='METİN OLARAK GIR'
    value={formData.urunRengi}
    onChange={handleInputChange}
  />
</Form.Field>

<Form.Field>
  <label>RENGİNİN RENK KODUNU Gir</label>
  <input
    type="text"
    name="urununRGBKodu"
    placeholder='# ile başlayan, başına # koymayı unutma.'
    value={formData.urununRGBKodu}
    onChange={handleInputChange}
  />
</Form.Field>




        <Button type='submit'>Gönder</Button>
      </Form>
    </div>
  );
}
