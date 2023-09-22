package com.dolapWEB.Emirhan.Karakoc.business.abstracts;


import com.dolapWEB.Emirhan.Karakoc.business.requests.CreateProductRequest;
import com.dolapWEB.Emirhan.Karakoc.business.responses.GetAllProducts;
import com.dolapWEB.Emirhan.Karakoc.business.responses.GetProductById;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@EnableJpaRepositories
public interface ProductService {
void add(CreateProductRequest createProductRequest);
GetProductById getProductById(int id);

List<GetAllProducts> getAll();

}
