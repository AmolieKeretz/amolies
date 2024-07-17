import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
// import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Products = () => {
  const {all_product } = useContext(ShopContext);
  const {productId} = useParams();
  const products = all_product.find((e)=> e.id === Number (productId));
  return (
    <div>
      {/* <Breadcrum product={product} /> */}
      <ProductDisplay products={products}/>
    </div>
  )
}

export default Products
