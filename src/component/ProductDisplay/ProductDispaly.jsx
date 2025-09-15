import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../contex/ShopContext';

const ProductDispaly = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext); 

  return (
    <div className='productdisplay'>
        <div className="productd-left">
            <div className="productd-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productd-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-start">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover shirt
            </div>
            <div className="productdispaly-right-size">
                <h1>Sellect Size</h1>
                <div className='productdispaly-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>                    
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdispaly-right-category'><span>Category :</span> women, t-shirt , crop top</p>
            <p className='productdispaly-right-category'><span>Tags :</span>modern, letest</p>
        </div>
    </div>
  )
}

export default ProductDispaly