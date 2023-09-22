package com.dolapWEB.Emirhan.Karakoc.business.requests;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data@AllArgsConstructor@NoArgsConstructor

public class CreateProductRequest {
    @NotNull
    @NotBlank
    private String urunBaslik;

    private String kargoUcretiniKimOder;

    private String yeniVeEtiketli;


    @NotNull
    @NotBlank private String ustMenuUrunYollari;


    @NotNull
    @NotBlank private String fotografLink1;
    private String fotografLink2;private String fotografLink3;private String fotografLink4;

    @NotNull
    @NotBlank  private int begeniSayisi;


    @NotNull
    @NotBlank  private int urununFiyati;

    @NotNull
    @NotBlank  private int urununYuksekFiyati;

    @NotNull
    @NotBlank  private String saticininFotoLinki;

    @NotNull
    @NotBlank  private String saticininKullaniciAdi;

    @NotNull
    @NotBlank  private int saticiPuani;

    @NotNull
    @NotBlank  private int saticininYildizSayisi;

    @NotNull
    @NotBlank  private String urunAciklama;

    @NotNull
    @NotBlank  private String urunRengi;

    @NotNull @NotBlank private String urununRGBKodu;

}
