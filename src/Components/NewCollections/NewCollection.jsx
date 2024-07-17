import React from 'react'
import './NewCollection.css'
import Items from '../Items/Items'
import new_collection from '../Assests/new_collections'

const NewCollection = () => {
  return (
    <div className='container m-5 p-3'>
      <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className=" collections">
            {new_collection.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        <hr />
    </div>
  )
}

export default NewCollection
