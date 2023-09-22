package com.dolapWEB.Emirhan.Karakoc.business.concretes;


import com.dolapWEB.Emirhan.Karakoc.business.abstracts.ProductService;
import com.dolapWEB.Emirhan.Karakoc.business.requests.CreateProductRequest;
import com.dolapWEB.Emirhan.Karakoc.business.responses.GetAllProducts;
import com.dolapWEB.Emirhan.Karakoc.business.responses.GetProductById;
import com.dolapWEB.Emirhan.Karakoc.data_access.ProductRepository;
import com.dolapWEB.Emirhan.Karakoc.entity.Product;
import com.dolapWEB.Emirhan.Karakoc.mapper.ModelMapperManager;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductManager implements ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ModelMapperManager modelMapperServiceImpl;


    @Override
    public void add(CreateProductRequest createProductRequest){

        Product product = new Product();
        product.setUrunBaslik(createProductRequest.getUrunBaslik());
        product.setYeniVeEtiketli(createProductRequest.getYeniVeEtiketli());
        product.setKargoUcretiniKimOder(createProductRequest.getKargoUcretiniKimOder());



        product.setUstMenuUrunYollari(createProductRequest.getUstMenuUrunYollari());
        product.setFotografLink1(createProductRequest.getFotografLink1());
        product.setFotografLink2(createProductRequest.getFotografLink2());
        product.setFotografLink3(createProductRequest.getFotografLink3());
        product.setFotografLink4(createProductRequest.getFotografLink4());

        product.setBegeniSayisi(createProductRequest.getBegeniSayisi());
        product.setUrununFiyati(createProductRequest.getUrununFiyati());
        product.setUrununYuksekFiyati(createProductRequest.getUrununYuksekFiyati());
        product.setSaticininFotoLinki(createProductRequest.getSaticininFotoLinki());
        product.setSaticininKullaniciAdi(createProductRequest.getSaticininKullaniciAdi());
        product.setSaticiPuani(createProductRequest.getSaticiPuani());
        product.setSaticininYildizSayisi(createProductRequest.getSaticininYildizSayisi());
        product.setUrunAciklama(createProductRequest.getUrunAciklama());
        product.setUrunRengi(createProductRequest.getUrunRengi());
        product.setUrununRGBKodu(createProductRequest.getUrununRGBKodu());


        this.productRepository.save(product);
    }

    @Override
    public GetProductById getProductById(int id) {
        Product product = this.productRepository.findById(id).orElseThrow();
        GetProductById product2 = new GetProductById();

        product2.setUrunBaslik(product.getUrunBaslik());
        product2.setYeniVeEtiketli(product.getYeniVeEtiketli());
        product2.setKargoUcretiniKimOder(product.getKargoUcretiniKimOder());


        product2.setUstMenuUrunYollari(product.getUstMenuUrunYollari());
        product2.setFotografLink1(product.getFotografLink1());

        product2.setFotografLink2(product.getFotografLink2());
        product2.setFotografLink3(product.getFotografLink3());
        product2.setFotografLink4(product.getFotografLink4());

        product2.setBegeniSayisi(product.getBegeniSayisi());
        product2.setUrununFiyati(product.getUrununFiyati());
        product2.setUrununYuksekFiyati(product.getUrununYuksekFiyati());
        product2.setSaticininFotoLinki(product.getSaticininFotoLinki());
        product2.setSaticininKullaniciAdi(product.getSaticininKullaniciAdi());
        product2.setSaticiPuani(product.getSaticiPuani());
        product2.setSaticininYildizSayisi(product.getSaticininYildizSayisi());
        product2.setUrunAciklama(product.getUrunAciklama());
        product2.setUrunRengi(product.getUrunRengi());

        product2.setUrununRGBKodu(product.getUrununRGBKodu());





        return product2;
    }


    @Override
    public List<GetAllProducts> getAll(){
        List<Product> products = this.productRepository.findAll();

            List<GetAllProducts> productsResponse = products.stream()
                    .map(product -> this.modelMapperServiceImpl.forResponse()
                            .map(product,GetAllProducts.class)).collect(Collectors.toList());





        return productsResponse;
    }

}
