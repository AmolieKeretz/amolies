import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css";
import { ShopContext } from '../../Context/ShopContext';
import { AuthContext } from '../../Context/AuthContext';
//icons
import { FaSearch } from "react-icons/fa";
// import { RxAvatar } from "react-icons/rx";
import { FaOpencart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [menu, setmenu ] = useState("shop");
  const menuRef = useRef();
  const {getTotalCartItems} = useContext(ShopContext);
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  ///Search
  const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${searchTerm}`);
        }
    };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid mx-5">
            <a class="navbar-brand" href="/">
                <p>Amolie</p>
                <span className='small-text'>SHOPPING</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul ref={menuRef} class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" onClick={()=>{setmenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'><p class="nav-link">Shop</p></Link> {menu==="shop"?<hr/>:<></>}</li>
        <li class="nav-item" onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none',}}  to='/mens'><p class="nav-link">Mens</p></Link> {menu==="mens"?<hr/>:<></>}</li>
        <li class="nav-item" onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none'}}  to='/womens'><p class="nav-link">Womens</p></Link> {menu==="womens"?<hr/>:<></>}</li>
        <li class="nav-item" onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none'}}  to='/kids'><p class="nav-link">Kids</p></Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      {/* Search */}
      <form class="d-flex" role="search" onSubmit={handleSearch}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <button class="btn btn-outline-success" type="submit"><FaSearch /></button>
      </form>

      {/* Sign In Sign Up */}
    {/* <button className="nav-login-cart d-flex pe-5">
      <RxAvatar className='profile' />
    </button> */}
    <nav className="nav-login-cart d-flex">
      {/* Your existing navbar code */}
      {isAuthenticated ? (
        <button onClick={() => { logout(); window.location.replace('/'); }}>Logout</button>
      ) : (
        <Link to='/login'><button onClick={login}>Login</button></Link>
      )}
    </nav>
    
    <div className="btn btn-light cart">
        <Link to='/cart'>
          <FaOpencart className='profile' />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
