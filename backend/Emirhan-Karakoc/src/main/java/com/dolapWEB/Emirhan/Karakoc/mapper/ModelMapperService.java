package com.dolapWEB.Emirhan.Karakoc.mapper;
import org.modelmapper.ModelMapper;

public interface ModelMapperService {
    ModelMapper forResponse();
    ModelMapper forRequest();


}
