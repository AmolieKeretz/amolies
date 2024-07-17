import React, { useContext, useState, useEffect } from 'react';
import './SearchResultPage.css'
import { useLocation, Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const SearchResultsPage = () => {
    const { all_product } = useContext(ShopContext);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchTerm = params.get('q');
        if (searchTerm) {
            const results = all_product.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(results);
        }
    }, [location.search, all_product]);

    return (
        <div className='container text-center'><br />
            <h2>Search Results</h2>
            <div className="shopcategory-products ">
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <div className='Items bg-body-tertiary' key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img onClick={window.scrollTo(0,0)}
                            src={product.image} alt={product.name}/>
                        </Link>
                        <h5 className='card-title p-4'>{product.name}</h5>
                        <div className="item-price-new">
                            <b>price: $ {product.new_price}</b>
                        </div>
                        <p className="item-price-old">
                            M.R.P:  ${product.old_price}
                        </p>
                    </div>
                ))
            ) : (
                <p>No products found</p>
            )}
            </div> 
        </div>
    );
};

export default SearchResultsPage;
