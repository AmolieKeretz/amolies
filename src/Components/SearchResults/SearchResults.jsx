import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { FaSearch } from 'react-icons/fa';

const SearchResults = () => {
    const { all_product } = useContext(ShopContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm) {
            const results = all_product.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <div>
            {/* Search */}
            <form className="d-flex" role="search" onSubmit={handleSearch}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-success" type="submit">
                    <FaSearch />
                </button>
            </form>

            {/* Search Results */}
            {filteredProducts.length > 0 && (
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {filteredProducts.map(product => (
                            <li key={product.id}>
                                {product.name} - ${product.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
