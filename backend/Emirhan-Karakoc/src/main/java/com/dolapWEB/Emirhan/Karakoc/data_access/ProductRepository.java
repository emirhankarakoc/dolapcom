package com.dolapWEB.Emirhan.Karakoc.data_access;


import com.dolapWEB.Emirhan.Karakoc.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {

}
