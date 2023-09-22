package com.dolapWEB.Emirhan.Karakoc.controller;


import com.dolapWEB.Emirhan.Karakoc.business.abstracts.ProductService;
import com.dolapWEB.Emirhan.Karakoc.business.requests.CreateProductRequest;
import com.dolapWEB.Emirhan.Karakoc.business.responses.GetAllProducts;
import com.dolapWEB.Emirhan.Karakoc.business.responses.GetProductById;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/products")
@CrossOrigin
public class ProductAPI {
    private ProductService productService;
    public ProductAPI(ProductService productService){
        this.productService = productService;
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public void add(@RequestBody CreateProductRequest createProductRequest) {
        this.productService.add(createProductRequest);
    }

    @GetMapping("/{id}")
    public GetProductById getProductById(@PathVariable int id){
        return productService.getProductById(id);
    }


    @GetMapping("/getAllProducts")
    public List<GetAllProducts> getAllProducts(){
        return productService.getAll();
    }


}
