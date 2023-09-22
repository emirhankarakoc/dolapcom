import React,{useState,useEffect} from 'react'
import { Grid,GridRow,GridColumn } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import ProductManager from '../services/ProductManager';

export default function UstMenuUrunYolu() {
    const { urun_id } = useParams();


    const [product, setProducts] = useState({ ustMenuUrunYollari: [] });
    useEffect((id) => {
    let productService = new ProductManager();
    productService.getProductById(urun_id).then((result) => setProducts(result.data));
  } ,[urun_id]);


  return (
        <Grid className='ustMenuUrunYollari-topbot-margin-sola-yatir'>
            <Grid.Row>
                <GridColumn>
                   <h3>{product.ustMenuUrunYollari}</h3> 
                </GridColumn>
            </Grid.Row>
        </Grid>

  )
}
