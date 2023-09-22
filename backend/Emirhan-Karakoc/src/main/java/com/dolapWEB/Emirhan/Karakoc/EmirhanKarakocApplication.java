package com.dolapWEB.Emirhan.Karakoc;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EmirhanKarakocApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmirhanKarakocApplication.class, args);
	}



	@Bean
	public ModelMapper getModelMapper(){
		return  new ModelMapper();
	}


}
