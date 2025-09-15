import React, { useContext } from 'react'
import { ShopContext } from '../contex/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../component/Breadcrums/Breadcrum';
import ProductDispaly from '../component/ProductDisplay/ProductDispaly';
import DescriptionBox from '../component/DescriptionBox/DescriptionBox';
import RelatedProduct from '../component/RelatedProduct/RelatedProduct';

const Product = () => {

  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const Product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
        <Breadcrum product={Product}/>
        <ProductDispaly product={Product}/>
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}

export default Product