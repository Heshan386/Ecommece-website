import React, { useContext } from 'react'
import '../pages/css/ShopCatagory.css';
import { ShopContext } from '../contex/ShopContext';
import dropdown_icon from '../component/assets/dropdown_icon.png';
import Item from '../component/items/Item';
const ShopCatagory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-catagory'>
        <img className='shopcatagory-banner' src={props.banner} alt="" />
        <div className="shopcatgory-indexshort">
          <p>
            <span>Showing 1-12 </span> out of 36 products
          </p>
          <div className="shopcatagory-short">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcatagory-product">
          {all_product.map((item,i)=>{
            if(props.category===item.category){
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })}
        </div>
        <div className="shopcatagory-loadmore">
          Explore More
        </div>
    </div>
  )
}

export default ShopCatagory