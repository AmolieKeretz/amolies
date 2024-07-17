import React from 'react'
import { Link } from 'react-router-dom';
import './Items.css'

const Items = (props) => {
  return (
    <>
    <div className="card">
        <Link to={`/products/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
        </Link>
        <h5 className="card-title">{props.name}</h5>
        <div className="card-body">
            <div className="item-price-new">
                <b>price: $ {props.new_price}</b>
            </div>
            <div className="item-price-old-container d-flex">
              M.R.P :  $<p className="item-price-old">
                {props.old_price}
              </p>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Items
