import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

// const ProductDisplay = ({products}) => {
  const ProductDisplay = (props) => {
  // if (!products) {
  //   return <div>Loading...</div>;
  // }
  const {products} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={products.image} alt="" />
            <img src={products.image} alt="" />
            <img src={products.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={products.image} alt=''/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{products.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${products.old_price}</div>
            <div className="productdisplay-right-price-new">${products.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Amolie zia jatema baba ketheguozolie
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(products.id)}}>ADD TO CART</button>
      
       {/* <button>ADD TO CART</button> */}
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay;
