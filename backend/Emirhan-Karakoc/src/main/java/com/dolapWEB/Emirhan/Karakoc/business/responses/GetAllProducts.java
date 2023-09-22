package com.dolapWEB.Emirhan.Karakoc.business.responses;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetAllProducts {
    private int id;
    private String urunBaslik;
    private String kargoUcretiniKimOder;

    private String yeniVeEtiketli;
    private String ustMenuUrunYollari;
    private String fotografLink1;
    private String fotografLink2;
    private String fotografLink3;
    private String fotografLink4;
    private int begeniSayisi;
    private int urununFiyati;
    private int urununYuksekFiyati;
    private String saticininFotoLinki;
    private String saticininKullaniciAdi;
    private int saticiPuani;
    private int saticininYildizSayisi;
    private String urunAciklama;
    private String urunRengi;
    private String urununRGBKodu;
}
