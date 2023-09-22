package com.dolapWEB.Emirhan.Karakoc.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Table(name = "productDB")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "urunBaslik")
    private String urunBaslik;

    @Column(name = "kargo_ucreti")
    private String kargoUcretiniKimOder;

    @Column(name = "yeni_ve_etiketli")
    private String yeniVeEtiketli;


    @Column(name = "ust_menu_urun_yolu")
    private String ustMenuUrunYollari;


    @Column(name = "fotografLink1",columnDefinition = "text")
    private String fotografLink1;
    @Column(name = "fotografLink2",columnDefinition = "text")
    private String fotografLink2;
    @Column(name = "fotografLink3",columnDefinition = "text")
    private String fotografLink3;
    @Column(name = "fotografLink4",columnDefinition = "text")
    private String fotografLink4;


    @Column(name = "begeniSayisi")
    private int begeniSayisi;


    @Column(name = "fiyati")
    private int urununFiyati;

    @Column(name = "urununYuksekFiyati")
    private int urununYuksekFiyati;

    @Column(name = "saticininFotoLinki",columnDefinition = "text")
    private String saticininFotoLinki;


    @Column(name = "saticininKullaniciAdi")
    private String saticininKullaniciAdi;

    @Column(name = "saticiPuani")
    private int saticiPuani;

    @Column(name = "saticininYildizSayisi")
    private int saticininYildizSayisi;

    @Column(name = "urunAciklama",columnDefinition = "text")
    private String urunAciklama;

    @Column(name = "urunRengi")
    private String urunRengi;

    @Column(name = "urununRGBKodu")
    private String urununRGBKodu;

}
