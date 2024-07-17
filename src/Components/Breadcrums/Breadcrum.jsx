import React from 'react'
import './Breadcrum.css'
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={<MdKeyboardArrowRight />} alt=''/> SHOP <img src={<MdKeyboardArrowRight />} alt=''/> {product.category} <img src={<MdKeyboardArrowRight />} alt=''/> {product.name}
    </div>
  )
}

export default Breadcrum
