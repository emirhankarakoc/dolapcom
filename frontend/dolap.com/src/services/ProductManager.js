import axios from 'axios';

export default class ProductManager {
  async getProductById(id) {
    return axios.get("http://localhost:8080/admin/products/"+id);
  }

  async getAll() {
    return axios.get("http://localhost:8080/admin/products/getAllProducts");
  }



  

}

