import React from 'react'
import './Popular.css';
import Items from '../Items/Items';
import popular_Products from '../Assests/popular_Products'

const Popular = () => {
  //backend
//   const [popularProducts, setPopularProducts] = useState ([]);

//   useEffect(()=>{
//     fetch('https://server-dcp9.onrender.com/popularinwomen')
//     .then((response)=>response.json())
//     .then((data)=>setPopularProducts(data));
//   },[])

  return (
    <div className='container popular m-5 p-3'>
      <hr />
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popular_Products.map((item, i)=>{
            return <Items  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
      <hr />
    </div>
  )
}

export default Popular
